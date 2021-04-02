import React from 'react';
import s from './Skills.module.css';
import Container from '../common/styles/Container.module.css';
import Skill from "./skill/Skill";

function Skills() {
    let contClass = Container.container + ' ' + s.skillsContainer
    return (
        <div className={s.skillsBlock}>
            <div className={contClass}>
                <h2 className={s.title}> Skills</h2>
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