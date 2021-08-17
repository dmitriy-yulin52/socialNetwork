import React from 'react';
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {ProfileType} from "../../Redux/ProfileReducer";
import { MyPostsContainer } from './MyPosts/MyPostsContainer';


type ProfilePropsType = {
    profile:ProfileType
}


export const Profile = React.memo((props:ProfilePropsType) => {

    let {
        profile
    } = props

    return (
        <div>
            <ProfileInfo profile={profile}/>
            <MyPostsContainer
            />
        </div>
    )
})

