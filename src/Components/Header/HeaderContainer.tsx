import React from 'react';
import Header from "./Header";
import {connect} from "react-redux";
import {getAuthUserDataThunkCreator} from "../../Redux/auth-reducer";
import {AppStateType} from "../../Redux/reduxStore";
import HeaderCopy from "./HeaderCopy";


type MapStateToPropsType = {
    isAuth:boolean
    login: string | null
}
// type MapDispatchToPropsType = {
//     setAuthUserData:(data:UserDataType)=> void
// }

type HeaderPropsType = MapStateToPropsType

class HeaderContainer extends React.Component<HeaderPropsType> {

    componentDidMount() {
        getAuthUserDataThunkCreator()
    }
    render() {
        return (
            // <HeaderCopy {...this.props}/>
            <Header {...this.props}/>
        )

    }
}

let mapStateToProps = (state:AppStateType) => {
    return {
        isAuth:state.auth.isAuth,
        login:state.auth.data.login
    }
}

// let mapDispatchToProps = (dispatch:Dispatch) => {
//     return {
//         setAuthUserData:(data:UserDataType)=>{
//             dispatch(setAuthUserDataAC(data))
//         }
//     }
// }


export default connect(mapStateToProps)(HeaderContainer)