import React from 'react';
import {
    UsersType
} from "./users-reducer";
import {User} from "./User/User";


export type UsersPropsType = {
    users: Array<UsersType>
    follow: (userId: number) => void
    unfollow: (userId: number) => void
    followingInProgress:boolean
}
export const Users: React.FC<UsersPropsType> = React.memo((props) => {
    const
        {
            users,
            follow,
            unfollow,
            followingInProgress,
        } = props

    // let pagesCount = Math.ceil(totalCount / pageSize)
    // let pages = []
    // for (let i = 1; i <= pagesCount; i++) {
    //     pages.push(i)
    // }

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