import React from 'react';
import c from './Profile.module.css';
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {newPost, PostType} from "../../Redux/state";



type PropsType = {
    profilePage: Array<PostType>
    newPost: (postText: string)=> void
}


const Profile:React.FC <PropsType> = (props) =>{
    return(
        <div>
            <ProfileInfo/>
            <MyPosts profilePage={props.profilePage} newPost={newPost}/>
        </div>
    )
}

export default Profile;