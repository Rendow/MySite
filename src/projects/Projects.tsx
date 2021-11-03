import React from 'react';
import s from './Projects.module.scss';
import Project from "./project/Project";
import {Title} from "../common/components/Title/Title";
import socialImg from '../assets/img/soc2.png'
import todoImg from '../assets/img/to-do-list_mod.png'
import exchangeImg from '../assets/img/exc_mod.png'
// @ts-ignore
import Fade from "react-reveal/Fade";
import Particles from "react-particles-js";
import {particlesOptClick} from "../common/animations/particles";
// @ts-ignore
import FileSaver from "file-saver";
// @ts-ignore
import cv from "../assets/resourse/cv.pdf";

function Projects() {
    const exchange = {
        backgroundImage: `url(${exchangeImg})`,
        width: '90%',
    }
    const social = {
        backgroundImage: `url(${socialImg})`,
        filter: 'none',
    }
    const todo = {
        backgroundImage: `url(${todoImg})`,
        width: '90%',
    }
    const onClickHandler = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault()
        FileSaver.saveAs(
            cv, "Ivan Vilde.pdf")
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
                            description={'Include Material UI, Rest API, Thunk, Formik'}/>


                        <Project href="https://rendow.github.io/ReactSocial/"
                                 style={social}
                                 title={'social network'}
                                 description={'Include WebSocket, Rest API, Class component, Hooks'}/>

                        <Project
                            href={"https://rendow.github.io/CurrencyExchange/"}
                            style={exchange}
                            title={'exchanger'}
                            description={'Include React, Redux, TypeScript, Bootstrap element'}/>
                    </div>
                    <button  onClick={onClickHandler} className={s.btn}>download cv</button>


                </div>
            </Fade>
        </section>
    );
}

export default Projects;