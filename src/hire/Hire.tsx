import React from 'react';
import s from './Hire.module.scss';
import Container from '../common/styles/Container.module.css';
import { Title } from '../common/components/Title';

function Hire() {
    return (
        <div className={s.wrap}>
            <div className={s.main}>
                    <Title title={'Considering options for remote work'} />
                <a href="" className={s.link}> Hire me</a>
            </div>
        </div>
    );
}

export default Hire;