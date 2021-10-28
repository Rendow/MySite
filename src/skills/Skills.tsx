import React from 'react';
import s from './Skills.module.scss';
import Skill from "./skill/Skill";
import {Title} from "../common/components/Title/Title";
import {FaReact} from "react-icons/fa";
import {DiJavascript, DiSass} from 'react-icons/di';
import {BsCodeSlash} from 'react-icons/bs';
// @ts-ignore
import Fade from "react-reveal/Fade";
// @ts-ignore
import Tilt from 'react-tilt'
// @ts-ignore
import FileSaver from "file-saver";
// @ts-ignore
import cv from "../assets/resourse/cv.pdf";


function Skills() {

    const onClickHandler = (event: React.MouseEvent<HTMLButtonElement>) => {
       event.preventDefault()
        FileSaver.saveAs(
            cv, "Ivan Vilde.pdf")
    }
    return (
        <section id={'skills'} className={s.skillsBlock}>
            <div className={s.skillsContainer}>
                <Fade bottom reset={true}>

                    <Title title={'Technology'}/>
                    <div className={s.wrapper}>
                        <div className={s.skills}>
                            <Skill icon={<DiJavascript className={s.icon}/>}
                                   title={'javascript'} description={'We love it, don\'t we?'}/>

                            <Skill icon={<FaReact className={s.icon}/>} title={'react / redux'}
                                   description={'Modern library for develop modern UI and BLL'}/>
                            <Skill icon={<BsCodeSlash className={s.icon}/>} title={'typescript'}
                                   description={'Static types make code more reliable'}/>
                            <Skill icon={<DiSass className={s.icon}/>} title={'design'}
                                   description={'UI library and power of CSS prepros'}/></div>
                        <div className={s.aboutMe}>
                            <ul>
                                <li>REST API / WebSocket / Axios  <p> For communication with endpoints on back-end</p></li>
                                <li>GIT / GITHUB<p> Version control made life easier</p></li>
                                <li>Unit tests
                                    <p> Created Unit tests</p></li>


                            </ul>
                            <button  onClick={onClickHandler} className={s.btn}>download cv</button>
                        </div>
                    </div>
                </Fade>
            </div>
        </section>
    );
}

export default Skills;