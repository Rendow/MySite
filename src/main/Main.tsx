import React from 'react';
import s from './Main.module.scss';

function Main() {
    return (
        <div className={s.main}>
            <div className={s.wrap}>
                <div className={s.greeting}>
                    <span> Hello There!</span>
                    <span className={s.name}> I am Ivan  <span> Vilde</span></span>
                    <span> React frontend developer</span>
                </div>
                <div className={s.img}> </div>
            </div>

        </div>
    );
}

export default Main;