import React from 'react'
import { NavLink } from 'react-router-dom';
import style from './nav.module.css'
import img from '../../images/Negro-Naranja.jpeg'


export default function NavBar() {
    return (
            <nav className={style.navbar}>
                    <div>
                        <NavLink to={'/'}>
                            <img className={style.img} src={img} />
                        </NavLink>
                    </div>
                    <div className={style.bttn}>
                        <NavLink className={style.link} to={'/clients'}><p>VER CLIENTES</p></NavLink>
                    </div>
                    <div className={style.bttn}>
                        <NavLink className={style.link} to={'/newclient'}><p>NUEVO CLIENTE</p></NavLink>
                    </div>
                    <div className={style.bttn}>
                        <NavLink className={style.link} to={'/update'}><p>ACTUALIZAR CLIENTE</p></NavLink>
                    </div>
            </nav>
    )
}