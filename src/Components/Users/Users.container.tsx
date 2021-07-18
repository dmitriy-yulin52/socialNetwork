import React from 'react';
import {connect} from "react-redux";
import {Users} from "./Users";
import {AppStateType} from "../../Redux/reduxStore";
import {followAC, setUsersAC, unfollowAC, UsersType} from "../../Redux/users-reducer";
import {Dispatch} from "redux";


type MapStateToProps = {
    users:Array<UsersType>
}

type DispatchStateToProps = {
    follow:(userId: string) => void
    unfollow:(userId: string) => void
    setUsers:(users: Array<UsersType>) => void

}

const mapStateToProps = (state:AppStateType):MapStateToProps => {
    return {
        users: state.usersPage.users
    }
}
const mapDispatchToProps = (dispatch:Dispatch):DispatchStateToProps => {
    return {
        follow: (userId: string)=>{
            dispatch(followAC(userId))
        },
        unfollow: (userId: string)=> {
            dispatch(unfollowAC(userId))
        },
        setUsers: (users: Array<UsersType>)=> {
            dispatch(setUsersAC(users))
        }
    }
}


export const UsersContainer = connect(mapStateToProps,mapDispatchToProps) (Users)

