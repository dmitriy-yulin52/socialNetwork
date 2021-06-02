import React from 'react';
import c from './Header.module.css'


const Header = () => {
    return(
        <header className={c.header}>
            <img src={'https://jobget.ru/storage/files/ru/3/thumb-320x240-7cba4899afdd220aa294e260b0f8a80e.jpg'}/>
        </header>
    )
}

export default Header;