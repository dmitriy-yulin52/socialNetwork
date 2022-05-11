import { ACTION_TYPE_TYPE, ProfileType } from "./ProfileReducer"





export const addPostActionCreator = (message: string) => {
    return {
        type: ACTION_TYPE_TYPE.ADD_POST,
        postText: message,
    }as const 
}

export const setUserProfileAC = (profile: ProfileType)=> {
    return {
        type: ACTION_TYPE_TYPE.SET_USER_PROFILE,
        profile,
    }as const 
}
export const setStatusAC = (status: string) => {
    return {
        type: ACTION_TYPE_TYPE.SET_STATUS,
        status,
    }as const 
}
export const removePostAc = (userId: number)=> {
    return {
        type: ACTION_TYPE_TYPE.REMOVE_POST,
        userId,
    }as const
}