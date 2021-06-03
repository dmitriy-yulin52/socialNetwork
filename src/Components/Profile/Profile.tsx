import React from 'react';
import c from './Profile.module.css';
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {PropsPostType} from "../../Redux/state";


type PropsType = {
    profilePage: Array<PropsPostType>
}


const Profile:React.FC <PropsType> = (props) =>{
    return(
        <div>
            <ProfileInfo/>
            <MyPosts propsPost={props.profilePage}/>
        </div>
    )
}

export default Profile;