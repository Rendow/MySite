import React from 'react';
import s from './Footer.module.scss';
import Container from '../common/styles/Container.module.css';
import {FaSass} from "@react-icons/all-files/fa/FaSass";
import {BsGithub, FaLinkedinIn, TiSocialLinkedinCircular} from "react-icons/all";
import {FiGithub} from "@react-icons/all-files/fi/FiGithub";
import {AiOutlineLinkedin} from "@react-icons/all-files/ai/AiOutlineLinkedin";
import {FaFreeCodeCamp} from "@react-icons/all-files/fa/FaFreeCodeCamp";
import {Title} from "../common/components/Title";

function Footer() {
    return (
        <div className={s.wrap}>
            <div className={s.main}>
                <span className={s.text}>
                    <Title title={'Ivan'} />
                </span>
                <div className={s.links}>
                    <AiOutlineLinkedin className={s.link} />
                    <BsGithub className={s.link} />

                    <FaFreeCodeCamp className={s.link} />
                </div>
                <p>&#169; all rights not reserved</p>
        </div>
        </div>
    );
}

export default Footer;