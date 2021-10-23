import React from 'react';
import s from './Skills.module.scss';
import Skill from "./skill/Skill";
import {Title} from "../common/components/Title";
import {FaReact} from "react-icons/fa";
import {DiJavascript, DiSass} from 'react-icons/di';
import {BsCodeSlash} from 'react-icons/bs';
// @ts-ignore
import Fade from "react-reveal/Fade";
// @ts-ignore
import Tilt from 'react-tilt'

function Skills() {
    return (
        <section id={'skills'} className={s.skillsBlock}>
            <div className={s.skillsContainer}>
                <Fade bottom reset={true}>

                    <Title title={'My Skills'}/>
                    <div className={s.skills}>

                        <Skill icon={<DiJavascript className={s.icon}/>}
                               title={'javascript'} description={'  Lorem ipsum dolor sit aur'}/>

                        <Skill icon={<FaReact className={s.icon}/>} title={'react'}
                               description={'met, consectetur adipisicing elit. Aperiam aspernat'}/>
                        <Skill icon={<BsCodeSlash className={s.icon}/>} title={'typescript'}
                               description={'  beatae consectetur deleniti,  molestiae porro quibusdam quod rem tempora temporibus velit voluptates, voluptatum.\n'}/>
                        <Skill icon={<DiSass className={s.icon}/>} title={'sass'}
                               description={'eius expedita explicabo fugiat in iste magnam'}/>
                    </div>
                </Fade>
            </div>
        </section>
    );
}

export default Skills;