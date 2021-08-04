import React, {useEffect} from 'react';
import Profile from "./Profile";
import {useDispatch, useSelector} from "react-redux";
import {ActionTypeAC, setUserProfileAC} from "../../Redux/ProfileReducer";
import {RouteComponentProps, withRouter} from 'react-router-dom';
import axios from "axios";
import {Dispatch} from "redux";
import {selectStateProfilePage} from "../../Redux/selectors";


type PathParamsType = {
    userId: string,
}
type ProfilePropsType = RouteComponentProps<PathParamsType>


function ProfileContainer (props:ProfilePropsType){

    const {profile} = useSelector(selectStateProfilePage)
    const dispatch = useDispatch<Dispatch<ActionTypeAC>>()

    useEffect(()=> {
        let userid = props.match.params.userId
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/` + userid)
            .then(response => {
                dispatch(setUserProfileAC(response.data))
            })
    },[])
    return (
        <div>
            <Profile profile={profile}/>
        </div>
    )


}



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
