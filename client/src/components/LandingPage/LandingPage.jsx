import React from 'react';
import { Link } from 'react-router-dom';
import style from './landing.module.css';
import img from '../../images/Naranja-Blanco.jpeg'

export function LandingPage() {
    return (
        <div>
            <Link to='/home' className={style.link}>
                <div className={style.container}>
                    <img src={img} className={style.img} />
                    <h3 className={style.msg}>INGRESAR</h3>
                </div>
            </Link>
        </div>
    )
}

export default LandingPage;