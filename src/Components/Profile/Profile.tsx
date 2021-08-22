import React from 'react';
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {ProfileType} from "../../Redux/ProfileReducer";
import { MyPostsContainer } from './MyPosts/MyPostsContainer';
import {Redirect} from "react-router-dom";


type ProfilePropsType = {
    profile:ProfileType
    isAuth:boolean
}


export const Profile = React.memo((props:ProfilePropsType) => {

    let {
        profile,
        isAuth
    } = props


    if(isAuth){
        return <Redirect to={'/login'}/>
    }

    return (
        <div>
            <ProfileInfo profile={profile}/>
            <MyPostsContainer
            />
        </div>
    )
})

