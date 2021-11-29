import React from 'react';
import s from './Skills.module.scss';
import Skill from "./skill/Skill";
import {Title} from "../common/components/Title/Title";
import {FaDocker, FaReact} from "react-icons/fa";
import {DiJavascript, DiSass} from 'react-icons/di';
import {BsCodeSlash} from 'react-icons/bs';
// @ts-ignore
import Fade from "react-reveal/Fade";
// @ts-ignore
import Tilt from 'react-tilt'
import {FaGitAlt} from "@react-icons/all-files/fa/FaGitAlt";
import {SiNextdotjs, SiSocketdotio} from 'react-icons/si';


function Skills() {

const skills = [{
    id:1,
    title:'javascript',
    icon:<DiJavascript className={s.icon}/>,
    description:'We love it, dont we?'
},{
    id:2,
    title:'react.js / redux',
    icon:<FaReact className={s.icon}/>,
    description:'Modern library for develop modern UI and BLL'
},
    {
        id:3,
        title:'typescript',
        icon:<BsCodeSlash className={s.icon}/>,
        description:'Static types make code more reliable'
    },
    {
        id:4,
        title:'design',
        icon:<DiSass className={s.icon}/>,
        description:'UI library and power of CSS prepros'
    },
    {
        id:5,
        title:'GIT / GITHUB',
        icon:<FaGitAlt className={s.icon}/>,
        description:'Version control made life easier'
    },
    {
        id:6,
        title:'REST API',
        icon:<SiSocketdotio className={s.icon}/>,
        description:'Communication with endpoints on back-end; as well as WebSocket, axios'
    },
    {
        id:7,
        title:'docker / dockerhub',
        icon:<FaDocker className={s.icon}/>,
        description:'You can use your app where you want'
    },
    {
        id:8,
        title:'next.js',
        icon:<SiNextdotjs className={s.icon}/>,
        description:'Built-in SSR support to improve performance and SEO'
    },
]
    return (
        <section id={'Technology'} className={s.skillsBlock}>
            <div className={s.skillsContainer}>
                <Title title={'Technology'}/>
                <Fade bottom reset={true}>
                    <div className={s.wrapper}>
                        <div className={s.skills}>
                            {skills.map(i => {
                                return <Skill key={i.id}
                                              icon={i.icon}
                                              title={i.title}
                                              description={i.description}/>
                            })}
                        </div>
                    </div>
                </Fade>
            </div>
        </section>
    );
}

export default Skills;
