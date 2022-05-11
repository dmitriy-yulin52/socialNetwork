import { Dispatch } from 'redux';
import { profileAPI, usersAPI } from '../../api/api';
import { setIsFetchingAC } from '../Users/users-reducer';
import { addPostActionCreator, removePostAc, setStatusAC, setUserProfileAC } from './Actions';


export enum ACTION_TYPE_TYPE {
    ADD_POST = ' profile-reducer/ADD-POST',
    UPDATE_NEW_POST_TEXT = ' profile-reducer/UPDATE-NEW-POST-TEXT',
    SET_USER_PROFILE = ' profile-reducer/SET-USER-PROFILE',
    SET_STATUS = 'profile-reducer/SET_STATUS',
    REMOVE_POST = 'profile-reducer/REMOVE_POST',
}


let initialState: InitialStateType = {

    posts: [
        {id: 1, message: 'Hi, how are you', like: 4, time: 7},
        {id: 2, message: 'It,s my first post', like: 22, time: 19},
        {id: 3, message: 'yo', like: 14, time: 12},
        {id: 4, message: 'it-camasutra', like: 11, time: 90}
    ],
    profile: {
        userId: 2,
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

export const profileReducer = (state: InitialStateType = initialState, action: ActionTypeAC): InitialStateType => {
    switch (action.type) {
        case ACTION_TYPE_TYPE.ADD_POST:

        if(state.posts.length === 0){
            return {
                ...state,
                posts:[
                    {
                        id:1,
                        message: '',
                        like: 4,
                        time: 7
                    },
                ]
            }
        }
            return {
                ...state,
                posts: [
                    ...state.posts,
                    {
                        id: state.posts[state.posts.length -1].id + 1,
                        message: action.postText,
                        like: 4,
                        time: 7
                    },
                ]
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
        case ACTION_TYPE_TYPE.REMOVE_POST:
            return {
                ...state,
                posts:[
                    ...state.posts.filter((el)=>el.id !== action.userId)
                ]
            }
        default:
            return state
    }
}

//thunk
export const getUserProfileThunkCreator = (userId: string) => {
    return (dispatch: Dispatch) => {
        dispatch(setIsFetchingAC(true))
        usersAPI.getProfile(userId).then(response => {
            dispatch(setUserProfileAC(response.data))
            dispatch(setIsFetchingAC(false))
        }).catch((err) => {
            console.warn(err)
        })
    }
}
export const getStatusProfileTC = (userId: string) => {
    return (dispatch: Dispatch) => {
        dispatch(setIsFetchingAC(true))
        profileAPI.getStatus(userId)
            .then(response => {
                dispatch(setStatusAC(response.data))
                dispatch(setIsFetchingAC(false))
            }).catch((err) => {
            console.warn(err)
        })
    }
}
export const updateStatusProfileTC = (status: string) => {
    return (dispatch: Dispatch) => {
        dispatch(setIsFetchingAC(true))
        profileAPI.updateStatus(status)
            .then(response => {
                if (response.data.resultCode === 0) {
                    dispatch(setStatusAC(status))
                    dispatch(setIsFetchingAC(false))
                } else {
                    dispatch(setStatusAC('error'))
                }
            }).catch((err) => {
            console.warn(err)
        })
    }
}


//types
export type PostType = {
    id: number
    message: string
    like: number
    time: number
}

export type ContactsType = {
    github: string
    vk: string
    facebook: string
    instagram: string
    twitter: string
    website: string
    youtube: string
    mainLink: string
}
export type PhotosType = {
    small: string | null,
    large: string | null,
}
export type ProfileType = {
    lookingForAJob: boolean
    lookingForAJobDescription: string
    fullName: string
    contacts: ContactsType
    photos: PhotosType
    userId: number
}
export type InitialStateType = {
    posts: Array<PostType>
    profile: ProfileType
    status: string
}

    export type ActionTypeAC = ReturnType< typeof addPostActionCreator | typeof setUserProfileAC | typeof setStatusAC | typeof removePostAc>