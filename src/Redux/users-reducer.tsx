

const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET_USERS'


type PhotosType = {
    small: string | null
    large: string | null
}
export type UsersType = {
    id: number
    photos: PhotosType
    followed: boolean
    name: string
    status: string
}
type InitialStateType = {
    items: Array<UsersType>
    totalCount: number
    error: string | null
}



type ActionTypes =
    ReturnType<typeof followAC>
    | ReturnType<typeof unfollowAC>
    | ReturnType<typeof setUsersAC>

let initialState: InitialStateType = {
    items: [] as Array<UsersType>,
    totalCount: 25,
    error: null
}


export const usersReducer = (state: InitialStateType = initialState, action: ActionTypes): InitialStateType => {

    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                items: state.items.map(items => {
                    if (items.id === action.userId) {
                        return {...items, followed: true}
                    }
                    return items
                })
            }
        case UNFOLLOW:
            return {
                ...state,
                items: state.items.map(users => {
                    if(users.id === action.userId){
                        return {...users,followed: false}
                    }
                    return users
                })
            }
        case SET_USERS:
            return {
                ...state,
                items: [...state.items, ...action.users]
            }
        default:
            return state
    }
}


export const followAC = (userId: number) => {
    return {
        type: FOLLOW,
        userId: userId
    } as const
}
export const unfollowAC = (userId: number) => {
    return {
        type: UNFOLLOW,
        userId: userId
    } as const
}
export const setUsersAC = (users: Array<UsersType> ) => {
    return {
        type: SET_USERS,
        users: users
    } as const
}