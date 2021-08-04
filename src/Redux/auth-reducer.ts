export enum AUTH_ACTION_TYPE {
    SET_USER_DATA = 'auth-reducer/SET_USER_DATA',
}

type InitialStateType = {
    data: UserDataType
    isAuth: boolean
}

export type UserDataType = {
    userId: number | null
    email: string | null
    login: string | null
}
type SetUserDataACType = {
    type: AUTH_ACTION_TYPE.SET_USER_DATA,
    data: UserDataType
}

export type ActionACTypes = SetUserDataACType


let initialState: InitialStateType = {
    // userId: null,
    // email: null,
    // login: null,
    data: {
        userId: null,
        email: null,
        login: null,
    },
    isAuth: false
}


export const authReducer = (state: InitialStateType = initialState, action: ActionACTypes): InitialStateType => {
    switch (action.type) {
        case AUTH_ACTION_TYPE.SET_USER_DATA:
            return {
                ...state,
                ...action.data,
                isAuth:true,
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
