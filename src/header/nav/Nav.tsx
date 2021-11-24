import React from 'react';
import s from './Nav.module.scss';
//@ts-ignore
import { Link, animateScroll as scroll } from "react-scroll";

export const Nav = () => {
    return (
        <>
            <LinkWrapper id={'main'}/>
            <LinkWrapper id={'Technology'}/>
            <LinkWrapper id={'projects'}/>
            <LinkWrapper id={'contacts'}/>
        </>
    );
}



export const LinkWrapper = ({id}: { id: string }) => {
 let title = id.charAt(0).toUpperCase() + id.slice(1)

    return <Link
        className={s.link}
        activeClass={s.active}
        spy={true}
        smooth={true}
        offset={-31}
        duration={500} to={id}> {title} </Link>
}

export default Nav;