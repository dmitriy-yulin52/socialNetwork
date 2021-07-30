const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET_USERS'
const SET_CURRENT_PAGE = 'SET-CURRENT-PAGE'
const SET_TOTAL_USERS_COUNT = 'SET-USERS-TOTAL-COUNT'
const TOGGLE_IS_FETCHING = 'TOGGLE-IS-FETCHING'




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
    isFetching:boolean
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
    type:'FOLLOW'
    userId: number
}
type UnfollowACType = {
    type:'UNFOLLOW'
    userId: number
}
type SetUsersACType = {
    type:'SET_USERS'
    users: Array<UsersType>
}
type SetCurrentUsersACType = {
    type:'SET-CURRENT-PAGE'
    currentPage:number
}
type SetTotalUsersCountACType = {
    type:'SET-USERS-TOTAL-COUNT'
    totalUsersCount:number
}
type isFetchingACType = {
    type:'TOGGLE-IS-FETCHING'
    isFetching:boolean
}

let initialState: InitialStateType = {
    items: [] as Array<UsersType>,
    pageSize: 5,
    totalCount: 0,
    error: null,
    currentPage: 1,
    isFetching:false
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
                    if (users.id === action.userId) {
                        return {...users, followed: false}
                    }
                    return users
                })
            }
        case SET_USERS:
            return {
                ...state,
                items:action.users
            }
        case SET_CURRENT_PAGE:
            return {
                ...state,
                currentPage:action.currentPage
            }
            case SET_TOTAL_USERS_COUNT:
            return {
                ...state,
                totalCount:action.totalUsersCount
            }
        case TOGGLE_IS_FETCHING:
            return{
                ...state,
                isFetching:action.isFetching
            }
        default:
            return state
    }
}


export const followAC = (userId: number):FollowACType => {
    return {
        type: FOLLOW,
        userId: userId
    } as const
}
export const unfollowAC = (userId: number):UnfollowACType => {
    return {
        type: UNFOLLOW,
        userId: userId
    } as const
}
export const setUsersAC = (users: Array<UsersType>):SetUsersACType => {
    return {
        type: SET_USERS,
        users: users
    } as const
}
export const setCurrentPageAC = (currentPage:number):SetCurrentUsersACType => {
    return {
        type: SET_CURRENT_PAGE,
        currentPage
    } as const
}
export const setTotalUsersCountAC = (totalUsersCount:number):SetTotalUsersCountACType => {
    return {
        type: SET_TOTAL_USERS_COUNT,
        totalUsersCount
    } as const
}
export const setIsFetchingAC = (isFetching:boolean):isFetchingACType => {
    return {
        type: TOGGLE_IS_FETCHING,
        isFetching
    } as const
}