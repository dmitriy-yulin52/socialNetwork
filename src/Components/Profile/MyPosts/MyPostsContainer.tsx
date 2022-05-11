import React, {useCallback} from 'react';
import {PostType,} from "../../../Redux/Profile/ProfileReducer";
import {useDispatch} from "react-redux";
import {MessagePostType, MyPosts} from "./MyPosts";
import { addPostActionCreator, removePostAc } from '../../../Redux/Profile/Actions';

type MyPostsContainerType = {
    posts: PostType[]
}

export const MyPostsContainer= React.memo((props:MyPostsContainerType) => {

    const {
        posts
    } = props

    const dispatch = useDispatch()

    const addPost = useCallback((formData: MessagePostType):void => {
        dispatch(addPostActionCreator(formData.message))
    }, [addPostActionCreator])

    const removePost = useCallback((userId:number):void=> {
        dispatch(removePostAc(userId))
    },[removePostAc])

    return (
        <MyPosts
            posts={posts}
            addPost={addPost}
            removePost={removePost}
        />
    )
})


