import React, {useState} from 'react';
import s from './Burger.module.scss';
//@ts-ignore
import {animateScroll as scroll, Link} from "react-scroll";
import Nav, {LinkWrapper} from "../nav/Nav";

function Burger() {
    const [open, setOpen] = useState(false)

    const toggleBurger = () => {setOpen(!open)}
   const toggleModal = () => {
        if(open) setOpen(!open)
    }

    const links = ['main','Technology' ,'projects','contacts' ]
    return (
        <header onClick={toggleModal} style={{height: open ? '0' : '60px'}} className={s.header}>
        <nav className={s.nav} >
            <div className={ s.navItems } style={{top: open ? '-160px' : '2px'}}>
                <Nav/>
            </div>
                <div  className={`${open ? s.menuActive : s.menu}`}>
                <div onClick={(e)=>{ e.stopPropagation()}} className={s.menuContent}>
                    <div className={s.menuHeader}>
                        {'menu'}
                    </div>
                    <div className={s.items}>
                        {links.map(i => {
                           return <div className={s.link}>
                               <LinkWrapper id={i}/>
                           </div>
                        })}

                    </div>
                </div>
            </div>

            <div className={ s.burgerBtn } onClick={ toggleBurger }>
                { !open && <BurgerBtn/>}
                { open && <div className={s.close} />}
            </div>
        </nav>
        </header>
    );
}

export const BurgerBtn = () => {
  return  <>
        <div style={{width: '16px'}} className={ s.burgerBtnItem } />
        <div className={ s.burgerBtnItem } />
        <div className={ s.burgerBtnItem } />
    </>
}
export default Burger;
