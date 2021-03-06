import React from 'react';
import {
    UsersType
} from "../../Redux/Users/users-reducer";
import {User} from "./User/User";


export type UsersPropsType = {
    users: Array<UsersType>
    follow: (userId: number) => void
    unfollow: (userId: number) => void
    followingInProgress:boolean
}
export const Users= React.memo((props:UsersPropsType) => {
    const
        {
            users,
            follow,
            unfollow,
            followingInProgress,
        } = props

    return (
        <div>
            <div>
                {users.map(u => {
                    return (
                        <User
                            userId={u.id}
                            photos={u.photos}
                            name={u.name}
                            status={u.status}
                            followed={u.followed}
                            unfollow={unfollow}
                            follow={follow}
                            followingInProgress={followingInProgress}
                        />
                    )
                })}
            </div>
        </div>
    )
})