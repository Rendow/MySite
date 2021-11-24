import React, {useState} from 'react';
import s from './Contacts.module.scss';
import {Title} from "../common/components/Title/Title";
// @ts-ignore
import Fade from "react-reveal/Fade";
import axios from "axios";

function Contacts() {
    const [disableBtn, setDisableBtn] = useState(false)

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

        const {name, email, message} = e.currentTarget.elements

        if (validate(email.value)) {
            const response = axios.post('https://smtp--node-server.herokuapp.com/sendEmail'
                , {
                    name: name.value,
                    //lastname: lastname.value,
                    email: email.value,
                    message: message.value,
                })

            response.then(() => alert("Email sent successfully"))
            response.catch(() => alert('Server error'))

            response.finally(() => {
                e.target.reset()
                setDisableBtn(false)
            })
        } else {
            alert('Incorrect email')
            e.target.reset()
        }
    }

    let btnClass = disableBtn ? s.btnDisable : s.btn

    return (
        <section id={'contacts'} className={s.wrap}>
                <div className={s.main}>
                    <Title title={'Contacts'}/>
                    <form className={s.form} onSubmit={handleSubmit}>
                        <input required placeholder='Name' name='name'/>
                        {/*<input required placeholder='Surname' name='lastname'/>*/}
                        <input required placeholder='Email' name='email'/>
                        <textarea required placeholder='Message' name='message'/>
                        <button disabled={disableBtn} type={'submit'} className={btnClass}> Send message</button>
                    </form>
                </div>
        </section>
    );
}


export default Contacts;