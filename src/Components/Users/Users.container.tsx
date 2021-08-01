import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {
    ActionACTypes,
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
import {selectStateUsersPage} from "../../Redux/selectors";





export const UsersContainer = () => {

    const {
        items,
        pageSize,
        totalCount,
        currentPage,
        isFetching,
    } = useSelector(selectStateUsersPage)
    const dispatch = useDispatch<Dispatch<ActionACTypes>>()


    React.useEffect(() => {
        dispatch(setIsFetchingAC(true))
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${currentPage}&count=${pageSize}`).then(response => {
            dispatch(setUsersAC(response.data.items))
            dispatch(setTotalUsersCountAC(response.data.totalCount))
            dispatch(setIsFetchingAC(false))
        })
    }, [])


    const onPageChanged = (pageNumber: number) => {
        console.log('change')
        dispatch(setIsFetchingAC(true))
        dispatch(setCurrentPageAC(pageNumber))
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${pageSize}`).then(response => {
            dispatch(setUsersAC(response.data.items))
            dispatch(setIsFetchingAC(false))
        })
    }

    const setUsers = (users: Array<UsersType>) => {
        dispatch(setUsersAC(users))
    }
    const unfollow = (userId: number) => {
        dispatch(unfollowAC(userId))
    }
    const follow = (userId: number) => {
        dispatch(followAC(userId))
    }

    console.log('userContainer')
    return (
        <div>
            {isFetching ? <Preloader/> : null}
            <Users setUsers={setUsers}
                   follow={follow}
                   unfollow={unfollow}
                   users={items}
                   onPageChanged={onPageChanged}
                   pageSize={pageSize}
                   totalCount={totalCount}
                   currentPage={currentPage}
            />
        </div>
    )
}


//CLASS COMPONENT!!
//
// class UsersClassComponents extends React.Component<UsersPropsType> {
//
//     componentDidMount() {
//         console.log('did')
//         this.props.setIsFetchingAC(true)
//         axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then(response => {
//             this.props.setUsersAC(response.data.items)
//             this.props.setTotalUsersCountAC(response.data.totalCount)
//             this.props.setIsFetchingAC(false)
//         })
//     }
//
//     onPageChanged = (pageNumber: number) => {
//         console.log('change')
//         this.props.setIsFetchingAC(true)
//         this.props.setCurrentPageAC(pageNumber)
//         axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`).then(response => {
//             this.props.setUsersAC(response.data.items)
//             this.props.setIsFetchingAC(false)
//         })
//     }
//
//     render() {
//         console.log('userContainer')
//         return (
//             <div>
//                 {this.props.isFetching ? <Preloader/> : null}
//                 <Users setUsers={this.props.setUsersAC}
//                        follow={this.props.followAC}
//                        unfollow={this.props.unfollowAC}
//                        items={this.props.items}
//                        onPageChanged={this.onPageChanged}
//                        pageSize={this.props.pageSize}
//                        totalCount={this.props.totalCount}
//                        currentPage={this.props.currentPage}
//                 />
//             </div>
//         )
//     }
// }
//
//
// type MapStateToPropsType = {
//     users: Array<UsersType>
//     pageSize: number
//     totalCount: number
//     currentPage: number
//     isFetching: boolean
// }
// const mapStateToProps = (state: AppStateType): MapStateToPropsType => {
//     return {
//         users: state.usersPage.items,
//         pageSize: state.usersPage.pageSize,
//         totalCount: state.usersPage.totalCount,
//         currentPage: state.usersPage.currentPage,
//         isFetching: state.usersPage.isFetching
//     }
// }
//
//
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
//
//
// export const UsersContainer = connect(mapStateToProps,
//     {
//     followAC,
//     unfollowAC,
//     setUsersAC,
//     setCurrentPageAC,
//     setTotalUsersCountAC,
//     setIsFetchingAC
//     }
// )(UsersClassComponents)
//
// export let UsersContainer = connect(mapStateToProps,mapDispatchToProps) ()
