import React, {useState} from 'react';
import s from './Burger.module.scss';
//@ts-ignore
import { Link, animateScroll as scroll } from "react-scroll";
import {LinkWrapper} from "../nav/Nav";

function Burger() {
    const [open, setOpen] = useState(false)

    const toggleBurger = () => {
        setOpen(!open)
    }

    return (
        <nav className={s.nav}>
            <div className={ open ? `${ s.navItems } ${ s.show }` : s.navItems }>
                <LinkWrapper id={'main'}/>
                <LinkWrapper id={'skills'}/>
                <LinkWrapper id={'projects'}/>
                <LinkWrapper id={'contacts'}/>
            </div>
            <div className={ s.burgerBtn } onClick={ toggleBurger }>
                { !open &&
                <>
                    <div className={ s.burgerBtnItem } />
                    <div className={ s.burgerBtnItem } />
                    <div className={ s.burgerBtnItem } />
                </>}
                { open && <div className={ s.close } />}
            </div>
        </nav>
    );
}

export default Burger;