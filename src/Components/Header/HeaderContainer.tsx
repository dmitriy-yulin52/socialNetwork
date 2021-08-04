import React from 'react';
import Header from "./Header";
import axios from "axios";
import {connect} from "react-redux";
import {setAuthUserDataAC, UserDataType} from "../../Redux/auth-reducer";
import {Dispatch} from "redux";
import {AppStateType} from "../../Redux/reduxStore";


type MapStateToPropsType = {
    isAuth:boolean
    login: string | null
}
type MapDispatchToPropsType = {
    setAuthUserData:(data:UserDataType)=> void
}

type HeaderPropsType = MapStateToPropsType & MapDispatchToPropsType

class HeaderContainer extends React.Component<HeaderPropsType> {


    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {
            withCredentials: true
        })
            .then((response) => {
                if(response.data.resultCode === 0){
                    this.props.setAuthUserData(response.data)
                }
            })
    }

    render() {
        return (
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
let mapDispatchToProps = (dispatch:Dispatch) => {
    return {
        setAuthUserData:(data:UserDataType)=>{
            dispatch(setAuthUserDataAC(data))
        }
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(HeaderContainer)