import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {
    ActionACTypes,
    followSuccessAC, getUsersThunkCreator,
    setUsersAC, toggleIsFollowingProgressAC,
    unfollowSuccessAC,
    UsersType
} from "../../Redux/users-reducer";
import {Dispatch} from "redux";
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
        followingInProgress,
    } = useSelector(selectStateUsersPage)
    const dispatch = useDispatch<Dispatch<ActionACTypes>>()


    React.useEffect(() => {
        getUsersThunkCreator(currentPage,pageSize)(dispatch)
    }, [])


    const onPageChanged = (pageNumber: number) => {
        getUsersThunkCreator(pageNumber,pageSize)(dispatch)
    }

    const setUsers = (users: Array<UsersType>) => {
        dispatch(setUsersAC(users))
    }
    const unfollow = (userId: number) => {
        dispatch(unfollowSuccessAC(userId))
    }
    const follow = (userId: number) => {
        dispatch(followSuccessAC(userId))
    }

    const toggleFollowingProgress = (isFetching:boolean)=> {
        dispatch(toggleIsFollowingProgressAC(isFetching))
    }

    console.log('userContainer')
    return (
        <div>
            {isFetching ? <Preloader/> : null}
            <Users setUsers={setUsers}
                   users={items}
                   onPageChanged={onPageChanged}
                   pageSize={pageSize}
                   totalCount={totalCount}
                   currentPage={currentPage}
                   toggleFollowingProgress={toggleFollowingProgress}
                   followingInProgress={followingInProgress}
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
