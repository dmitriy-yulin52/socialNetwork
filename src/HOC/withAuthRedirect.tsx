import React, {ComponentType} from 'react'
import {Redirect} from "react-router-dom";
import {connect, useSelector} from "react-redux";
import {selectStateAuthPage} from "../Redux/selectors";
import {ProfilePropsType} from "../Components/Profile/Profile.Container";
import {AppStateType} from "../Redux/reduxStore";


type MapStateToPropsType = {
    isAuth:boolean
}

const mapStateToProps = (state:AppStateType):MapStateToPropsType=> {
    return {
        isAuth: state.auth.isAuth
    }
}

export function withAuthRedirect <T>(Component: ComponentType<T>)  {

    const RedirectComponent = (props: MapStateToPropsType) => {
        const {isAuth, ...restProps} = props
        if (isAuth) {
            return <Redirect to={'/login'}/>
        }
        return <Component {...restProps as T}/>
    }
    let ConnectedRedirectComponent = connect(mapStateToProps)(RedirectComponent)

    return ConnectedRedirectComponent
}