import React, {useCallback} from 'react';
import {addPostActionCreator, PostType, removePostAc,} from "../../../Redux/Profile/ProfileReducer";
import {useDispatch} from "react-redux";
import {MessagePostType, MyPosts} from "./MyPosts";

type MyPostsContainerType = {
    posts: Array<PostType>
}

export const MyPostsContainer: React.FC<MyPostsContainerType> = React.memo((props) => {

    const {
        posts
    } = props

    const dispatch = useDispatch()

    const addPost = useCallback((formData: MessagePostType) => {
        dispatch(addPostActionCreator(formData.message))
    }, [dispatch])

    const removePost = (userId:string)=> {
        dispatch(removePostAc(userId))
    }

    return (
        <MyPosts
            posts={posts}
            addPost={addPost}
            removePost={removePost}
        />
    )
})


