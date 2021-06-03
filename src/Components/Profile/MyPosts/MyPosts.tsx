import React from 'react';
import c from './MyPosts.module.css';
import Post from "./Post/Post";
import {PropsPostType} from "../../../Redux/state";


type PropsType = {
    propsPost: Array<PropsPostType>
}


const MyPosts:React.FC <PropsType> = (props) => {
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
                {props.propsPost.map((i) =>
                    <Post
                        id={i.id}
                        message={i.message}
                        like={i.like}
                        time={i.time}
                    />)}
            </div>
        </div>
    )
}

export default MyPosts;