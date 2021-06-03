import React from 'react';
import c from './MyPosts.module.css';
import Post from "./Post/Post";
import {propsPost} from '../../../index'


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