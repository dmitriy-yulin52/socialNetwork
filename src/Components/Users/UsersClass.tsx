import React from 'react';
import {UsersType} from "../../Redux/users-reducer";
import style from './style.module.sass'
import axios from "axios";
import userPhoto from '../../assets/images/users-icon.jpg'
import {UsersPropsType} from "./Users";




export class UsersClass extends React.Component<UsersPropsType,any>{

    constructor(props:any) {
        super(props);

            axios.get('https://social-network.samuraijs.com/api/1.0/users').then(response => {
                props.setUsers(response.data.items)
            })


    }


    // getUsers = () => {
    //     if (this.props.items.length === 0) {
    //         axios.get('https://social-network.samuraijs.com/api/1.0/users').then(response => {
    //             props.setUsers(response.data.items)
    //         })
    //     }
    // }

    render(){
        return (
            <div>
                {this.props.items.map(u => {

                    const onClickFollowHandler = () => {
                        this.props.follow(u.id)
                    }
                    const onClickUnfollowHandler = () => {
                        this.props.unfollow(u.id)
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
}