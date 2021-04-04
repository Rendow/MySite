import React from 'react';
import s from './Project.module.css';


type SkillPropsType = {
    title: string
    description: string
}

function Project(props: SkillPropsType) {
    return (
        <div className={s.project}>

            <div className={s.icon}>
                <a href=""> Look</a>
            </div>
            <div className={s.textWrap}>
                <div>
                    <h3> {props.title}</h3>
                </div>

                <div>
                    {props.description}
                </div>
            </div>
        </div>
    );
}

export default Project;