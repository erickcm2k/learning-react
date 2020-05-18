import React from 'react'
import '../assets/styles/components/Header.scss'
import logo from '../assets/static/logo-platzi-video-BW2.png'
import userIcon from '../assets/static/user-icon.png'

/* 
    Componentes presentacionales: 

    No tienen lógica, solo empujan
    una sección de HTML.
*/

const Header = () => (
  <header className="header">
    <img className="header__img" src={logo} alt="Platzi Video"></img>
    <div className="header__menu">
      <div className="header__menu--profile">
        <img src={userIcon} alt=""></img>
        <p>Perfil</p>
      </div>
      <ul>
        <li><a href="/">Cuenta</a></li>
        <li><a href="/">Cerrar Sesión</a></li>
      </ul>
    </div>
  </header>
)

export default Header