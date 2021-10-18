import React from 'react';
import c from './ProfileInfo.module.css';
import {ProfileType} from "../../../Redux/Profile/ProfileReducer";
import userPhoto from "../../../assets/images/users-icon.jpg";
import {ProfileStatus} from "./ProfileStatus/ProfileStatus";


type ProfileInfoType = {
    profile: ProfileType
    status:string
    updateStatus:(status:string)=> void
}
export const ProfileInfo = React.memo((props: ProfileInfoType) => {
    let {
        profile,
        status,
        updateStatus,
    } = props


    return (
        <div>
            <div>
                <img className={c.logoImg}
                     src='https://wallbox.ru/resize/800x480/wallpapers/main2/201726/14986676245953da68df7d32.08263646.jpg' alt={''}/>
            </div>
            <div className={c.descriptionBlock}>
                <img src={profile.photos.small !== null ? profile.photos.small : userPhoto} alt=""/>

                <ProfileStatus status={status} updateStatus={updateStatus}/>
                <div><span className={c.status}>About me: </span>{profile.aboutMe}</div>
                <div> <span className={c.status}>Job: </span>
                    {
                        profile.lookingForAJob ? <span>Нашел работу</span> : <div>Ищу работу!</div>
                    }
                </div>
                <div><span className={c.status}>Name: </span>{profile.fullName}</div>
                <div>{profile.lookingForAJobDescription}</div>
                <div>{profile.contacts.vk}</div>
                <div>{profile.contacts.facebook}</div>
                <div>{profile.contacts.github}</div>
                <div>{profile.contacts.twitter}</div>
                <div>{profile.contacts.website}</div>
                <div>{profile.contacts.youtube}</div>
                <div>{profile.contacts.mainLink}</div>
                <div>{profile.contacts.instagram}</div>
            </div>
        </div>
    )
})

