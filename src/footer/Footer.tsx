import React from 'react';
import s from './Footer.module.scss';
import {BsGithub, BsTelegram, SiCodewars} from "react-icons/all";
import {AiOutlineLinkedin} from "@react-icons/all-files/ai/AiOutlineLinkedin";
import {FaFreeCodeCamp} from "@react-icons/all-files/fa/FaFreeCodeCamp";
import {Title} from "../common/components/Title";
// @ts-ignore
import ReactTypingEffect from 'react-typing-effect';

function Footer() {
    return (
        <footer className={s.wrap}>
            <div className={s.main}>
                <span className={s.text}>
                    <Title title={'Ivan Vilde'} />
                </span>
                <div className={s.links}>
                    <AiOutlineLinkedin className={s.link} />
                    <BsGithub className={s.link} />
                    <BsTelegram className={s.link} />
                    <FaFreeCodeCamp className={s.link}/>
                </div>
                <pre>&#169; <ReactTypingEffect speed={200} text={`all rights not reserved`}/> </pre>
        </div>
        </footer>
    );
}

export default Footer;