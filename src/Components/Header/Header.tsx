import React from 'react';
import style from './Header.module.sass'
import logo from '../../assets/images/laptop.svg'
import {NavLink} from 'react-router-dom';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import {createTheme, ThemeProvider} from '@mui/material/styles';

type PropsType = {
    isAuth: boolean
    login: string | null
    logout: () => void
}


const Header: React.FC<PropsType> = React.memo((props) => {

    const {
        isAuth,
        login,
        logout,
    } = props




    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    const theme = createTheme({
        palette: {
            primary: {
                main: '#e1f5fe',
            },
            secondary: {
                main: '#9ccc65',
            },
        },
    });

    const logoutSystem = ()=> {
        logout()
        setAnchorEl(null)
    }


    return (
        <header className={style.header}>
            <img className={style.logo} src={logo} alt={''}/>
            <div className={style.login_block} >
                {isAuth
                    ? <div style={{display: 'flex', flexDirection: 'column'}}>
                        {login}
                        <ThemeProvider theme={theme}>
                            <div>
                                <Button
                                    color={'primary'}
                                    id="basic-button"
                                    aria-controls="basic-menu"
                                    aria-haspopup="true"
                                    aria-expanded={open ? 'true' : undefined}
                                    onClick={handleClick}
                                >
                                    Account
                                </Button>
                                <Menu
                                    id="basic-menu"
                                    anchorEl={anchorEl}
                                    open={open}
                                    onClose={handleClose}
                                    MenuListProps={{
                                        'aria-labelledby': 'basic-button',
                                    }}
                                >
                                    <MenuItem onClick={handleClose}>Profile</MenuItem>
                                    <MenuItem onClick={handleClose}>My account</MenuItem>
                                    <MenuItem onClick={logoutSystem}>Logout</MenuItem>
                                </Menu>
                            </div>
                        </ThemeProvider>

                        {/*<Button*/}
                        {/*    variant="contained"*/}
                        {/*    color="primary"*/}
                        {/*    size={'small'}*/}
                        {/*    onClick={logout}*/}
                        {/*>Log out</Button>*/}
                    </div>
                    :
                    <NavLink to={'/login'}>Login</NavLink>
                }
            </div>
        </header>
    )
})

export default Header;