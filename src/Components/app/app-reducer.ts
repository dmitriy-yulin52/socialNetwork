import React from 'react'


enum APP_REDUCER_AT {
    SET_ERROR = 'app-reducer/SET_ERROR'
}

type InitialStateType = {
    error: string | null
}
const initialState: InitialStateType = {
    error: null
}


type ActionsType = SetErrorAT
export type SetErrorAT = ReturnType<typeof setErrorAC>

export const appReducer = (state: InitialStateType = initialState, action: ActionsType): InitialStateType => {
    switch (action.type) {
        case APP_REDUCER_AT.SET_ERROR:
            return {...state, error: action.error}
        default:
            return {...state}
    }
}


//actions
export const setErrorAC = (error: string | null) => {
    return {
        type: APP_REDUCER_AT.SET_ERROR,
        error
    } as const
}