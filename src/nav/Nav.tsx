import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Nav.module.css';

function Nav() {
    return (
        <nav className={s.nav}>
            <NavLink to='/main'>Main</NavLink>
            <NavLink to='/projects'>Projects</NavLink>
            <NavLink to='/skills'>Skills</NavLink>
            <NavLink to='/contacts'>Contacts</NavLink>
        </nav>
    );
}

export default Nav;