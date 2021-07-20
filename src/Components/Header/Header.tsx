import React from 'react';
import style from './Header.module.sass'

const Header = () => {
    return(
        <header className={style.header}>
            <img src={'https://jobget.ru/storage/files/ru/3/thumb-320x240-7cba4899afdd220aa294e260b0f8a80e.jpg'}/>
        </header>
    )
}

export default Header;