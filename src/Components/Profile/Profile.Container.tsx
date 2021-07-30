import React, {useEffect} from 'react';
import Profile from "./Profile";
import axios from "axios";
import {connect} from "react-redux";
import {AppStateType} from "../../Redux/reduxStore";
import {ProfileType, setUserProfile} from "../../Redux/ProfileReducer";
import {RouteComponentProps, withRouter} from 'react-router-dom';


type PathParamsType = {
    userId: string,
}

export type MapStateToProps = {
    profile: ProfileType
}
type MapDispatchToProps = {
    setUserProfile: (profile: ProfileType) => void
}

type OwnPropsType = MapStateToProps & MapDispatchToProps
type ProfilePropsType = RouteComponentProps<PathParamsType> & OwnPropsType

// class ProfileContainerClass extends React.Component<ProfilePropsType> {
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

function ProfileContainer (props:ProfilePropsType){

    useEffect(() => {
        let userId = props.match.params.userId
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/2`)
            .then(response => {
                props.setUserProfile(response.data)
            })
    }, [])

    return (
        <div>
            <Profile profile={props.profile}/>
        </div>
    )


}


let mapStateToProps = (state: AppStateType): MapStateToProps => {
    return {
        profile: state.profilePage.profile
    }
}


let withUrlDataContainerComponent = withRouter(ProfileContainer)

export default connect(mapStateToProps, {setUserProfile})(withUrlDataContainerComponent)
