import React from 'react';
import style from './Header.module.sass'
import logo from '../../assets/images/laptop.svg'
import {NavLink} from 'react-router-dom';
import Button from "@material-ui/core/Button";


type PropsType = {
    isAuth: boolean
    login: string | null
    logout: () => void
}



const Header:React.FC<PropsType> = React.memo((props) => {

    const {
        isAuth,
        login,
        logout,
    } = props

    return (
        <header className={style.header}>
            <img className={style.logo} src={logo}/>
            <div className={style.login_block}>
                {isAuth
                    ? <div style={{display: 'flex', flexDirection: 'column'}}>
                        {login}
                        {/*<button*/}
                        {/*    className={style.button}*/}
                        {/*    onClick={props.logout}>*/}
                        {/*    Log out*/}
                        {/*</button>*/}
                        <Button
                            variant="contained"
                            color="primary"
                            size={'small'}
                            onClick={logout}
                        >Log out</Button>
                    </div>
                    :
                    <NavLink to={'/login'}>Login</NavLink>
                }
            </div>
        </header>
    )
})

export default Header;