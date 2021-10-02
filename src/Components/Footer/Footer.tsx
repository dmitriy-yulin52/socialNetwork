import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import FolderIcon from '@material-ui/icons/Folder';
import RestoreIcon from '@material-ui/icons/Restore';
import FavoriteIcon from '@material-ui/icons/Favorite';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import style from './Footer.module.sass'


export const Footer = () => {
    const useStyles = makeStyles({
        root: {
            width: 500,
        },
    });
    // @ts-ignore
    const classes = useStyles();
    const [value, setValue] = React.useState('recents');

    const handleChange = (event: React.ChangeEvent<{}>, newValue: string) => {
        setValue(newValue);
    };

    return (
        <div className={style.footer}>
            <BottomNavigation value={value} onChange={handleChange} className={classes.root}>
                <BottomNavigationAction label="Recents" value="recents" icon={<RestoreIcon/>}/>
                <BottomNavigationAction label="Favorites" value="favorites" icon={<FavoriteIcon/>}/>
                <BottomNavigationAction label="Nearby" value="nearby" icon={<LocationOnIcon/>}/>
                <BottomNavigationAction label="Folder" value="folder" icon={<FolderIcon/>}/>
            </BottomNavigation>
        </div>
    )

}