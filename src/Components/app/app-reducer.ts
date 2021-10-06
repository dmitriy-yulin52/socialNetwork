import React from 'react'
import {Dispatch} from "redux";
import {getAuthUserDataThunkCreator} from "../../Redux/auth-reducer";


enum APP_REDUCER {
    INITIALIZED_SUCCESS = 'app-reducer/INITIALIZED'
}

type InitialStateType = {
    initialized: boolean,
}
const initialState: InitialStateType = {
    initialized: false,
}


type ActionsType = ReturnType<typeof initializedSuccess>

export const appReducer = (state: InitialStateType = initialState, action: ActionsType): InitialStateType => {
    switch (action.type) {
        case APP_REDUCER.INITIALIZED_SUCCESS:
            return {
                ...state,
                initialized: true,
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

//thunks
export const initializeAppTC = () => {
    return (dispatch: Dispatch) => {
        let promise = dispatch(getAuthUserDataThunkCreator() as any)
        Promise.all([promise]).then(() => {
            dispatch(initializedSuccess())
        })
    }
}