import React from 'react';
import {UsersType} from "../../Redux/users-reducer";
import style from './style.module.sass'
import axios from "axios";
import userPhoto from '../../assets/images/users-icon.jpg'


export type UsersPropsType = {
    items: Array<UsersType>
    follow: (userId: number) => void
    unfollow: (userId: number) => void
    setUsers: (users: Array<UsersType>) => void
}
export const Users: React.FC<UsersPropsType> = (props) => {
    const {items, follow, unfollow, setUsers} = props

    const getUsers = () => {
        if (items.length === 0) {
            axios.get('https://social-network.samuraijs.com/api/1.0/users').then(response => {
                setUsers(response.data.items)
            })
        }
    }


    return (
        <div>
            <button onClick={getUsers}>Get users</button>
            {items.map(u => {

                const onClickFollowHandler = () => {
                    follow(u.id)
                }
                const onClickUnfollowHandler = () => {
                    unfollow(u.id)
                }
                return (
                    <div key={u.id}>
                        <span>
                            <div>
                                <img src={u.photos.small != null ? u.photos.small : userPhoto}
                                     className={style.userPhoto}/>
                            </div>
                            <div>
                                {u.followed ? <button onClick={onClickUnfollowHandler}>Unfollow</button> :
                                    <button onClick={onClickFollowHandler}>Follow</button>}
                            </div>
                        </span>
                        <span>
                            <span>
                                <div>{u.name}</div>
                                <div>{u.status}</div>
                            </span>
                            <span>
                                <div>{'u.location.country'}</div>
                                <div>{'u.location.city'}</div>
                            </span>
                        </span>
                    </div>
                )
            },)}
        </div>
    )
}