import React from 'react';
import style from './Header.module.sass'
import logo from '../../assets/images/laptop.svg'
import {NavLink} from 'react-router-dom';


type PropsType = {
    isAuth: boolean
    login: string | null
    logout:()=>void
}
const Header = React.memo((props: PropsType) => {
    return (
        <header className={style.header}>
            <img className={style.logo} src={logo}/>
            <div className={style.login_block}>
                {props.isAuth
                    ? <div style={{display:'flex',flexDirection:'column'} }>{props.login}<button onClick={props.logout}>Log out</button></div>
                    :
                    <NavLink to={'/login'}>Login</NavLink>
                }
            </div>
        </header>
    )
})

export default Header;