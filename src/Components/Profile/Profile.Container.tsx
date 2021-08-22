import React, {useEffect} from 'react';
import {Profile} from "./Profile";
import {useDispatch, useSelector} from "react-redux";
import {getUserProfileThunkCreator} from "../../Redux/ProfileReducer";
import {Redirect, RouteComponentProps, withRouter} from 'react-router-dom';
import {selectStateAuthPage, selectStateProfilePage} from "../../Redux/selectors";


export type PathParamsType = {
    userId: string,
}
export type ProfilePropsType = RouteComponentProps<PathParamsType>

const ProfileContainer = React.memo((props: ProfilePropsType) => {

    const {profile} = useSelector(selectStateProfilePage)
    const {isAuth} = useSelector(selectStateAuthPage)
    const dispatch = useDispatch()

    useEffect(() => {
        let userId = props.match.params.userId
        if (userId === undefined) {
            userId = '2'
        }
        dispatch(getUserProfileThunkCreator(userId))
    }, [getUserProfileThunkCreator])



    return (
        <div>
            <Profile
                profile={profile}
                isAuth={isAuth}
            />
        </div>
    )
})

export let WithUrlDataContainerComponent = withRouter(ProfileContainer)


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
