import React from 'react';
import style from './Header.module.sass'
import logo from '../../assets/images/laptop.svg'
import {NavLink} from 'react-router-dom';
import Button from "@material-ui/core/Button";
import Avatar from '@mui/material/Avatar';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import Divider from '@mui/material/Divider';



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


    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    return (
        <header className={style.header}>
            <img className={style.logo} src={logo}/>
            <div className={style.login_block}>
                {isAuth
                    ? <div style={{display: 'flex', flexDirection: 'column'}}>
                        {login}
                        <React.Fragment>
                            <Menu
                                anchorEl={anchorEl}
                                open={open}
                                onClose={handleClose}
                                onClick={handleClose}
                                PaperProps={{
                                    elevation: 0,
                                    sx: {
                                        overflow: 'visible',
                                        filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                                        mt: 1.5,
                                        '& .MuiAvatar-root': {
                                            width: 32,
                                            height: 32,
                                            ml: -0.5,
                                            mr: 1,
                                        },
                                        '&:before': {
                                            content: '""',
                                            display: 'block',
                                            position: 'absolute',
                                            top: 0,
                                            right: 14,
                                            width: 10,
                                            height: 10,
                                            bgcolor: 'background.paper',
                                            transform: 'translateY(-50%) rotate(45deg)',
                                            zIndex: 0,
                                        },
                                    },
                                }}
                                transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                                anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
                            >
                                <MenuItem>
                                    <Avatar /> Profile
                                </MenuItem>
                                <MenuItem>
                                    <Avatar /> My account
                                </MenuItem>
                                <Divider />
                                <MenuItem>
                                    <ListItemIcon>
                                    </ListItemIcon>
                                    Add another account
                                </MenuItem>
                                <MenuItem>
                                    <ListItemIcon>
                                    </ListItemIcon>
                                    Settings
                                </MenuItem>
                                <MenuItem>
                                    <ListItemIcon>

                                    </ListItemIcon>
                                    Logout
                                </MenuItem>
                            </Menu>
                        </React.Fragment>
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