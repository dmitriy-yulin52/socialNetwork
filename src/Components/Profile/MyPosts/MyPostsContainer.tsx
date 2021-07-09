import React, {ChangeEvent, KeyboardEvent, useEffect, useState} from 'react';
import c from './MyPosts.module.css';
import Post from "./Post/Post";
import {PostType} from "../../../Redux/store";
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../Redux/ProfileReducer";
import {MyPosts} from "./MyPosts";


type PropsType = {
    posts: Array<PostType>
    messageForNewPost: string
    dispatch: (action: any) => void
}



export const MyPostsContainer: React.FC<PropsType> = (props) => {
    const {posts,dispatch} = props;

    let postElement = posts.map((i) =>
        <Post
            id={i.id}
            message={i.message}
            like={i.like}
            time={i.time}
        />)

    const [error,setError] = useState<string | null>(null)
    const messageForNewPost = props.messageForNewPost


    const onClickHandler = () => {
        const messageTrim =  messageForNewPost.trim()
        const action = addPostActionCreator(messageTrim)
        if(messageTrim){
            dispatch(action)
        }else {
            setError('Title is required')
        }
    }
    const onChangeHandler = (event:ChangeEvent<HTMLInputElement>) =>{
        const action = updateNewPostTextActionCreator(event.currentTarget.value)
        dispatch(action)
        setError(null)
    }
    const onChangePressKey = (event: KeyboardEvent<HTMLInputElement>)=> {
        setError(null)
        if(event.key === 'Enter'){
            onClickHandler()
        }
    }


    return (
        <MyPosts/>
    )
}

