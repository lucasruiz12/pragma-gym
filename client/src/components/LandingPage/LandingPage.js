/* import React from 'react';
import { Link } from 'react-router-dom';
import style from './landing.module.css';

export function LandingPage() {
    return (
        <div>
            <Link to='/home'>
                <button className={style.button}><h3>INGRESAR</h3></button>
            </Link>
        </div>
    )
}

export default LandingPage; */

import React from "react";
import { Link } from "react-router-dom";
import style from "./landing.module.css";

export function Landing() {
  return (
    <div className={style.holder}>
      <div className={style.land}>
        <h1>Discover the world</h1>
        <div className={style.divi}>
          <button className={style.button}>
            <Link className={style.link} to="/home">
              INGRESAR
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
}
export default Landing;