import React from 'react';
import s from './Title.module.scss';

type TitleType = {
    title:string | JSX.Element
    style?:{fontSize?:string}
}

export function Title(props:TitleType) {
    return   <div style={props.style} className={s.title}>
                    <span> {props.title}</span>
                </div>
}
