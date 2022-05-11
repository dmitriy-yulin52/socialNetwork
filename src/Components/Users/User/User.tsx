import React, { useCallback } from 'react';
import userPhoto from '../../../assets/images/users-icon.jpg'
import {NavLink} from 'react-router-dom';
import {PhotosType} from "../../../Redux/Users/users-reducer";
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



        const onUnfollow = useCallback(()=> {
            unfollow(userId)
        },[unfollow])
        const onFollow = useCallback(()=> {
            follow(userId)
        },[follow])



    return (
        <div key={userId}>
            <span>
                <div>
                    <NavLink to={'/profile/' + userId}>
                        <img src={photos.small !== null ? photos.small : userPhoto}
                             className={style.userPhoto} alt={''}/>
                    </NavLink>
                </div>
                <div>
                    {followed
                        ? <button
                            disabled={followingInProgress}
                            onClick={onUnfollow}
                        >Unfollow</button>
                        : <button
                            disabled={followingInProgress}
                            onClick={onFollow}
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