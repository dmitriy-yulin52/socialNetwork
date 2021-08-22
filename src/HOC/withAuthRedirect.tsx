import React from 'react'
import {Redirect} from "react-router-dom";
import {useSelector} from "react-redux";
import {selectStateAuthPage} from "../Redux/selectors";
import {ProfilePropsType} from "../Components/Profile/Profile.Container";


export const withAuthRedirect = (Component: any) => {


    const RedirectComponent = (props: ProfilePropsType) => {
        const {isAuth} = useSelector(selectStateAuthPage)
        if (!isAuth) {
            return <Redirect to={'/login'}/>
        }
        return <Component value={100} {...props}/>
    }
    return RedirectComponent
}