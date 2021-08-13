import React from 'react';
import userPhoto from '../../../assets/images/users-icon.jpg'
import {NavLink} from 'react-router-dom';
import {PhotosType} from "../../../Redux/users-reducer";
import style from './User.module.sass'


export type UsersPropsType = {
    userId:number
    followingInProgress: boolean
    follow: (userId: number) => void
    unfollow: (userId: number) => void
    photos:PhotosType
    name:string
    status:string
    followed:boolean
}
export const User = React.memo((props: UsersPropsType) => {
    const
        {
            photos,
            name,
            status,
            userId,
            followingInProgress,
            follow,
            unfollow,
            followed,
        } = props


    return (
        <div key={userId}>
            <span>
                <div>
                    <NavLink to={'/profile/' + userId}>
                        <img src={photos.small !== null ? photos.small : userPhoto}
                             className={style.userPhoto}/>
                    </NavLink>
                </div>
                <div>
                    {followed
                        ? <button
                            disabled={followingInProgress}
                            onClick={() => unfollow(userId)}
                        >Unfollow</button>
                        : <button
                            disabled={followingInProgress}
                            onClick={() => follow(userId)}
                        >Follow</button>}

                </div>
            </span>
            <span>
                <span>
                    <div>{name}</div>
                    <div>{status}</div>
                </span>
                <span>
                    <div>{'u.location.country'}</div>
                    <div>{'u.location.city'}</div>
                </span>
            </span>
        </div>
    )
})