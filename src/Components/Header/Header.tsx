import React from 'react';
import style from './Header.module.sass'
import logo from '../../assets/images/laptop.svg'

const Header = () => {
    return(
        <header className={style.header}>
            <img className={style.logo} src={logo}/>
        </header>
    )
}

export default Header;