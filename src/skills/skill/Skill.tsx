import React from 'react';
import s from './Skill.module.css';


type SkillPropsType = {
    title:string
    description:string
}

function Skill(props: SkillPropsType) {
    return (
        <div className={s.skill}>

            <div className={s.icon}> </div>
            <div className={s.textWrap}>
                <h3> {props.title}</h3>
            </div>
            <div className={s.text}>{props.description} </div>
        </div>
    );
}

export default Skill;