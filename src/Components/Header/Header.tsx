import React from 'react';
import style from './Header.module.sass'
import logo from '../../assets/images/laptop.svg'
import {NavLink} from 'react-router-dom';
import {UserDataType} from "../../Redux/auth-reducer";


type PropsType = {
    isAuth: boolean
    login: string | null
    setAuthUserData: (data: UserDataType) => void
}
const Header = (props: PropsType) => {
    return (
        <header className={style.header}>
            <img className={style.logo} src={logo}/>
            <div className={style.login_block}>
                {props.isAuth
                    ? props.login
                    :
                    <NavLink to={'/login'}>Login</NavLink>
                }
            </div>
        </header>
    )
}

export default Header;