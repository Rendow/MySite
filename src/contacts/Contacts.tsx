import React, { useState } from 'react';
import s from './Contacts.module.scss';
import {Title} from "../common/components/Title/Title";
// @ts-ignore
import Fade from "react-reveal/Fade";
import axios from "axios";
// @ts-ignore
//import {useAlert} from "react-alert";

function Contacts() {
    const [disableBtn, setDisableBtn] = useState(false)
  // const alert = useAlert();

    function validate(email: string) {
        let emailRegex = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
        if (!emailRegex.test(email)) {
            return false;
        }
        return true;
    }

    function handleSubmit(e: any) {
        e.preventDefault()
        setDisableBtn(true)
        const {name, lastname, email, message} = e.currentTarget.elements
        console.log(name.value)
        if (validate(email.value)) {
            const response = axios.post('https://smtp--node-server.herokuapp.com/sendEmail'
                , {
                name: name.value,
                lastname: lastname.value,
                email: email.value,
                message: message.value,
            })
         //  response.then(() => alert.show("Email sent successfully"))
            //  response.catch(() => alert.error('Server error'))
          response.then(() => alert("Email sent successfully"))
        response.catch(() => alert('Server error'))

            response.finally(() => {
                e.target.reset()
                setDisableBtn(false)
            })
        } else {
          //  alert.error('Incorrect email')
          alert('Incorrect email')
            e.target.reset()
        }
    }
    return (
        <section id={'contacts'}  className={s.wrap}>
            <Fade bottom reset={true}>
                <div className={s.main}>
                    <Title title={'Contacts'}/>
                    <form className={s.form} onSubmit={handleSubmit}>
                        <input required placeholder='Name' name='name'/>
                        <input required placeholder='Surname' name='lastname'/>
                        <input required placeholder='Email' name='email'/>
                        <textarea required placeholder='Message' name='message'/>
                        <button disabled={disableBtn} type={'submit'} className={s.btn}> Send message</button>
                    </form>
                </div>
            </Fade>
        </section>
    );
}


export default Contacts;