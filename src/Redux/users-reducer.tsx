import {v1} from "uuid";


const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET_USERS'


type LocationType = {
    city: string
    country: string
}
export type UsersType = {
    id: string
    photoUrl: string
    followed: boolean
    fullName: string
    status: string
    location: LocationType
}
type InitialStateType = {
    users: Array<UsersType>
}

type ActionTypes =
    ReturnType<typeof followAC>
    | ReturnType<typeof unfollowAC>
    | ReturnType<typeof setUsersAC>

let initialState: InitialStateType = {
     users: [
    //     {
    //         id: v1(),
    //         photoUrl: 'https://static.wikia.nocookie.net/mrbean/images/4/4b/Mr_beans_holiday_ver2.jpg/revision/latest/top-crop/width/360/height/450?cb=20160110111842&path-prefix=ru',
    //         followed: true,
    //         fullName: 'Dmitriy',
    //         status: 'I am a boss',
    //         location: {city: 'N.Novgorod', country: 'Russia'}
    //     },
    //     {
    //         id: v1(),
    //         photoUrl: 'https://static.wikia.nocookie.net/mrbean/images/4/4b/Mr_beans_holiday_ver2.jpg/revision/latest/top-crop/width/360/height/450?cb=20160110111842&path-prefix=ru',
    //         followed: false,
    //         fullName: 'Victor',
    //         status: 'I am a boss to',
    //         location: {city: 'Moscow', country: 'Russia'}
    //     },
    //     {
    //         id: v1(),
    //         photoUrl: 'https://static.wikia.nocookie.net/mrbean/images/4/4b/Mr_beans_holiday_ver2.jpg/revision/latest/top-crop/width/360/height/450?cb=20160110111842&path-prefix=ru',
    //         followed: true,
    //         fullName: 'Sasha',
    //         status: 'I am a boss to',
    //         location: {city: 'St-Peterburg', country: 'Russia'}
    //     },
    //     {
    //         id: v1(),
    //         photoUrl: 'https://static.wikia.nocookie.net/mrbean/images/4/4b/Mr_beans_holiday_ver2.jpg/revision/latest/top-crop/width/360/height/450?cb=20160110111842&path-prefix=ru',
    //         followed: false,
    //         fullName: 'Leonid',
    //         status: 'I am a boss to',
    //         location: {city: 'Kazan', country: 'Russia'}
    //     },
    //     {
    //         id: v1(),
    //         photoUrl: 'https://static.wikia.nocookie.net/mrbean/images/4/4b/Mr_beans_holiday_ver2.jpg/revision/latest/top-crop/width/360/height/450?cb=20160110111842&path-prefix=ru',
    //         followed: true,
    //         fullName: 'Sergey',
    //         status: 'I am a boss to',
    //         location: {city: 'Minsk', country: 'Belarus'}
    //     }
    ] as Array<UsersType>
}


export const usersReducer = (state: InitialStateType = initialState, action: ActionTypes): InitialStateType => {

    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map(users => {
                    if (users.id === action.userId) {
                        return {...users, followed: true}
                    }
                    return users
                })
            }
        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(users => {
                    if(users.id === action.userId){
                        return {...users,followed: false}
                    }
                    return users
                })
            }
        case SET_USERS:
            return {
                ...state,
                users: [...state.users, ...action.users]
            }
        default:
            return state
    }
}


export const followAC = (userId: string) => {
    return {
        type: FOLLOW,
        userId: userId
    } as const
}
export const unfollowAC = (userId: string) => {
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