import React from 'react';
import s from './Footer.module.scss';
import {BsGithub, BsTelegram} from "react-icons/all";
import {AiOutlineLinkedin} from "@react-icons/all-files/ai/AiOutlineLinkedin";
import {FaFreeCodeCamp} from "@react-icons/all-files/fa/FaFreeCodeCamp";
import {Title} from "../common/components/Title/Title";
// @ts-ignore
import ReactTypingEffect from 'react-typing-effect';

function Footer() {
    return (
        <footer className={s.wrap}>
            <div className={s.main}>
                <span className={s.text}>
                    <Title title={'Ivan Vilde'}/>
                </span>
                <div className={s.links}>
                    <a href="https://telegram.im/@Reendom">
                        <BsTelegram className={s.link}/>
                    </a>

                    <a href="https://www.linkedin.com/in/ivan-vilde-a36b05207/">
                        <AiOutlineLinkedin className={s.link}/>
                    </a>

                    <a href="https://www.codewars.com/users/Rendow">
                        <FaFreeCodeCamp className={s.link}/>
                    </a>
                    <a href="https://github.com/Rendow">
                        <BsGithub className={s.link}/>
                    </a>

                </div>
                <pre>&#169; <ReactTypingEffect speed={200} text={`all rights not reserved`}/> </pre>
            </div>
        </footer>
    );
}

export default Footer;