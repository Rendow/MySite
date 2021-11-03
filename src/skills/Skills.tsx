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
import {FaGitAlt} from "@react-icons/all-files/fa/FaGitAlt";
import {SiSocketdotio} from 'react-icons/si';


function Skills() {


    return (
        <section id={'skills'} className={s.skillsBlock}>
            <div className={s.skillsContainer}>
                <Fade bottom reset={true}>

                    <Title  title={'Technology'}/>
                    <div className={s.wrapper}>
                        <div className={s.skills}>
                            <Skill icon={<DiJavascript className={s.icon}/>}
                                   title={'javascript'} description={'We love it, don\'t we?'}/>

                            <Skill icon={<FaReact className={s.icon}/>} title={'react / redux'}
                                   description={'Modern library for develop modern UI and BLL'}/>
                            <Skill icon={<BsCodeSlash className={s.icon}/>} title={'typescript'}
                                   description={'Static types make code more reliable'}/>
                            <Skill icon={<DiSass className={s.icon}/>} title={'design'}
                                   description={'UI library and power of CSS prepros'}/>
                            <Skill icon={<FaGitAlt className={s.icon}/>} title={'GIT / GITHUB'}
                                   description={'Version control made life easier'}/>

                            <Skill icon={<SiSocketdotio className={s.icon}/>} title={'REST API'}
                                   description={' As well as WebSocket, Axios. Communication with endpoints on back-end'}/>
                        </div>

                    </div>
                </Fade>
            </div>
        </section>
    );
}

export default Skills;