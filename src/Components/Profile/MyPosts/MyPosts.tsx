import React from 'react';
import c from './MyPosts.module.css';
import Post from "./Post/Post";


const propsPost = {
    message: 'Hello',
    like: [24, 45, 78, 55],
    time: 22,
}

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
                <Post
                    message={propsPost.message}
                    like={propsPost.like[0]}
                    time={propsPost.time}
                />
                <Post
                    message={propsPost.message}
                    like={propsPost.like[1]}
                    time={propsPost.time}
                />
                <Post
                    message={propsPost.message}
                    like={propsPost.like[2]}
                    time={propsPost.time}
                />
                <Post
                    message={propsPost.message}
                    like={propsPost.like[3]}
                    time={propsPost.time}
                />
            </div>
        </div>
    )
}

export default MyPosts;