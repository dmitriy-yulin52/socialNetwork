import React from 'react';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";


// type PropsType = {
//     store: StoreType
// }


const Profile= () => {
    // const {store} = props

    return (
        <div>
            <ProfileInfo/>
            <MyPostsContainer
                // store={store}
            />
        </div>
    )
}

export default Profile;