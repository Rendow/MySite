import React from 'react';
import s from './Skill.module.scss';
// @ts-ignore
import Tilt from 'react-tilt'


type SkillPropsType = {
    title:string
    description:string
    icon?:JSX.Element
}

function Skill(props: SkillPropsType) {
    return (
        <div className={s.skill}>
            <Tilt>
                <div className={s.iconWrap}>
                    {props.icon}
                </div>
            </Tilt>

            <div className={s.title}>
                <p> {props.title}</p>
            </div>
            <div className={s.text}>{props.description} </div>
        </div>
    );
}

export default Skill;