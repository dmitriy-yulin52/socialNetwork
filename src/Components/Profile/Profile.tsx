import React from 'react';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import {ProfileType} from "../../Redux/ProfileReducer";


type ProfilePropsType = {
    profile:ProfileType
}


const Profile:React.FC<ProfilePropsType> = (props) => {
    let {profile} = props

    return (
        <div>
            <ProfileInfo profile={profile}/>
            <MyPostsContainer
            />
        </div>
    )
}

export default Profile;