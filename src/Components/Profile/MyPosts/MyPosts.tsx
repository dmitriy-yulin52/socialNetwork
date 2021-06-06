import React, {useState} from 'react';
import c from './MyPosts.module.css';
import Post from "./Post/Post";
import {PostType} from "../../../Redux/state";


type PropsType = {
    profilePage: Array<PostType>
    newPost: (postText: string)=> void

}


const MyPosts: React.FC<PropsType> = (props) => {
    const { newPost } = props;


    let postElement = props.profilePage.map((i) => <Post id={i.id}
                                                                 message={i.message}
                                                                 like={i.like}
                                                                 time={i.time}/>)


        let [newMessagePost, setNewMessagePost] = useState('')

        let addPost = ()=> {
            newPost(newMessagePost)
            setNewMessagePost('')
        }
    return (
        <div>
            <h2 className={c.item}>My post</h2>
            <div>
                <textarea value={newMessagePost} onChange={(event)=> setNewMessagePost(event.currentTarget.value)}></textarea>
            </div>
            <div>
                <button onClick={addPost}>click</button>
            </div>
            <div>
                New post
            </div>
            <div className={c.posts}>
                {postElement}
            </div>
        </div>
    )
}

export default MyPosts;