import React, {useMemo} from 'react';
import {
    ActionACTypes, follow,
    setIsFetchingAC,
    setTotalUsersCountAC,
    setUsersAC,
    unfollow,
    UsersType
} from "../../Redux/users-reducer";
import style from './style.module.sass'
import userPhoto from '../../assets/images/users-icon.jpg'
import styles from "./style.module.sass";
import {NavLink} from 'react-router-dom';
import axios from "axios";
import {useDispatch} from "react-redux";
import {Dispatch} from "redux";
import {usersAPI} from "../../api/api";


export type UsersPropsType = {
    users: Array<UsersType>
    setUsers: (users: Array<UsersType>) => void
    onPageChanged: (pageNumber: number) => void
    pageSize: number
    totalCount: number
    currentPage: number
    toggleFollowingProgress: (isFetching:boolean) => void
    followingInProgress: boolean
}
export const Users: React.FC<UsersPropsType> = React.memo((props) => {
    const
        {
            users,
            onPageChanged,
            pageSize,
            totalCount,
            currentPage,
            followingInProgress,
        } = props

    let pagesCount = Math.ceil(totalCount / pageSize)
    let pages = []
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }
    // let pagesCountMemo = useMemo(() => {
    //     let pages = []
    //     for (let i = 1; i <= pagesCount; i++) {
    //         pages.push(i)
    //     }
    //     return pages
    // }, [pagesCount])
    //
    // let pages = pagesCountMemo
const dispatch = useDispatch()

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
                {users.map(u => {
                    return (
                        <div key={u.id}>
                        <span>
                            <div>
                                <NavLink to={'/profile/' + u.id}>
                                    <img src={u.photos.small !== null ? u.photos.small : userPhoto}
                                         className={style.userPhoto}/>
                                </NavLink>
                            </div>
                            <div>
                                {u.followed
                                    ? <button
                                        disabled={followingInProgress}
                                        onClick={() => {
                                            unfollow(u.id)
                                        }
                                        }
                                    >Unfollow</button>
                                    : <button
                                        disabled={followingInProgress}
                                        onClick={() => {
                                            follow(u.id)
                                        }}
                                    >Follow</button>}

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
})