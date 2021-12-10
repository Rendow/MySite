import React from 'react';
import s from './Projects.module.scss';
import Project from "./project/Project";
import {Title} from "../common/components/Title/Title";
import '../App.css'
// @ts-ignore
import Fade from "react-reveal/Fade";
import Particles from "react-particles-js";
import {particlesOptClick} from "../common/animations/particles";
// @ts-ignore
import FileSaver from "file-saver";
// @ts-ignore
import cv from "../assets/resourse/cv.pdf";
import {Swiper, SwiperSlide} from "swiper/react/swiper-react";
import 'swiper/swiper.scss';
import 'swiper/modules/navigation/navigation.scss';
import 'swiper/modules/pagination/pagination.scss';
import SwiperCore, {Navigation, Pagination} from "swiper";
import {params, projects} from "./constants";

SwiperCore.use([Navigation, Pagination]);

function Projects() {

    const onClickHandler = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault()
        FileSaver.saveAs(
            cv, "Ivan Vilde.pdf")
    }

    return (
        <section id={'projects'} className={s.projectsBlock}>
            <Particles className={s.particlesWrap} params={particlesOptClick}/>


            <div className={s.projectsContainer}>
                <Title title={'Projects'}/>
                <Fade bottom reset={true}>
                    <div className={s.projects}>
                        <Swiper
                            className={s.swiper}
                            {...params}
                        >
                            {projects.map(prj => {
                                return <SwiperSlide key={prj.id} style={{width: '100%'}}>
                                    <Project
                                        projectType={prj.projectType}
                                        code={prj.code}
                                        demo={prj.demo}
                                        style={prj.style}
                                        title={prj.title}
                                        description={prj.description}/>
                                </SwiperSlide>
                            })}
                        </Swiper>
                    </div>
                    <button onClick={onClickHandler} className={s.btn}>download cv</button>
                </Fade>
            </div>

        </section>
    );
}

export default Projects;
