import React from 'react';
import s from './Projects.module.css';
import Container from '../common/styles/Container.module.css';
import Project from "./project/Project";
import {Title} from "../common/components/Title";

function Projects() {
    let contClass = Container.container + ' ' + s.projectsContainer
    return (
        <div className={s.projectsBlock}>
            <div className={contClass}>
                <Title title={'My Projects'}/>
                {/*<div className={s.title}>*/}
                {/*    <h2> My Projects</h2>*/}
                {/*</div>*/}

                <div className={s.projects}>
                    <Project title={'todolist'} description={'  Lorem ipsum dolor sit aur'}/>
                    <Project title={'social network'} description={'  beatae consectetur deleniti,  molestiae porro quibusdam quod rem tempora temporibus velit voluptates, voluptatum.\n'}/>
                    <Project title={'counter'} description={'met, consectetur adipisicing elit. Aperiam aspernat'}/>
                </div>

            </div>
        </div>
    );
}

export default Projects;