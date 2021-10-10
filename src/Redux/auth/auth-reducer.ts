import {authAPI} from "../../api/api";
import {IsFetchingACType, setIsFetchingAC} from "../Users/users-reducer";
import {handleServerAppError} from "../../Components/Error-utils/error-utils";
import {AppStateType} from "../store/reduxStore";
import {ThunkAction} from "redux-thunk";


export enum AUTH_ACTION_TYPE {
    SET_USER_DATA = 'auth-reducer/SET_USER_DATA',
    SET_IS_AUTH = 'auth-reducer/SET_IS_AUTH',
    SET_REQUIRED_FIELD = 'auth-reducer/SET_REQUIRED_FIELD',
    SET_CAPTCHA_URL = 'auth-reducer/SET_CAPTCHA_URL ',
}

export type InitialStateType = {
    userId: number | null,
    email: string | null,
    login: string | null,
    isAuth: boolean,
    captchaUrl: string | null
}


export let initialState: InitialStateType = {
    userId: null as number | null,
    email: null as string | null,
    login: null as string | null,
    isAuth: false,
    captchaUrl: null
}


export const authReducer = (state: InitialStateType = initialState, action: ActionACTypes): InitialStateType => {
    switch (action.type) {
        case AUTH_ACTION_TYPE.SET_CAPTCHA_URL:
        case AUTH_ACTION_TYPE.SET_USER_DATA:
            return {
                ...state,
                ...action.payload,
            }
        case AUTH_ACTION_TYPE.SET_IS_AUTH:
            return {
                ...state,
                isAuth: true,
            }
        default:
            return state
    }
}


//actions
export const setAuthUserDataAC = (login: string | null, email: string | null, userId: number | null, isAuth: boolean): SetUserDataACType => {
    return {
        type: AUTH_ACTION_TYPE.SET_USER_DATA,
        payload: {
            login,
            email,
            userId,
            isAuth,
        }
    }
}
export const setCaptchaUrl = (captchaUrl: string | null): SetCaptchaUrl => {
    return {
        type: AUTH_ACTION_TYPE.SET_CAPTCHA_URL,
        payload: {
            captchaUrl,
        }
    }
}


//thunks
export const getAuthUserDataThunkCreator = (): ThunksActions => {
    return (dispatch) => {
        dispatch(setIsFetchingAC(true))
        authAPI.getHeader()
            .then((response) => {
                if (response.data.resultCode === 0) {
                    const {id, login, email} = response.data.data
                    dispatch(setAuthUserDataAC(login, email, id, true))
                    dispatch(setIsFetchingAC(false))
                }
                if (response.data.resultCode === 1) {
                    dispatch(setIsFetchingAC(false))
                    handleServerAppError(response.data, dispatch)
                }
            }).catch((err) => {
            console.warn(err)
        })
    }
}
export const SetLogin = (email: string, password: string, rememberMe: boolean, captchaUrl: string | null): ThunksActions => {
    return (dispatch, getState) => {
        dispatch(setIsFetchingAC(true))
        authAPI.Login(email, password, rememberMe, captchaUrl)
            .then((response) => {
                if (response.data.resultCode === 0) {
                    if(getState().auth.captchaUrl !== null ){
                        dispatch(setCaptchaUrl(null))
                    }
                    dispatch(getAuthUserDataThunkCreator())
                    dispatch(setIsFetchingAC(false))
                }
                if (response.data.resultCode === 1) {
                    dispatch(setIsFetchingAC(false))
                    handleServerAppError(response.data, dispatch)
                }
                if (response.data.resultCode === 10) {
                    authAPI.getCaptcha()
                        .then((res) => {
                            dispatch(setCaptchaUrl(res.data.url))
                        })
                    dispatch(setIsFetchingAC(false))
                    handleServerAppError(response.data, dispatch)
                }
            }).catch((err) => {
            handleServerAppError(err.data, dispatch)
        })
    }
}
export const logout = (): ThunksActions => {
    return (dispatch) => {
        dispatch(setIsFetchingAC(true))
        authAPI.Logout()
            .then((response) => {
                if (response.data.resultCode === 0) {
                    dispatch(dispatch(setAuthUserDataAC(null, null, null, false)))
                    dispatch(setIsFetchingAC(false))
                }
            }).catch((err) => console.warn(err))

    }
}

//types
export type UserDataType = {
    userId: number | null,
    email: string | null,
    login: string | null,
    isAuth: boolean,
}

type SetUserDataACType = {
    type: AUTH_ACTION_TYPE.SET_USER_DATA,
    payload: UserDataType,
}
type SetIsAuthACType = {
    type: AUTH_ACTION_TYPE.SET_IS_AUTH,
    isAuth: boolean,
}
type SetCaptchaUrl = {
    type: AUTH_ACTION_TYPE.SET_CAPTCHA_URL,
    payload: {
        captchaUrl: string | null
    }
}

type ThunksActions = ThunkAction<void, AppStateType, unknown, ActionACTypes | IsFetchingACType>


export type ActionACTypes =
    SetUserDataACType
    | SetIsAuthACType
    | SetCaptchaUrl
