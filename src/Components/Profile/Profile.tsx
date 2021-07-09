import React from 'react';
import c from './Profile.module.css';
import {MyPosts} from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {ProfilePostsType, StateType} from "../../Redux/store";


type PropsType = {
    profilePage: ProfilePostsType
    dispatch:(action:any)=> void
}


const Profile: React.FC<PropsType> = (props) => {
    const {profilePage,dispatch} = props

    return (
        <div>
            <ProfileInfo/>
            <MyPosts posts={profilePage.posts}
                     dispatch={dispatch}
                     messageForNewPost={profilePage.messageForNewPost}

            />
        </div>
    )
}

export default Profile;