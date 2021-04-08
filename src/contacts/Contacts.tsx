import React from 'react';
import s from './Contacts.module.css';
import Container from '../common/styles/Container.module.css';

function Contacts() {
    return (
        <div className={s.wrap}>
            <div className={`${Container.container} ${s.main}`}>
                <h2 className={s.text}> Contacts </h2>
                <form className={s.form} action="">
                    <input className={s.input} type="text"/>
                    <input  className={s.input} type="text"/>
                    <textarea className={s.textarea} name="" id="" > </textarea>
                </form>
                <button className={s.button}> Send</button>
            </div>
        </div>
    );
}

export default Contacts;