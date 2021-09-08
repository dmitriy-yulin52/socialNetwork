import React from 'react';
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {ProfileType} from "./ProfileReducer";
import { MyPostsContainer } from './MyPosts/MyPostsContainer';


type ProfilePropsType = {
    profile:ProfileType
    status:string
    updateStatus:(status:string)=>void
}


export const Profile = React.memo((props:ProfilePropsType) => {

    let {
        profile,
        status,
        updateStatus
    } = props


    return (
        <div>
            <ProfileInfo
                profile={profile}
                status={status}
                updateStatus={updateStatus}
            />
            <MyPostsContainer
            />
        </div>
    )
})

