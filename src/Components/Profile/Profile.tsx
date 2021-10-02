import React from 'react';
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {PostType, ProfileType} from "./ProfileReducer";
import { MyPostsContainer } from './MyPosts/MyPostsContainer';


type ProfilePropsType = {
    profile:ProfileType
    status:string
    updateStatus:(status:string)=>void
    posts:Array<PostType>
}


export const Profile = React.memo((props:ProfilePropsType) => {

    let {
        profile,
        status,
        updateStatus,
        posts
    } = props


    return (
        <div>
            <ProfileInfo
                profile={profile}
                status={status}
                updateStatus={updateStatus}
            />
            <MyPostsContainer
                posts={posts}
            />
        </div>
    )
})

