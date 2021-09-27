import React from 'react';
import style from './MyPosts.module.sass'
import Post from "./Post/Post";
import {PostType} from "../ProfileReducer";
import {AddMessageFrom} from "../../Form/AddMessageForm";
import {AddNewPostForm} from "../../Form/AddNewPostForm";


export type MessagePostType = {
    message: string
}
type PropsType = {
    posts: Array<PostType>
    addPost: (message: MessagePostType) => void
}



export const MyPosts = React.memo((props: PropsType) => {

    const {
        posts,
        addPost,
    } = props;

    let postElement = posts.map((i) =>
        <Post
            id={i.id}
            message={i.message}
            like={i.like}
            time={i.time}
        />)



    // const onAddPostClickHandler = () => {
    //     const messageTrim = messageForNewPost.trim()
    //     if (messageTrim) {
    //         addPost(messageTrim)
    //     } else {
    //         setError('Title is required')
    //     }
    // }
    // const onPostChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    //     updateNewPostText(event.currentTarget.value)
    //     setError(null)
    // }
    // const onPostChangePressKey = (event: KeyboardEvent<HTMLInputElement>) => {
    //     if (error !== null) {
    //         setError(null)
    //     }
    //     if (event.key === 'Enter') {
    //         onAddPostClickHandler()
    //     }
    // }


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

