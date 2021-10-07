import {Dispatch} from "redux";
import {authAPI} from "../../api/api";
import {setIsFetchingAC} from "../Users/users-reducer";


export enum AUTH_ACTION_TYPE {
    SET_USER_DATA = 'auth-reducer/SET_USER_DATA',
    SET_IS_AUTH = 'auth-reducer/SET_IS_AUTH',
    SET_REQUIRED_FIELD = 'auth-reducer/SET_REQUIRED_FIELD',
}

export type InitialStateType = {
    userId: number | null,
    email: string | null,
    login: string | null,
    isAuth: boolean,
}


export let initialState: InitialStateType = {
    userId: null as number | null,
    email: null as string | null,
    login: null as string | null,
    isAuth: false,
}


export const authReducer = (state: InitialStateType = initialState, action: ActionACTypes): InitialStateType => {
    switch (action.type) {
        case AUTH_ACTION_TYPE.SET_USER_DATA:
            return {
                ...state,
                ...action.payload,
                // isAuth: action.payload.isAuth,
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


//thunks
export const getAuthUserDataThunkCreator = () => {
    return async (dispatch: Dispatch) => {
        dispatch(setIsFetchingAC(true))
        let promise = await authAPI.getHeader()
                if (promise.data.resultCode === 0) {
                    const {id, login, email} = promise.data.data
                    dispatch(setAuthUserDataAC(login, email, id, true))
                    dispatch(setIsFetchingAC(false))
                }

    }

}
export const SetLogin = (email: string, password: string, rememberMe: boolean) => {
    return (dispatch: Dispatch) => {
        dispatch(setIsFetchingAC(true))
        authAPI.Login(email, password, rememberMe)
               .then((response) => {
                   if (response.data.resultCode === 0) {
                       dispatch(getAuthUserDataThunkCreator() as any)
                       dispatch(setIsFetchingAC(false))
                   }
                   if (response.data.resultCode === 1) {
                       dispatch(setIsFetchingAC(false))
                   }
                   if (response.data.resultCode === 10) {
                       dispatch(setIsFetchingAC(false))
                   }
               }).catch((err)=>{
                   console.warn(err)
        })



    }
}
export const logout = () => {
    return (dispatch: Dispatch) => {
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


export type ActionACTypes =
    SetUserDataACType
    | SetIsAuthACType
