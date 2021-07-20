import React from 'react';
import {UsersType} from "../../Redux/users-reducer";
import style from './style.module.sass'
import axios from "axios";
import userPhoto from '../../assets/images/users-icon.jpg'



type UsersPropsType = {
    items: Array<UsersType>
    follow:(userId: number) => void
    unfollow:(userId: number) => void
    setUsers:(users: Array<UsersType>) => void
}
export const Users:React.FC<UsersPropsType> = (props)=> {
    const {items, follow, unfollow, setUsers} = props

    if(items.length === 0){
        axios.get('https://social-network.samuraijs.com/api/1.0/users').then(response => {
            setUsers(response.data.items)
        })
    }
    // setUsers(
    //     [
    //         {
    //             id: v1(),
    //             photoUrl: 'https://static.wikia.nocookie.net/mrbean/images/4/4b/Mr_beans_holiday_ver2.jpg/revision/latest/top-crop/width/360/height/450?cb=20160110111842&path-prefix=ru',
    //             followed: true,
    //             fullName: 'Dmitriy',
    //             status: 'I am a boss',
    //             location: {city: 'N.Novgorod', country: 'Russia'}
    //         },
    //         {
    //             id: v1(),
    //             photoUrl: 'https://static.wikia.nocookie.net/mrbean/images/4/4b/Mr_beans_holiday_ver2.jpg/revision/latest/top-crop/width/360/height/450?cb=20160110111842&path-prefix=ru',
    //             followed: false,
    //             fullName: 'Victor',
    //             status: 'I am a boss to',
    //             location: {city: 'Moscow', country: 'Russia'}
    //         },
    //         {
    //             id: v1(),
    //             photoUrl: 'https://static.wikia.nocookie.net/mrbean/images/4/4b/Mr_beans_holiday_ver2.jpg/revision/latest/top-crop/width/360/height/450?cb=20160110111842&path-prefix=ru',
    //             followed: true,
    //             fullName: 'Sasha',
    //             status: 'I am a boss to',
    //             location: {city: 'St-Peterburg', country: 'Russia'}
    //         },
    //         {
    //             id: v1(),
    //             photoUrl: 'https://static.wikia.nocookie.net/mrbean/images/4/4b/Mr_beans_holiday_ver2.jpg/revision/latest/top-crop/width/360/height/450?cb=20160110111842&path-prefix=ru',
    //             followed: false,
    //             fullName: 'Leonid',
    //             status: 'I am a boss to',
    //             location: {city: 'Kazan', country: 'Russia'}
    //         },
    //         {
    //             id: v1(),
    //             photoUrl: 'https://static.wikia.nocookie.net/mrbean/images/4/4b/Mr_beans_holiday_ver2.jpg/revision/latest/top-crop/width/360/height/450?cb=20160110111842&path-prefix=ru',
    //             followed: true,
    //             fullName: 'Sergey',
    //             status: 'I am a boss to',
    //             location: {city: 'Minsk', country: 'Belarus'}
    //         }
    //     ]
    // )
    return (
        <div>
            {items.map( u => {

                const onClickFollowHandler = ()=> {
                    follow(u.id)
                }
                const onClickUnfollowHandler = ()=> {
                    unfollow(u.id)
                }
                return(
                    <div key={u.id}>
                        <span>
                            <div>
                                <img src={u.photos.small != null ? u.photos.small : userPhoto} className={style.userPhoto}/>
                            </div>
                            <div>
                                {u.followed ? <button onClick={onClickUnfollowHandler}>Unfollow</button> : <button onClick={onClickFollowHandler}>Follow</button>}
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