import {usersAPI} from "../../api/api";
import {Dispatch} from "redux";


export enum USERS_ACTION_TYPE {
    FOLLOW = 'users-reducer/FOLLOW',
    UNFOLLOW = 'users-reducer/UNFOLLOW',
    SET_USERS = 'users-reducer/SET_USERS',
    SET_CURRENT_PAGE = 'users-reducer/SET_CURRENT_PAGE',
    SET_TOTAL_USERS_COUNT = 'users-reducer/SET_TOTAL_USERS_COUNT',
    TOGGLE_IS_FETCHING = 'users-reducer/TOGGLE_IS_FETCHING',
    TOGGLE_IS_FOLLOWING_PROGRESS = 'users-reducer/TOGGLE_IS_FOLLOWING_PROGRESS',
}


export const usersReducer = (state: InitialStateType = initialState, action: ActionACTypes): InitialStateType => {

    switch (action.type) {
        case USERS_ACTION_TYPE.FOLLOW:
            return {
                ...state,
                items: state.items.map(users => {
                    if (users.id === action.userId) {
                        return {...users, followed: true}
                    }
                    return users
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
        case USERS_ACTION_TYPE.TOGGLE_IS_FOLLOWING_PROGRESS:
            return {
                ...state,
                followingInProgress: action.isFetching
                // ? [...state.followingInProgress, action.userId]
                // : state.followingInProgress.filter(el=>el !== action.userId)
            }
        default:
            return state
    }
}

//actions
export const followSuccessAC = (userId: number): FollowACType => {
    return {
        type: USERS_ACTION_TYPE.FOLLOW,
        userId: userId
    }
}
export const unfollowSuccessAC = (userId: number): UnfollowACType => {
    return {
        type: USERS_ACTION_TYPE.UNFOLLOW,
        userId: userId
    }
}
export const setUsersAC = (users: Array<UsersType>): SetUsersACType => {
    return {
        type: USERS_ACTION_TYPE.SET_USERS,
        users: users
    }
}
export const setCurrentPageAC = (currentPage: number): SetCurrentUsersACType => {
    return {
        type: USERS_ACTION_TYPE.SET_CURRENT_PAGE,
        currentPage
    }
}
export const setTotalUsersCountAC = (totalUsersCount: number): SetTotalUsersCountACType => {
    return {
        type: USERS_ACTION_TYPE.SET_TOTAL_USERS_COUNT,
        totalUsersCount
    }
}
export const setIsFetchingAC = (isFetching: boolean): IsFetchingACType => {
    return {
        type: USERS_ACTION_TYPE.TOGGLE_IS_FETCHING,
        isFetching,
    }
}
export const toggleIsFollowingProgressAC = (isFetching: boolean): ToggleIsFollowingProgressAC => {
    return {
        type: USERS_ACTION_TYPE.TOGGLE_IS_FOLLOWING_PROGRESS,
        isFetching,
    }
}



//thunk
export const getUsersThunkCreator = (currentPage: number, pageSize: number) => {
    return (dispatch: Dispatch<ActionACTypes>) => {
        dispatch(setIsFetchingAC(true))

        usersAPI.getUsers(currentPage, pageSize).then(data => {
            dispatch(setUsersAC(data.items))
            dispatch(setTotalUsersCountAC(data.totalCount))
            dispatch(setIsFetchingAC(false))
        })
    }
}
export const unfollowThunkCreator = (usersId: number) => {
    return (dispatch:Dispatch<ActionACTypes>) => {
        dispatch(toggleIsFollowingProgressAC(true))
        usersAPI.unFollow(usersId)
            .then(response => {
                if (response.data.resultCode === 0) {
                    dispatch(unfollowSuccessAC(usersId))
                }
                dispatch(toggleIsFollowingProgressAC(false))
            })
    }
}
export const followThunkCreator = (usersId: number) => {
    return (dispatch: Dispatch<ActionACTypes>) => {
        dispatch(toggleIsFollowingProgressAC(true))
        usersAPI.follow(usersId)
            .then(response => {
                if (response.data.resultCode === 0) {
                    dispatch(followSuccessAC(usersId))
                }
                dispatch(toggleIsFollowingProgressAC(false))
            })
    }
}



//types
export type PhotosType = {
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
    followingInProgress: boolean
}


export type ActionACTypes =
    FollowACType
    | UnfollowACType
    | SetUsersACType
    | SetCurrentUsersACType
    | SetTotalUsersCountACType
    | IsFetchingACType
    | ToggleIsFollowingProgressAC


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
type IsFetchingACType = {
    type: USERS_ACTION_TYPE.TOGGLE_IS_FETCHING
    isFetching: boolean
}
type ToggleIsFollowingProgressAC = {
    type: USERS_ACTION_TYPE.TOGGLE_IS_FOLLOWING_PROGRESS,
    isFetching: boolean
}



let initialState: InitialStateType = {
    items: [] as Array<UsersType> ,
    pageSize: 5,
    totalCount: 0,
    error: null,
    currentPage: 1,
    isFetching: false,
    followingInProgress: false,
}