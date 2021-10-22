import React from 'react';
import s from './Nav.module.css';

function Nav() {
    return (
        <nav className={s.nav}>
            <a href='#main'>Main</a>
            <a href='#projects'>Projects</a>
            <a href='#skills'>Skills</a>
            <a href='#contacts'>Contacts</a>
        </nav>
    );
}

export default Nav;