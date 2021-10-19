import React from 'react';
import s from './Skills.module.scss';
import Container from '../common/styles/Container.module.css';
import Skill from "./skill/Skill";
import {Title} from "../common/components/Title";

function Skills() {
    return (
        <div className={s.skillsBlock}>
            <div className={s.skillsContainer}>
                <Title title={'Skills'}/>
                <div className={s.skills}>
                    <Skill title={'js'} description={'  Lorem ipsum dolor sit aur'}/>
                    <Skill title={'ts'} description={'  beatae consectetur deleniti,  molestiae porro quibusdam quod rem tempora temporibus velit voluptates, voluptatum.\n'}/>
                    <Skill title={'react'} description={'met, consectetur adipisicing elit. Aperiam aspernat'}/>
                    <Skill title={'css'} description={'eius expedita explicabo fugiat in iste magnam'}/>
                </div>
            </div>
        </div>
    );
}

export default Skills;