import React from 'react';
import c from './ProfileInfo.module.css';

const ProfileInfo = () =>{
    return(
        <div>
            <div>
                <img className={c.logoImg}
                     src='https://wallbox.ru/resize/800x480/wallpapers/main2/201726/14986676245953da68df7d32.08263646.jpg'/>
            </div>
            <div className={c.descriptionBlock}>
                ava + description
            </div>
        </div>
    )
}

export default ProfileInfo;