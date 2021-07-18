import React from 'react';
import {UsersType} from "../../Redux/users-reducer";
import styles from './Users.module.css'
import {v1} from "uuid";



type UsersPropsType = {
    users: Array<UsersType>
    follow:(userId: string) => void
    unfollow:(userId: string) => void
    setUsers:(users: Array<UsersType>) => void
}
export const Users:React.FC<UsersPropsType> = (props)=> {
    const {users, follow, unfollow, setUsers} = props

    if(users.length === 0){

        setUsers(
            [
                {
                    id: v1(),
                    photoUrl: 'https://static.wikia.nocookie.net/mrbean/images/4/4b/Mr_beans_holiday_ver2.jpg/revision/latest/top-crop/width/360/height/450?cb=20160110111842&path-prefix=ru',
                    followed: true,
                    fullName: 'Dmitriy',
                    status: 'I am a boss',
                    location: {city: 'N.Novgorod', country: 'Russia'}
                },
                {
                    id: v1(),
                    photoUrl: 'https://static.wikia.nocookie.net/mrbean/images/4/4b/Mr_beans_holiday_ver2.jpg/revision/latest/top-crop/width/360/height/450?cb=20160110111842&path-prefix=ru',
                    followed: false,
                    fullName: 'Victor',
                    status: 'I am a boss to',
                    location: {city: 'Moscow', country: 'Russia'}
                },
                {
                    id: v1(),
                    photoUrl: 'https://static.wikia.nocookie.net/mrbean/images/4/4b/Mr_beans_holiday_ver2.jpg/revision/latest/top-crop/width/360/height/450?cb=20160110111842&path-prefix=ru',
                    followed: true,
                    fullName: 'Sasha',
                    status: 'I am a boss to',
                    location: {city: 'St-Peterburg', country: 'Russia'}
                },
                {
                    id: v1(),
                    photoUrl: 'https://static.wikia.nocookie.net/mrbean/images/4/4b/Mr_beans_holiday_ver2.jpg/revision/latest/top-crop/width/360/height/450?cb=20160110111842&path-prefix=ru',
                    followed: false,
                    fullName: 'Leonid',
                    status: 'I am a boss to',
                    location: {city: 'Kazan', country: 'Russia'}
                },
                {
                    id: v1(),
                    photoUrl: 'https://static.wikia.nocookie.net/mrbean/images/4/4b/Mr_beans_holiday_ver2.jpg/revision/latest/top-crop/width/360/height/450?cb=20160110111842&path-prefix=ru',
                    followed: true,
                    fullName: 'Sergey',
                    status: 'I am a boss to',
                    location: {city: 'Minsk', country: 'Belarus'}
                }
            ]
        )
    }

    return (
        <div>
            <span>hello</span>
            {users.map( u => {

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
                                <img src={u.photoUrl} className={styles.userPhoto}/>
                            </div>
                            <div>
                                {u.followed ? <button onClick={onClickUnfollowHandler}>Unfollow</button> : <button onClick={onClickFollowHandler}>Follow</button>}
                            </div>
                        </span>
                        <span>
                            <span>
                                <div>{u.fullName}</div>
                                <div>{u.status}</div>
                            </span>
                            <span>
                                <div>{u.location.country}</div>
                                <div>{u.location.city}</div>
                            </span>
                        </span>
                    </div>
                )
            },)}
        </div>
    )
}