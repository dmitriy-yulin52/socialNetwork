import React from 'react';
import {connect} from "react-redux";
import {AppStateType} from "../../Redux/reduxStore";
import {
    followAC,
    setCurrentPageAC, setIsFetchingAC,
    setTotalUsersCountAC,
    setUsersAC,
    unfollowAC,
    UsersType
} from "../../Redux/users-reducer";
import {Dispatch} from "redux";
import axios from "axios";
import {Users} from "./Users";
import loader from '../../assets/images/loader.svg'
import {Preloader} from "../common/Preloader/Preloader";


type MapStateToPropsType = {
    items:Array<UsersType>
    pageSize:number
    totalCount:number
    currentPage:number
    isFetching:boolean
}
type DispatchStateToPropsType = {
    follow:(userId: number) => void
    unfollow:(userId: number) => void
    setUsers:(users: Array<UsersType>) => void
    setCurrentPage:(pageNumber:number) => void
    setTotalUsersCount:(totalCount:number)=>void
    toggleIsFetching:(isFetching:boolean)=> void
}

type UsersPropsType = DispatchStateToPropsType & MapStateToPropsType


class UsersClassComponents extends React.Component<UsersPropsType>{

    componentDidMount() {
        this.props.toggleIsFetching(true)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then(response => {
            this.props.setUsers(response.data.items)
            this.props.setTotalUsersCount(response.data.totalCount)
            this.props.toggleIsFetching(false)
        })
    }

    onPageChanged = (pageNumber:number)=> {
        this.props.toggleIsFetching(true)
        this.props.setCurrentPage(pageNumber)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`).then(response => {
            this.props.setUsers(response.data.items)
            this.props.toggleIsFetching(false)
        })
    }


    render(){


        return (
            <div>

                {this.props.isFetching ? <Preloader/> : null}
            <Users setUsers={this.props.setUsers}
                   follow={this.props.follow}
                   unfollow={this.props.unfollow}
                   items={this.props.items}
                   onPageChanged={this.onPageChanged}
                   pageSize={this.props.pageSize}
                   totalCount={this.props.totalCount}
                   currentPage={this.props.currentPage}
            />
            </div>
        )
    }
}


const mapStateToProps = (state:AppStateType):MapStateToPropsType => {
    return {
        items: state.usersPage.items,
        pageSize:state.usersPage.pageSize,
        totalCount:state.usersPage.totalCount,
        currentPage:state.usersPage.currentPage,
        isFetching:state.usersPage.isFetching
    }
}
const mapDispatchToProps = (dispatch:Dispatch):DispatchStateToPropsType => {
    return {
        follow: (userId: number)=>{
            dispatch(followAC(userId))
        },
        unfollow: (userId: number)=> {
            dispatch(unfollowAC(userId))
        },
        setUsers: (users: Array<UsersType>)=> {
            dispatch(setUsersAC(users))
        },
        setCurrentPage:(pageNumber:number)=> {
            dispatch(setCurrentPageAC(pageNumber))
        },
        setTotalUsersCount:(totalCount:number)=> {
            dispatch(setTotalUsersCountAC(totalCount))
        },
        toggleIsFetching:(isFetching:boolean)=>{
            dispatch(setIsFetchingAC(isFetching))
        }
    }
}


export const UsersContainer = connect(mapStateToProps,mapDispatchToProps) (UsersClassComponents)

