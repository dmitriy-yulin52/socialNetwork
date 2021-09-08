import {v1} from "uuid";
import {Dispatch} from "redux";
import {profileAPI, usersAPI} from "../../api/api";


enum ACTION_TYPE_TYPE {
    ADD_POST = ' profile-reducer/ADD-POST',
    UPDATE_NEW_POST_TEXT = ' profile-reducer/UPDATE-NEW-POST-TEXT',
    SET_USER_PROFILE = ' profile-reducer/SET-USER-PROFILE',
    SET_STATUS = 'profile-reducer/SET_STATUS'
}

export type PostType = {
    id: string
    message: string
    like: number
    time: number
}

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
    large: string
}
export type ProfileType = {
    lookingForAJob: boolean
    lookingForAJobDescription: string
    fullName: string
    contacts: ContactsType
    photos: PhotosType
    userId: number
    aboutMe: string
}
export type InitialStateType = {
    messageForNewPost: string
    posts: Array<PostType>
    profile: ProfileType
    status: string
}


type AddPostActionCreatorType = {
    type: ACTION_TYPE_TYPE.ADD_POST,
    postText: string,
}
type UpdateNewPostTextActionCreatorType = {
    type: ACTION_TYPE_TYPE.UPDATE_NEW_POST_TEXT,
    newText: string,
}
type SetUserProfileACType = {
    type: ACTION_TYPE_TYPE.SET_USER_PROFILE,
    profile: ProfileType,
}
type SetStatusType = {
    type: ACTION_TYPE_TYPE.SET_STATUS,
    status: string
}

export type ActionTypeAC =
    AddPostActionCreatorType
    | UpdateNewPostTextActionCreatorType
    | SetUserProfileACType
    | SetStatusType


let initialState: InitialStateType = {

    messageForNewPost: '',
    posts: [
        {id: v1(), message: 'Hi, how are you', like: 4, time: 7},
        {id: v1(), message: 'It,s my first post', like: 22, time: 19},
        {id: v1(), message: 'yo', like: 14, time: 12},
        {id: v1(), message: 'it-camasutra', like: 11, time: 90}
    ],
    profile: {
        userId: 2,
        aboutMe: '',
        lookingForAJob: true,
        lookingForAJobDescription: '',
        fullName: '',
        contacts: {
            github: '',
            vk: '',
            facebook: '',
            instagram: '',
            twitter: '',
            website: '',
            youtube: '',
            mainLink: ''
        },
        photos: {
            small: '(string)',
            large: '(string)'
        }
    },
    status: ''
}

export let idUser = v1()

export const profileReducer = (state: InitialStateType = initialState, action: ActionTypeAC): InitialStateType => {
    switch (action.type) {
        case ACTION_TYPE_TYPE.ADD_POST:
            //messageForNewPost = '' - after redrawing the state, the input field will be empty

            return {
                ...state,
                messageForNewPost: '',
                posts: [
                    ...state.posts,
                    {
                        id: idUser,
                        message: action.postText,
                        like: 4,
                        time: 7
                    },
                ]
            }

        case ACTION_TYPE_TYPE.UPDATE_NEW_POST_TEXT:
            return {
                ...state,
                messageForNewPost: action.newText
            }
        case ACTION_TYPE_TYPE.SET_USER_PROFILE:
            return {
                ...state,
                profile: action.profile
            }
        case ACTION_TYPE_TYPE.SET_STATUS:
            return {
                ...state,
                status: action.status
            }
        default:
            return state
    }
}

//actions
export const addPostActionCreator = (message: string): AddPostActionCreatorType => {
    return {
        type: ACTION_TYPE_TYPE.ADD_POST,
        postText: message,
    }
}
export const updateNewPostTextActionCreator = (text: string): UpdateNewPostTextActionCreatorType => {
    return {
        type: ACTION_TYPE_TYPE.UPDATE_NEW_POST_TEXT,
        newText: text
    }
}
export const setUserProfileAC = (profile: ProfileType): SetUserProfileACType => {
    return {
        type: ACTION_TYPE_TYPE.SET_USER_PROFILE,
        profile
    }
}
export const setStatusAC = (status: string):SetStatusType => {
    return {
        type: ACTION_TYPE_TYPE.SET_STATUS,
        status
    }
}

//thunk
export const getUserProfileThunkCreator = (userId: string) => {
    return (dispatch: Dispatch) => {
        usersAPI.getProfile(userId).then(response => {
            dispatch(setUserProfileAC(response.data))
        })
    }
}
export const getStatusProfileTC = (userId: string) => {
    return (dispatch: Dispatch) => {
        profileAPI.getStatus(userId)
            .then(response => {
                debugger
            dispatch(setStatusAC(response.data))
        })
    }
}
export const updateStatusProfileTC = (status: string) => {
    return (dispatch: Dispatch) => {
        profileAPI.updateStatus(status)
            .then(response => {
                debugger
            dispatch(setStatusAC(response.data))
        })
    }
}


