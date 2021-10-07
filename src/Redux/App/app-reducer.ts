import React from 'react'
import {Dispatch} from "redux";
import {getAuthUserDataThunkCreator} from "../auth/auth-reducer";
import {handleServerAppError} from "../../Components/Error-utils/error-utils";


enum APP_REDUCER {
    INITIALIZED_SUCCESS = 'app-reducer/INITIALIZED',
    SET_ERROR_APP = 'app-reducer/SET_ERROR_APP',
}

type InitialStateType = {
    initialized: boolean,
    error: string | null,
}
const initialState: InitialStateType = {
    initialized: false,
    error: null,
}
export type ResponseType<D = {}> = {
    data: D,
    fieldsErrors: [],
    messages: Array<string>,
    resultCode: number,
}

export type SetErrorAppAT = ReturnType<typeof setErrorAppAC>
export type initializedSuccess = ReturnType<typeof initializedSuccess>

type ActionsType =
    | initializedSuccess
    | SetErrorAppAT


export const appReducer = (state: InitialStateType = initialState, action: ActionsType): InitialStateType => {
    switch (action.type) {
        case APP_REDUCER.INITIALIZED_SUCCESS:
            return {
                ...state,
                initialized: true,
            }
        case APP_REDUCER.SET_ERROR_APP:
            return {
                ...state,
                error: action.error
            }

        default:
            return {...state}
    }
}


//actions
export const initializedSuccess = () => {
    return {
        type: APP_REDUCER.INITIALIZED_SUCCESS,
    } as const
}
export const setErrorAppAC = (error: string | null) => {
    return {
        type: APP_REDUCER.SET_ERROR_APP,
        error,
    } as const
}

//thunks
export const initializeAppTC = () => {
    return (dispatch: Dispatch) => {
        let promise = dispatch(getAuthUserDataThunkCreator() as any)
        promise.then(() => {
            dispatch(initializedSuccess())

        })
    }
}