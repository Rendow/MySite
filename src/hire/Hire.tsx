import React from 'react';
import s from './Hire.module.css';
import Container from '../common/styles/Container.module.css';

function Hire() {
    return (
        <div className={s.wrap}>
            <div className={`${Container.container} ${s.main}`}>
                    <h2 className={s.text}> Considering options for remote work </h2>
                <a href="" className={s.link}> Hire me</a>
            </div>
        </div>
    );
}

export default Hire;