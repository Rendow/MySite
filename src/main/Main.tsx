import React from 'react';
import s from './Main.module.css';
import Container from '../common/styles/Container.module.css';

function Main() {
    return (
        <div className={s.mainBlock}>
            <div className={Container.container}>
                <div className={s.text}>
                    <span> Hello There!</span>
                    <h1>I am Ivan Haydin </h1>
                    <p> React frontend developer from Saint-Petersburg</p>
                </div>
                <div className={s.img}></div>
            </div>

        </div>
    );
}

export default Main;