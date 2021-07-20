import React from 'react';
import {connect} from "react-redux";
import {Users} from "./Users";
import {AppStateType} from "../../Redux/reduxStore";
import {followAC, setUsersAC, unfollowAC, UsersType} from "../../Redux/users-reducer";
import {Dispatch} from "redux";


type MapStateToProps = {
    items:Array<UsersType>
}

type DispatchStateToProps = {
    follow:(userId: number) => void
    unfollow:(userId: number) => void
    setUsers:(users: Array<UsersType>) => void
}

const mapStateToProps = (state:AppStateType):MapStateToProps => {
    return {
        items: state.usersPage.items
    }
}
const mapDispatchToProps = (dispatch:Dispatch):DispatchStateToProps => {
    return {
        follow: (userId: number)=>{
            dispatch(followAC(userId))
        },
        unfollow: (userId: number)=> {
            dispatch(unfollowAC(userId))
        },
        setUsers: (users: Array<UsersType>)=> {
            dispatch(setUsersAC(users))
        }
    }
}


export const UsersContainer = connect(mapStateToProps,mapDispatchToProps) (Users)

