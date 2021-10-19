import React from 'react';
import s from './Main.module.scss';

function Main() {
    return (
        <div className={s.mainBlock}>
            <div className={s.addMargin}>
                <div className={s.text}>
                    <span> Hello There!</span>
                    <span> I am Ivan  <span> Vilde</span></span>
                    <span> React frontend developer</span>
                </div>
                <div className={s.img}></div>
            </div>

        </div>
    );
}

export default Main;