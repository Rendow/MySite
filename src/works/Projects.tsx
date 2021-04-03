import React from 'react';
import s from './Projects.module.css';
import Container from '../common/styles/Container.module.css';
import Project from "./work/Project";

function Projects() {
    let contClass = Container.container + ' ' + s.skillsContainer
    return (
        <div className={s.skillsBlock}>
            <div className={contClass}>
                <h2 className={s.title}> My Projects</h2>
                <div className={s.skills}>

                    <Project title={'todolist'} description={'  Lorem ipsum dolor sit aur'}/>
                    <Project title={'social network'} description={'  beatae consectetur deleniti,  molestiae porro quibusdam quod rem tempora temporibus velit voluptates, voluptatum.\n'}/>
                    <Project title={'counter'} description={'met, consectetur adipisicing elit. Aperiam aspernat'}/>
                </div>

            </div>
        </div>
    );
}

export default Projects;