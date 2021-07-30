import {v1} from "uuid";


const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SET_USER_PROFILE = 'SET-USER-PROFILE';

export type PostType = {
    id: string
    message: string
    like: number
    time: number
}
// export type InitialStateType = {
//     messageForNewPost: string
//     posts: Array<PostType>
// }
type ContactsType = {
    github: string
    vk: string
    facebook: string
    instagram: string
    twitter: string
    website: string | null
    youtube: string | null
    mainLink: string | null
}
type PhotosType = {
    small: string
    large:string
}
export type ProfileType = {
    lookingForAJob:boolean
    lookingForAJobDescription:string
    fullName:string
    contacts:ContactsType
    photos:PhotosType
    userId:number
    aboutMe:string
}
export type InitialStateType = {
    messageForNewPost: string
    posts: Array<PostType>
    profile: ProfileType
}
export type ActionTypes =
    ReturnType<typeof addPostActionCreator>
    | ReturnType<typeof updateNewPostTextActionCreator>
    | ReturnType<typeof setUserProfile>


// let initialState: InitialStateType = {
//     messageForNewPost: '',
//     posts: [
//         {id: v1(), message: 'Hi, how are you', like: 4, time: 7},
//         {id: v1(), message: 'It,s my first post', like: 22, time: 19},
//         {id: v1(), message: 'yo', like: 14, time: 12},
//         {id: v1(), message: 'it-camasutra', like: 11, time: 90}
//     ]
// }
let initialState: InitialStateType = {

    messageForNewPost: '',
    posts: [
        {id: v1(), message: 'Hi, how are you', like: 4, time: 7},
        {id: v1(), message: 'It,s my first post', like: 22, time: 19},
        {id: v1(), message: 'yo', like: 14, time: 12},
        {id: v1(), message: 'it-camasutra', like: 11, time: 90}
    ],
    profile: {
        userId:2,
        aboutMe: '',
        lookingForAJob: true,
        lookingForAJobDescription: 'required(string)',
        fullName: 'required(string)',
        contacts: {
            github: 'required(string)',
            vk: 'required(string)',
            facebook: 'required(string)',
            instagram: 'required(string)',
            twitter: 'required(string)',
            website: 'required(string)',
            youtube: 'required(string)',
            mainLink: 'required(string)'
        },
        photos: {
            small: '(string)',
            large: '(string)'
        }
    }
}



export const profileReducer = (state: InitialStateType = initialState, action: ActionTypes): InitialStateType => {

    switch (action.type) {
        case ADD_POST:
            return {
                ...state,
                messageForNewPost: '',
                posts: [
                    ...state.posts,
                    {
                        id: v1(),
                        message: action.postText,
                        like: 4,
                        time: 7
                    },
                ]
            }

        // const newPost: PostType = {
        //     id: v1(),
        //     message: action.postText,
        //     like: 14,
        //     time: 22
        // }
        // state.posts.unshift(newPost);
        // state.messageForNewPost = ''
        // return state

        case UPDATE_NEW_POST_TEXT:
            // state.messageForNewPost = action.newText
            return {
                ...state,
                messageForNewPost: action.newText
            }
            case SET_USER_PROFILE:
            // state.messageForNewPost = action.newText
            return {
                ...state,
                profile: action.profile
            }
        default:
            return state
    }
}




export const addPostActionCreator = (message: string) => {
    return {
        type: ADD_POST,
        postText: message,
    }as const
}
export const updateNewPostTextActionCreator = (event: string) => {
    return {
        type: UPDATE_NEW_POST_TEXT,
        newText: event
    } as const
}
export const setUserProfile = (profile: ProfileType) => {
    return {
        type: SET_USER_PROFILE,
        profile
    } as const
}

