import React from 'react';
import s from './Nav.module.scss';
//@ts-ignore
import { Link, animateScroll as scroll } from "react-scroll";

function Nav() {
    return (
        <nav className={s.nav}>
            <LinkWrapper id={'main'}/>
            <LinkWrapper id={'skills'}/>
            <LinkWrapper id={'projects'}/>
            <LinkWrapper id={'contacts'}/>
        </nav>
    );
}
export const LinkWrapper = ({id}: { id: string }) => {

 let title = id.charAt(0).toUpperCase() + id.slice(1)

    return <Link
        activeClass={s.active}
        spy={true}
        smooth={true}
        offset={5}
        duration={500} to={id}> {title} </Link>
}

export default Nav;