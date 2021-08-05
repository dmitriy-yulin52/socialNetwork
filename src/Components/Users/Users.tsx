import React, {useMemo} from 'react';
import {ActionACTypes, setIsFetchingAC, setTotalUsersCountAC, setUsersAC, UsersType} from "../../Redux/users-reducer";
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
    follow: (userId: number) => void
    unfollow: (userId: number) => void
    setUsers: (users: Array<UsersType>) => void
    onPageChanged: (pageNumber: number) => void
    pageSize: number
    totalCount: number
    currentPage: number
}
export const Users: React.FC<UsersPropsType> = React.memo((props) => {
    const
        {
            users,
            follow,
            unfollow,
            onPageChanged,
            pageSize,
            totalCount,
            currentPage
        } = props

    let pagesCount = Math.ceil(totalCount / pageSize)
    let pagesCountMemo = useMemo(() => {
        let pages = []
        for (let i = 1; i <= pagesCount; i++) {
            pages.push(i)
        }
        return pages
    }, [pagesCount])

    let pages = pagesCountMemo


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
                                        onClick={() => {
                                                usersAPI.deleteUsers(u.id).then(response => {
                                                    if (response.data.resultCode === 0) {
                                                        unfollow(u.id)
                                                    }
                                                })
                                        }
                                        }
                                    >Unfollow</button>
                                    : <button
                                        onClick={()=>{
                                            usersAPI.postUsers(u.id).then((response)=>{
                                                    if(response.data.resultCode === 0){
                                                        follow(u.id)
                                                    }
                                            })
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