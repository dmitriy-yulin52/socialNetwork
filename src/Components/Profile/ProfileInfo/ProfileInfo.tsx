import React from 'react';
import c from './ProfileInfo.module.css';
import {ProfileType} from "../../../Redux/ProfileReducer";
import {Preloader} from "../../common/Preloader/Preloader";


type ProfileInfoType = {
    profile:ProfileType
}
const ProfileInfo:React.FC<ProfileInfoType> = (props) =>{
    let {profile} = props

    if(!profile){
        return <Preloader/>
    }

    return(
        <div>
            <div>
                <img className={c.logoImg}
                     src='https://wallbox.ru/resize/800x480/wallpapers/main2/201726/14986676245953da68df7d32.08263646.jpg'/>
            </div>
            <div className={c.descriptionBlock}>
                <img src={profile.photos.small} alt=""/>
                <div>{profile.aboutMe}</div>
                <div>
                    {
                        profile.lookingForAJob ? <span>Нашел работу</span> : <div>Ищу работу!</div>
                    }
                </div>
                <div>{profile.contacts.vk}</div>
                <div>{profile.contacts.facebook}</div>
                ava + description
            </div>
        </div>
    )
}

export default ProfileInfo;