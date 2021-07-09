import ReactDOM from "react-dom";
import {v1} from "uuid";
import {ActionTypes, PostType, ProfilePostsType, StoreType} from "./store";


const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

// let initialState = {
//         messageForNewPost: '',
//         posts: [
//             {id: v1(), message: 'Hi, how are you', like: 4, time: 7},
//             {id: v1(), message: 'It,s my first post', like: 22, time: 19},
//             {id: v1(), message: 'yo', like: 14, time: 12},
//             {id: v1(), message: 'it-camasutra', like: 11, time: 90}
//         ],
//     }

export const profileReducer = (state: ProfilePostsType, action: ActionTypes) => {
    switch (action.type) {
        case ADD_POST:
            const newPost: PostType = {
                id: v1(),
                message: action.postText,
                like: 14,
                time: 22
            }
            state.posts.unshift(newPost);
            state.messageForNewPost = ''
            return state

        case UPDATE_NEW_POST_TEXT:
            state.messageForNewPost = action.newText
            return state

        default:
            return state
    }
}


export const addPostActionCreator = (message: string) => {
    return {
        type: ADD_POST,
        postText: message
    } as const
}
export const updateNewPostTextActionCreator = (event: string) => {
    return {
        type: UPDATE_NEW_POST_TEXT,
        newText: event
    } as const
}