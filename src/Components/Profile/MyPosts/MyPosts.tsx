import React from 'react';
import style from './MyPosts.module.sass'
import Post from "./Post/Post";
import {PostType} from "../ProfileReducer";
import {AddNewPostForm} from "../../Form/myPostsForm/AddNewPostForm";


export type MessagePostType = {
    message: string
}
type PropsType = {
    posts: Array<PostType>
    addPost: (message: MessagePostType) => void
    removePost:(userId:string)=>void
}


export const MyPosts = React.memo((props: PropsType) => {

    const {
        posts,
        addPost,
        removePost,
    } = props;

    let postElement = posts.map((i) =>
        <Post
            id={i.id}
            message={i.message}
            like={i.like}
            time={i.time}
            removePost={removePost}
        />)

    return (
        <div>
            <h2 className={style.item}>My post</h2>
            <div className={style.input}>
                <AddNewPostForm onSubmit={addPost}/>
            </div>

            <div className={style.newPost}>
                New post
            </div>
            <div className={style.posts}>
                {postElement}
            </div>
        </div>
    )
})

