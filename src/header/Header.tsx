import React from 'react';
import s from './Header.module.scss';
import Nav from "./nav/Nav";
import Burger from "./burger/Burger";

function Header() {
    return (
        // <header className={s.header}>
        //     <Burger />
        // </header>
            <Burger />
    );
}

export default Header;