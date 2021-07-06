import React, {ChangeEvent, KeyboardEvent, useEffect, useState} from 'react';
import c from './MyPosts.module.css';
import Post from "./Post/Post";
import {PostType} from "../../../Redux/state";


type PropsType = {
    posts: Array<PostType>
    messageForNewPost: string
    dispatch: (action: any) => void
}


export const MyPosts: React.FC<PropsType> = (props) => {
    const {posts,messageForNewPost,dispatch} = props;


    let postElement = posts.map((i) =>
        <Post
            id={i.id}
            message={i.message}
            like={i.like}
            time={i.time}
        />)

    const [error,setError] = useState<string | null>(null)


    const onClickHandler = () => {
        const messageTrim =  messageForNewPost.trim()
        const action = {type:'ADD-POST',postText: messageTrim }
        if(messageTrim){
            dispatch(action)
        }else {
            setError('Title is required')
        }
    }
    const onChangeHandler = (event:ChangeEvent<HTMLInputElement>) =>{
        const action = {type:'UPDATE-NEW-POST-TEXT',newText: event.currentTarget.value }
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
        <div>
            <h2 className={c.item}>My post</h2>
            <div className={c.input}>
                <input value={messageForNewPost} onChange={onChangeHandler} onKeyPress={onChangePressKey}/>
                <button onClick={onClickHandler}>click</button>
                <div className={c.error}>
                    <span>{error}</span>
                </div>
            </div>

            <div className={c.newPost}>
                New post
            </div>
            <div className={c.posts}>
                {postElement}
            </div>
        </div>
    )
}

