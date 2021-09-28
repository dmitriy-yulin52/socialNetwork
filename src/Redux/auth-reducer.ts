import {Dispatch} from "redux";
import {authAPI} from "../api/api";
import {setIsFetchingAC} from "../Components/Users/users-reducer";

export enum AUTH_ACTION_TYPE {
    SET_USER_DATA = 'auth-reducer/SET_USER_DATA',
    IS_AUTH = 'auth-reducer/IS_AUTH',
}

type InitialStateType = {
    userId: number | null
    email: string | null
    login: string | null
    isAuth: boolean
}

export type UserDataType = {
    userId: number | null
    email: string | null
    login: string | null
    isAuth: boolean
}
export type SetLoginType = {
    resultCode: number | null
    messages: Array<string> | null
    data: { userId: number | null }
}
type SetUserDataACType = {
    type: AUTH_ACTION_TYPE.SET_USER_DATA,
    payload: UserDataType
}
type IsAuthACType = {
    type: AUTH_ACTION_TYPE.IS_AUTH,
    isAuth:boolean
}

export type ActionACTypes =
    SetUserDataACType
    | IsAuthACType


export let initialState: InitialStateType = {
    // userId: null,
    // email: null,
    // login: null,
    userId: null,
    email: null,
    login: null,
    isAuth: false,

}


export const authReducer = (state: InitialStateType = initialState, action: ActionACTypes): InitialStateType => {
    switch (action.type) {
        case AUTH_ACTION_TYPE.SET_USER_DATA:
            return {
                ...state,
                ...action.payload,
                isAuth: action.payload.isAuth,
            }
        case AUTH_ACTION_TYPE.IS_AUTH:
            return {
                ...state,
                isAuth:true
            }

        default:
            return state
    }
}

export const setAuthUserDataAC = (login: string, email: string, userId: number, isAuth: boolean): SetUserDataACType => {
    return {
        type: AUTH_ACTION_TYPE.SET_USER_DATA,
        payload: {
            login,
            email,
            userId,
            isAuth
        }
    }
}
export const isAuthAC = (isAuth: boolean) => {
    return {
        type: AUTH_ACTION_TYPE.IS_AUTH,
        isAuth
    }
}

export const getAuthUserDataThunkCreator = () => {
    return (dispatch: Dispatch) => {
        authAPI.getHeader()
            .then((response) => {
                if (response.data.resultCode === 0) {
                    const {id, login, email} = response.data.data
                    dispatch(setAuthUserDataAC(login, email, id, true))
                }
            }).catch((err)=> console.warn(err))
    }
}

export const SetLogin = (email: string, password: string, rememberMe: boolean) => {
    return (dispatch: Dispatch) => {
        dispatch(setIsFetchingAC(true))
        authAPI.Login(email, password, rememberMe)
            .then((response) => {
                if (response.data.resultCode === 0) {
                    // @ts-ignore
                    dispatch(getAuthUserDataThunkCreator())
                    dispatch(setIsFetchingAC(false))
                }
            }).catch((err)=> console.warn(err))
    }
}
export const logout = () => {
    return (dispatch: Dispatch) => {
        authAPI.Logout()
            .then((response) => {
                if (response.data.resultCode === 0) {
                    // @ts-ignore
                    dispatch(dispatch(setAuthUserDataAC(null, null, null, false)))
                }
            }).catch((err)=> console.warn(err))
    }
}
