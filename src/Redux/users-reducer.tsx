

export enum USERS_ACTION_TYPE {
    FOLLOW = 'users-reducer/FOLLOW',
    UNFOLLOW = 'users-reducer/UNFOLLOW',
    SET_USERS = 'users-reducer/SET_USERS',
    SET_CURRENT_PAGE = 'users-reducer/SET_CURRENT_PAGE',
    SET_TOTAL_USERS_COUNT = 'users-reducer/SET_TOTAL_USERS_COUNT',
    TOGGLE_IS_FETCHING = 'users-reducer/TOGGLE_IS_FETCHING',
}

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
    pageSize: number
    currentPage: number
    isFetching: boolean
}


// type ActionTypes =
//     ReturnType<typeof followAC>
//     | ReturnType<typeof unfollowAC>
//     | ReturnType<typeof setUsersAC>

type ActionTypes =
    FollowACType
    | UnfollowACType
    | SetUsersACType
    | SetCurrentUsersACType
    | SetTotalUsersCountACType
    | isFetchingACType


type FollowACType = {
    type: USERS_ACTION_TYPE.FOLLOW
    userId: number
}
type UnfollowACType = {
    type: USERS_ACTION_TYPE.UNFOLLOW
    userId: number
}
type SetUsersACType = {
    type: USERS_ACTION_TYPE.SET_USERS
    users: Array<UsersType>
}
 export type SetCurrentUsersACType = {
    type: USERS_ACTION_TYPE.SET_CURRENT_PAGE
    currentPage: number
}
type SetTotalUsersCountACType = {
    type: USERS_ACTION_TYPE.SET_TOTAL_USERS_COUNT
    totalUsersCount: number
}
type isFetchingACType = {
    type: USERS_ACTION_TYPE.TOGGLE_IS_FETCHING
    isFetching: boolean
}

let initialState: InitialStateType = {
    items: [] as Array<UsersType>,
    pageSize: 5,
    totalCount: 0,
    error: null,
    currentPage: 1,
    isFetching: false
}


export const usersReducer = (state: InitialStateType = initialState, action: ActionTypes): InitialStateType => {

    switch (action.type) {
        case USERS_ACTION_TYPE.FOLLOW:
            return {
                ...state,
                items: state.items.map(items => {
                    if (items.id === action.userId) {
                        return {...items, followed: true}
                    }
                    return items
                })
            }
        case USERS_ACTION_TYPE.UNFOLLOW:
            return {
                ...state,
                items: state.items.map(users => {
                    if (users.id === action.userId) {
                        return {...users, followed: false}
                    }
                    return users
                })
            }
        case USERS_ACTION_TYPE.SET_USERS:
            return {
                ...state,
                items: action.users
            }
        case USERS_ACTION_TYPE.SET_CURRENT_PAGE:
            return {
                ...state,
                currentPage: action.currentPage
            }
        case USERS_ACTION_TYPE.SET_TOTAL_USERS_COUNT:
            return {
                ...state,
                totalCount: action.totalUsersCount
            }
        case USERS_ACTION_TYPE.TOGGLE_IS_FETCHING:
            return {
                ...state,
                isFetching: action.isFetching
            }
        default:
            return state
    }
}


export const followAC = (userId: number): FollowACType => {
    return {
        type: USERS_ACTION_TYPE.FOLLOW,
        userId: userId
    } as const
}
export const unfollowAC = (userId: number): UnfollowACType => {
    return {
        type: USERS_ACTION_TYPE.UNFOLLOW,
        userId: userId
    } as const
}
export const setUsersAC = (users: Array<UsersType>): SetUsersACType => {
    return {
        type: USERS_ACTION_TYPE.SET_USERS,
        users: users
    } as const
}
export const setCurrentPageAC = (currentPage: number): SetCurrentUsersACType => {
    return {
        type: USERS_ACTION_TYPE.SET_CURRENT_PAGE,
        currentPage
    } as const
}
export const setTotalUsersCountAC = (totalUsersCount: number): SetTotalUsersCountACType => {
    return {
        type: USERS_ACTION_TYPE.SET_TOTAL_USERS_COUNT,
        totalUsersCount
    } as const
}
export const setIsFetchingAC = (isFetching: boolean): isFetchingACType => {
    return {
        type: USERS_ACTION_TYPE.TOGGLE_IS_FETCHING,
        isFetching
    } as const
}