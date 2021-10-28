import React from 'react';
import s from './Project.module.scss';
// @ts-ignore
import Tilt from 'react-tilt'


type ProjectPropsType = {
    title: string
    description: string
    style?:{ backgroundImage:string, filter?:string, width?:string}
    href:string
}

function Project(props: ProjectPropsType) {

    return (

        <div className={s.project}>
            <button className={s.btn}></button>
            <a style={props.style} className={s.icon} href={props.href}/>
            <div className={s.textWrap}>
                <span className={s.projectTitle}>
                   {props.title}
                </span>
                <div className={s.projectDescr}>
                    {props.description}
                </div>
            </div>
        </div>

    );
}

export default Project;