import {Dispatch} from "redux";
import {authAPI} from "../api/api";

export enum AUTH_ACTION_TYPE {
    SET_USER_DATA = 'auth-reducer/SET_USER_DATA',
    SET_LOGIN = 'auth-reducer/SET_LOGIN'
}

type InitialStateType = {
    data: UserDataType
    isAuth: boolean
    login:SetLoginType
}

export type UserDataType = {
    userId: number | null
    email: string | null
    login: string | null
}
export type SetLoginType = {
    resultCode: number | null
    messages: Array<string> | null
    data: {userId:number | null}
}
type SetUserDataACType = {
    type: AUTH_ACTION_TYPE.SET_USER_DATA,
    data: UserDataType
}
type SetLoginACType = {
    type: AUTH_ACTION_TYPE.SET_LOGIN,
    login: SetLoginType
}



export type ActionACTypes =
    SetUserDataACType
    | SetLoginACType


// @ts-ignore
export let initialState: InitialStateType = {
    // userId: null,
    // email: null,
    // login: null,
    data: {
        userId: null,
        email: null,
        login: null,
    },
    isAuth: false,
    login:{
        resultCode:null,
        messages:null,
        data:{
            userId:null
        }
    }
}


export const authReducer = (state: InitialStateType = initialState, action: ActionACTypes): InitialStateType => {
    switch (action.type) {
        case AUTH_ACTION_TYPE.SET_USER_DATA:
            return {
                ...state,
                ...action.data,
                isAuth:true,
                login: {
                    resultCode:null,
                    messages:null,
                    data:{
                        userId:null
                    }
                }
            }
        case AUTH_ACTION_TYPE.SET_LOGIN:
            return {
                ...state,
                isAuth:true,
                login:action.login
            }
        default:
            return state
    }
}


export const setAuthUserDataAC = (data: UserDataType): SetUserDataACType => {
    return {
        type: AUTH_ACTION_TYPE.SET_USER_DATA,
        data
    }
}
export const SetLoginAC = (login: SetLoginType): SetLoginACType => {
    return {
        type: AUTH_ACTION_TYPE.SET_LOGIN,
        login
    }
}

export const getAuthUserDataThunkCreator = () => {
    return (dispatch:Dispatch<ActionACTypes>)=>{
        authAPI.getHeader().then((response) => {
            if(response.data.resultCode === 0){
                debugger;
                dispatch(setAuthUserDataAC(response.data))
            }
        })
    }
}
export const SetLoginThunkCreator = (email:string,password:string) => {
    return (dispatch:Dispatch<ActionACTypes>)=>{
        authAPI.setLogin(email,password).then((response) => {
            if(response.data.resultCode === 0){
                dispatch(SetLoginAC(response.data))
            }
        })
    }
}
