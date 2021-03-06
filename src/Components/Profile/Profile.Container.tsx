import React, {useCallback, useEffect} from 'react';
import {Profile} from "./Profile";
import {useDispatch, useSelector} from "react-redux";
import {
    getStatusProfileTC,
    getUserProfileThunkCreator,
    updateStatusProfileTC
} from "../../Redux/Profile/ProfileReducer";
import {RouteComponentProps, withRouter} from 'react-router-dom';
import {selectStateAuthPage, selectStateProfilePage} from "../../Redux/selectors";
import {withAuthRedirect} from "../../HOC/withAuthRedirect";
import {compose} from 'redux';
import s from './Profile.module.css'


export type PathParamsType = {
    userId: string,
}
export type ProfilePropsType = RouteComponentProps<PathParamsType>

const ProfileContainer = React.memo((props: ProfilePropsType) => {

    const {
        profile,
        status,
        posts,
    } = useSelector(selectStateProfilePage)

    const {
        userId,
    } = useSelector(selectStateAuthPage)
    let authorizedUserId= userId
    const dispatch = useDispatch()

    useEffect(() => {
        let userId = props.match.params.userId
        if (!userId) {
            // @ts-ignore
            userId = authorizedUserId
        }
        dispatch(getUserProfileThunkCreator(userId))
        dispatch(getStatusProfileTC(userId))
    }, [authorizedUserId, dispatch, props.match.params.userId])

    const updateStatus = useCallback((status: string) => {
        dispatch(updateStatusProfileTC(status))
    }, [dispatch])


    return (
        <div className={s.profile}>

            <Profile
                profile={profile}
                status={status}
                updateStatus={updateStatus}
                posts={posts}
            />
        </div>
    )
})


export default compose<React.ComponentType>(
    withRouter,
    withAuthRedirect
)(ProfileContainer)

// const AuthRedirectComponent = withAuthRedirect(ProfileContainer)
// export let WithUrlDataContainerComponent = withRouter(AuthRedirectComponent)

//class components
// let mapStateToProps = (state: AppStateType): MapStateToProps => {
//     return {
//         profile: state.profilePage.profile
//     }
// }
// export type MapStateToProps = {
//     profile: ProfileType
// }
// type MapDispatchToProps = {
//     setUserProfileAC: (profile: ProfileType) => void
// }
//
// type OwnPropsType = MapStateToProps & MapDispatchToProps
// class ProfileContainerClass extends React.Component<OwnPropsType> {
//
//     componentDidMount() {
//         axios.get(`https://social-network.samuraijs.com/api/1.0/profile/2`)
//             .then(response => {
//                 this.props.setUserProfile(response.data)
//             })
//     }
//
//     render() {
//         return (
//             <div>
//                 <Profile profile={this.props.profile}/>
//             </div>
//         )
//     }
// }
// export default connect(mapStateToProps,
//     {
//         setUserProfileAC
//     }
//     )(withUrlDataContainerComponent)
