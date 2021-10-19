import React from 'react';
import s from './Contacts.module.scss';
import {Title} from "../common/components/Title";

function Contacts() {
    return (
        <div className={s.wrap}>

            <div className={s.main}>
                    <Title title={'Contacts'} />
                <form className={s.form} action="">
                    <input required placeholder='Name' name='name'/>
                    <input required placeholder='Surname' name='lastname'/>
                    <input required placeholder='Email' name='email'/>
                    <textarea required placeholder='Message' name='message'/>
                    <button type={'submit'} className={s.btn}> Send message</button>
                </form>

            </div>
        </div>
    );
}


export default Contacts;