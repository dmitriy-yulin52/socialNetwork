import React from 'react';
import c from './MyPosts.module.css';
import Post from "./Post/Post";


const propsPost = [
    {id: 1, message: 'Hi, how are you', like: 4, time: 7},
    {id: 2, message: 'It,s my first post', like: 22, time: 19},
    {id: 3, message: 'yo', like: 14, time: 12},
    {id: 4, message: 'it-camasutra', like: 11, time: 90}
]

let postsElement = propsPost.map((i)=>
    <Post
    id={i.id}
    message={i.message}
    like={i.like}
    time={i.time}
/> )


const MyPosts = () => {
    return (
        <div>
            <h2 className={c.item}>My post</h2>
            <div>
                <textarea></textarea>
            </div>
            <div>
                <button>click</button>
            </div>
            <div>
                New post
            </div>
            <div className={c.posts}>
                {postsElement}
            </div>
        </div>
    )
}

export default MyPosts;