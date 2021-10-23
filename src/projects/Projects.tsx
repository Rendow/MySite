import React from 'react';
import s from './Projects.module.scss';
import Container from '../common/styles/Container.module.css';
import Project from "./project/Project";
import {Title} from "../common/components/Title";
import socialImg from '../assets/img/soc2.png'
import todoImg from '../assets/img/to-do-list.png'
import exchangeImg from '../assets/img/exc.png'
// @ts-ignore
import Fade from "react-reveal/Fade";

function Projects() {
    const exchange = {
        backgroundImage:`url(${exchangeImg})`,
        filter: 'invert(100%)',
        width:'145px'
    }
    const social = {
        backgroundImage:`url(${socialImg})`
    }
    const todo = {
        backgroundImage:`url(${todoImg})`,
        filter: 'invert(100%)',
        width:'145px'
    }

    return (
        <section id={'projects'} className={s.projectsBlock}>
            <Fade bottom reset={true}>
            <div className={s.projectsContainer}>
                <Title title={'My Projects'}/>

                <div className={s.projects}>
                    <Project style={todo}  title={'todolist'} description={'  Lorem ipsum dolor sit aur'}/>
                    <Project style={social} title={'social network'} description={'  beatae consectetur deleniti,  molestiae porro quibusdam quod rem tempora temporibus velit voluptates, voluptatum.\n'}/>
                    <Project style={exchange} title={'exchanger'} description={'met, consectetur adipisicing elit. Aperiam aspernat'}/>
                </div>

            </div>
                </Fade>
        </section>
    );
}

export default Projects;