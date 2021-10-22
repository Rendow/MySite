import React from 'react';
import Particles from 'react-particles-js';
import { particlesOpt } from '../common/animations/particles';
import s from './Main.module.scss';
// @ts-ignore
import Fade from "react-reveal/Fade";

function Main() {
    return (
        <main id={'main'} className={s.main}>
            <Particles className={s.particlesWrap}  params={particlesOpt}/>
            <Fade  bottom>
            <div className={s.wrap}>
                <div className={s.greeting}>

                    <span> Hello There!</span>
                    <span className={s.name}> I am Ivan  <span> Vilde</span></span>
                    <span> React frontend developer</span>
                </div>
                <div className={s.photo}>
                    <div  className={s.img}/>
                </div>

            </div>
            </Fade>
        </main>
    );
}

export default Main;