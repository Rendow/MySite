import React from 'react';
import Particles from 'react-particles-js';
import { particlesOptHover} from '../common/animations/particles';
import s from './Main.module.scss';
// @ts-ignore
import Fade from "react-reveal/Fade";
// @ts-ignore
import ReactTypingEffect from 'react-typing-effect';
// @ts-ignore
import Tilt from 'react-tilt'

function Main() {
    return (
        <main id={'main'} className={s.main}>
            <Particles className={s.particlesWrap}  params={particlesOptHover}/>
            <div className={s.wrap}>
                <div className={s.greeting}>
                    <ReactTypingEffect  cursorClassName={s.cursor}  speed={100} text={'Hello There! '}/>
                    <span className={s.name}> I am Ivan  <span> Vilde</span></span>
                    <span> Frontend developer</span>
                </div>
                <Tilt options={{max :10 }}>
                <div className={s.photo}>
                    <div  className={s.img}/>
                </div>
                    </Tilt>
            </div>
        </main>
    );
}

export default Main;
