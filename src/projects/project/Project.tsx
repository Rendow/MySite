import React from 'react';
import s from './Project.module.scss';
// @ts-ignore
import Tilt from 'react-tilt'


type ProjectPropsType = {
    title: string
    description: string
    style?:{ backgroundImage:string, filter?:string, width?:string}
    demo:string
    code:string
    projectType?:string
}

function Project(props: ProjectPropsType) {

    const onNavClick = (href:string) => {
        return () => {
            let win = window.open(href, '_blank');
            win && win.focus();
        }
    }
    return (
        <div className={s.project}>
                <div style={props.style} className={s.icon}>
                    <div className={s.wrap}>
                        <a className={s.btn} onClick={onNavClick(props.demo)}>DEMO </a>
                        <a className={s.btn} onClick={onNavClick(props.code)}>CODE </a>
                    </div>
                </div>

            <div className={s.textWrap}>
                <span className={s.projectTitle}>
                      {props.title}
                    <p>{props.projectType}</p>
                </span>
                <div className={s.projectDescr}>
                    {props.description}
                </div>
            </div>
        </div>

    );
}

export default Project;
