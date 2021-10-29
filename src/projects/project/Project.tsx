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
    const onClickHandler = () => {
        let win = window.open(props.href, '_blank');
        win && win.focus();
    }
    return (
        <div className={s.project}>
                <div style={props.style} className={s.icon}>
                    <div className={s.wrap}>
                        <a className={s.btn} onClick={onClickHandler}>
                            DEMO </a>
                    </div>
                </div>

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