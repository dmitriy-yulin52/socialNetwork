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
import {Preloader} from "../common/Preloader/Preloader";


type MapStateToPropsType = {
    items: Array<UsersType>
    pageSize: number
    totalCount: number
    currentPage: number
    isFetching: boolean
}
type DispatchStateToPropsType = {
    followAC: (userId: number) => void
    unfollowAC: (userId: number) => void
    setUsersAC: (users: Array<UsersType>) => void
    setCurrentPageAC: (pageNumber: number) => void
    setTotalUsersCountAC: (totalCount: number) => void
    setIsFetchingAC: (isFetching: boolean) => void
}
// followAC,
//     unfollowAC,
//     setUsersAC,
//     setCurrentPageAC,
//     setTotalUsersCountAC,
//     setIsFetchingAC

type UsersPropsType = DispatchStateToPropsType & MapStateToPropsType


class UsersClassComponents extends React.Component<UsersPropsType> {

    componentDidMount() {
        console.log('did')
        this.props.setIsFetchingAC(true)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then(response => {
            this.props.setUsersAC(response.data.items)
            this.props.setTotalUsersCountAC(response.data.totalCount)
            this.props.setIsFetchingAC(false)
        })
    }

    onPageChanged = (pageNumber: number) => {
        console.log('change')
        this.props.setIsFetchingAC(true)
        this.props.setCurrentPageAC(pageNumber)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`).then(response => {
            this.props.setUsersAC(response.data.items)
            this.props.setIsFetchingAC(false)
        })
    }

    render() {
        console.log('userContainer')
        return (
            <div>
                {this.props.isFetching ? <Preloader/> : null}
                <Users setUsers={this.props.setUsersAC}
                       follow={this.props.followAC}
                       unfollow={this.props.unfollowAC}
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


const mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        items: state.usersPage.items,
        pageSize: state.usersPage.pageSize,
        totalCount: state.usersPage.totalCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching
    }
}


// const mapDispatchToProps = (dispatch: Dispatch): DispatchStateToPropsType => {
//     return {
//         follow: (userId: number) => {
//             dispatch(followAC(userId))
//         },
//         unfollow: (userId: number) => {
//             dispatch(unfollowAC(userId))
//         },
//         setUsers: (users: Array<UsersType>) => {
//             dispatch(setUsersAC(users))
//         },
//         setCurrentPage: (pageNumber: number) => {
//             dispatch(setCurrentPageAC(pageNumber))
//         },
//         setTotalUsersCount: (totalCount: number) => {
//             dispatch(setTotalUsersCountAC(totalCount))
//         },
//         toggleIsFetching: (isFetching: boolean) => {
//             dispatch(setIsFetchingAC(isFetching))
//         }
//     }
// }


export const UsersContainer = connect(mapStateToProps,
    {
    followAC,
    unfollowAC,
    setUsersAC,
    setCurrentPageAC,
    setTotalUsersCountAC,
    setIsFetchingAC
    }
)(UsersClassComponents)



