import React from 'react';
import {UsersType} from "../../Redux/users-reducer";
import style from './style.module.sass'
import userPhoto from '../../assets/images/users-icon.jpg'
import styles from "./style.module.sass";


export type UsersPropsType = {
    items: Array<UsersType>
    follow: (userId: number) => void
    unfollow: (userId: number) => void
    setUsers: (users: Array<UsersType>) => void
    onPageChanged: (pageNumber:number)=> void
    pageSize:number
    totalCount:number
    currentPage:number
}
export const Users: React.FC<UsersPropsType> = (props) => {
    const {items, follow, unfollow,onPageChanged,pageSize,totalCount,currentPage} = props

    let pagesCount = Math.ceil(totalCount / pageSize)
    let pages = []
    for(let i = 1; i <= pagesCount; i++){
        pages.push(i)
    }

    return (
        <div>
            <div>
                {pages.map((el) => {
                    return <span className={currentPage === el ? styles.selectedPage : styles.start}
                                 onClick={() => {
                                     onPageChanged(el)
                                 }}
                    >{el}</span>
                })}
            </div>
            <div>
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
                })}
            </div>
        </div>
    )
}