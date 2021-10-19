import React from 'react';
import s from './Project.module.scss';


type ProjectPropsType = {
    title: string
    description: string
   style:{ backgroundImage:string}
}

function Project(props: ProjectPropsType) {

    return (
        <div className={s.project}>
            <a style={props.style} className={s.icon} href=""/>
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