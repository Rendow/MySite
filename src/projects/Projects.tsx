import React from 'react';
import s from './Projects.module.scss';
import Container from '../common/styles/Container.module.css';
import Project from "./project/Project";
import {Title} from "../common/components/Title/Title";
import socialImg from '../assets/img/soc2.png'
import todoImg from '../assets/img/to-do-list.png'
import exchangeImg from '../assets/img/exc.png'
// @ts-ignore
import Fade from "react-reveal/Fade";
import Particles from "react-particles-js";
import {particlesOptClick, particlesOptHover} from "../common/animations/particles";

function Projects() {
    const exchange = {
        backgroundImage: `url(${exchangeImg})`,
        filter: 'invert(100%)',
        width: '145px'
    }
    const social = {
        backgroundImage: `url(${socialImg})`
    }
    const todo = {
        backgroundImage: `url(${todoImg})`,
        filter: 'invert(100%)',
        width: '145px'
    }

    return (
        <section id={'projects'} className={s.projectsBlock}>
            <Particles className={s.particlesWrap}    params={particlesOptClick} />

            <Fade bottom reset={true}>
                <div className={s.projectsContainer}>
                    <Title title={'Projects'}/>

                    <div className={s.projects}>
                        <Project
                            href="https://rendow.github.io/TodoList/"
                            style={todo}
                            title={'todolist'}
                            description={'  Lorem ipsum dolor sit aur'}/>


                        <Project href="https://rendow.github.io/ReactSocial/"
                                 style={social}
                                 title={'social network'}
                                 description={' beatae consectetur deleniti,  dam quod rem tempora tem'}/>

                        <Project
                            href={"https://rendow.github.io/CurrencyExchange/"}
                            style={exchange}
                            title={'exchanger'}
                            description={'met, consectetur adipisicing elit. Aperiam aspernat'}/>
                    </div>

                </div>
            </Fade>
        </section>
    );
}

export default Projects;