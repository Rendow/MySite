import React from 'react';
import s from './Footer.module.css';
import Container from '../common/styles/Container.module.css';

function Footer() {
    return (
        <div className={s.wrap}>
            <div className={`${Container.container} ${s.main}`}>
                <h2 className={s.text}> Ivan Haydin </h2>
                <div className={s.links}>
                    <div className={s.link}></div>
                    <div className={s.link}></div>
                    <div className={s.link}></div>
                    <div className={s.link}></div>

                </div>
                <p>&#169; all rights not reserved</p>
        </div>
        </div>
    );
}

export default Footer;