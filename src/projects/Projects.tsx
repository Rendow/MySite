import React from 'react';
import s from './Projects.module.scss';
import Project from "./project/Project";
import {Title} from "../common/components/Title/Title";
import socialImg from '../assets/img/soc2.png'
import todoImg from '../assets/img/tasks.png'
import todov2 from '../assets/img/todov2.png'
import exchangeImg from '../assets/img/money-exchange.png'
import chat from '../assets/img/chat.png'
import address from '../assets/img/address.png'
import dashboard from '../assets/img/PinClipart.com_beneficiary-clip-art_1453484.png'
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

SwiperCore.use([Navigation,Pagination]);

function Projects() {
    const styles = {
        todo :{
            backgroundImage: `url(${todoImg})`,
            width: '90%',
        },
        exchange: {
            backgroundImage: `url(${exchangeImg})`,
            width: '90%',
        },
         social :{
            backgroundImage: `url(${socialImg})`,
        },
        dashboard :{
            backgroundImage: `url(${dashboard})`,
        },
        chat :{
            backgroundImage: `url(${chat})`,
        },
        address :{
            backgroundImage: `url(${address})`,
        },
        todov2 :{
            backgroundImage: `url(${todov2})`,
        },
    }
    const projects = [
        {   id:1,
            style:styles.todo,
            href:"https://rendow.github.io/TodoList/",
            title:'Todolist',
            description: 'Include React, Redux, TypeScript, Material UI, Rest API, Thunk, Formik',
        },
        {   id:2,
            style:styles.social,
            href:"https://rendow.github.io/ReactSocial/",
            title:'Social network',
            description: 'Include React, Redux, TypeScript, WebSocket, Rest API, class component, hooks',
        },
        {   id:3,
            style:styles.exchange,
            href:"https://rendow.github.io/CurrencyExchange/",
            title:'Exchanger',
            description: 'Include React, Redux, TypeScript',

        },
        {   id:4,
            style:styles.dashboard,
            href:"https://rendow.github.io/dashboard/",
            title:'Dashboard',
            description: 'Test task - dashboard with hooks, axios, classnames, react-router-dom, sass',
        },
        {   id:5,
            style:styles.chat,
            href:"https://rendow.github.io/ws-chat/",
            title:'Chat',
            description: 'Test task - chat with WebSocket, local storage and offline mod (PWA), hooks, sass',
        },
        {   id:6,
            style:styles.address,
            href:"https://rendow.github.io/the-address-book/",
            title:'The address book',
            description: 'Test task - address book with Material UI, Rest API, Thunk, Formik, axios, hooks',
        },
        {   id:7,
            style:styles.todov2,
            href:"https://rendow.github.io/webinar-todo/",
            title:'Todolist v2',
            description: 'Test task - Todolist with Material UI, prettier, husky, immutableJs, TypeScript, drag\'n\'drop, hooks',
        },
    ]
    let params = {
        preloadImages: false,
        lazy: true,
        pagination: true,
        navigation: true,
        loop: false,
        spaceBetween: 5,
        slidesPerView:1,
        breakpoints:{820:{slidesPerView:2}},
        centeredSlides:false,
        centerInsufficientSlides:true,
    };

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
                        <Swiper
                            className={s.swiper}
                            {...params}
                        >
                        {projects.map(prj => {
                            return <SwiperSlide key={prj.id}  style={{width:'100%'}}>
                                <Project
                                href={prj.href}
                                style={prj.style}
                                title={prj.title}
                                description={prj.description}/>
                            </SwiperSlide>
                        })}
                        </Swiper>
                    </div>
                    <button  onClick={onClickHandler} className={s.btn}>download cv</button>

                </div>
            </Fade>
        </section>
    );
}

export default Projects;