import React, {ChangeEvent, KeyboardEvent, useEffect, useState} from 'react';
import style from './MyPosts.module.sass'
import Post from "./Post/Post";
import {PostType} from "../../../Redux/store";


type PropsType = {
    posts: Array<PostType>
    messageForNewPost: string
    updateNewPostText: (event:string)=> void
    addPost:(message: string)=> void
}


export const MyPosts: React.FC<PropsType> = (props) => {
    const {posts,addPost,updateNewPostText,messageForNewPost} = props;

    let postElement = posts.map((i) =>
        <Post
            id={i.id}
            message={i.message}
            like={i.like}
            time={i.time}
        />)

    const [error,setError] = useState<string | null>(null)


    const onAddPostClickHandler = () => {
        const messageTrim =  messageForNewPost.trim()
        if(messageTrim){
            addPost(messageTrim)
        }else {
            setError('Title is required')
        }
    }
    const onPostChangeHandler = (event:ChangeEvent<HTMLInputElement>) =>{
        const newText = event.currentTarget.value
        updateNewPostText(newText)
        setError(null)

        // const text = updateNewPostTextActionCreator(event.currentTarget.value)
        // dispatch(action)
    }
    const onPostChangePressKey = (event: KeyboardEvent<HTMLInputElement>)=> {
        setError(null)
        if(event.key === 'Enter'){
            onAddPostClickHandler()
        }
    }

    return (
        <div>
            <h2 className={style.item}>My post</h2>
            <div className={style.input}>
                <input value={messageForNewPost} onChange={onPostChangeHandler} onKeyPress={onPostChangePressKey}/>
                <button onClick={onAddPostClickHandler}>click</button>
                <div className={style.error}>
                    <span>{error}</span>
                </div>
            </div>

            <div className={style.newPost}>
                New post
            </div>
            <div className={style.posts}>
                {postElement}
            </div>
        </div>
    )
}

