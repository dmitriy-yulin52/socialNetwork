import {v1} from "uuid";
import {Dispatch} from "redux";
import {profileAPI, usersAPI} from "../../api/api";
import {setIsFetchingAC} from "../Users/users-reducer";


enum ACTION_TYPE_TYPE {
    ADD_POST = ' profile-reducer/ADD-POST',
    UPDATE_NEW_POST_TEXT = ' profile-reducer/UPDATE-NEW-POST-TEXT',
    SET_USER_PROFILE = ' profile-reducer/SET-USER-PROFILE',
    SET_STATUS = 'profile-reducer/SET_STATUS',
    REMOVE_POST = 'profile-reducer/REMOVE_POST',
}


let initialState: InitialStateType = {

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
            return {
                ...state,
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

//actions
export const addPostActionCreator = (message: string): AddPostActionCreatorType => {
    return {
        type: ACTION_TYPE_TYPE.ADD_POST,
        postText: message,
    }
}

export const setUserProfileAC = (profile: ProfileType): SetUserProfileACType => {
    return {
        type: ACTION_TYPE_TYPE.SET_USER_PROFILE,
        profile,
    }
}
export const setStatusAC = (status: string): SetStatusType => {
    return {
        type: ACTION_TYPE_TYPE.SET_STATUS,
        status,
    }
}
export const removePostAc = (userId: string):RemovePostType => {
    return {
        type: ACTION_TYPE_TYPE.REMOVE_POST,
        userId,
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
        profileAPI.getStatus(userId)
            .then(response => {
                dispatch(setStatusAC(response.data))
            }).catch((err) => {
            console.warn(err)
        })
    }
}
export const updateStatusProfileTC = (status: string) => {
    return (dispatch: Dispatch) => {
        profileAPI.updateStatus(status)
            .then(response => {
                if (response.data.resultCode === 0) {
                    dispatch(setStatusAC(status))
                } else {
                    dispatch(setStatusAC(response.data.messages))
                }
            }).catch((err) => {
            console.warn(err)
        })
    }
}


//types
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
type RemovePostType = {
    type: ACTION_TYPE_TYPE.REMOVE_POST,
    userId: string
}

export type ActionTypeAC =
    AddPostActionCreatorType
    | UpdateNewPostTextActionCreatorType
    | SetUserProfileACType
    | SetStatusType
    | RemovePostType
