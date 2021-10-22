import React from 'react';
import s from './Skill.module.scss';


type SkillPropsType = {
    title:string
    description:string
    icon?:JSX.Element
}

function Skill(props: SkillPropsType) {
    return (
        <div className={s.skill}>
            <div className={s.iconWrap}>
                {props.icon}
            </div>
            <div className={s.title}>
                <p> {props.title}</p>
            </div>
            <div className={s.text}>{props.description} </div>
        </div>
    );
}

export default Skill;