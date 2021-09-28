import React, {useCallback} from 'react'
import {Login} from "./Login";
import {useDispatch, useSelector} from "react-redux";
import {logout, SetLogin} from "../../Redux/auth-reducer";
import {AppStateType} from "../../Redux/reduxStore";
import {LinearProgress} from "@material-ui/core";
import {selectStateUsersPage} from "../../Redux/selectors";


export const LoginContainer = () => {

    const selector = (state: AppStateType) => state.auth
    const {
        isAuth
    } = useSelector(selector)

    const {
        isFetching
    }= useSelector(selectStateUsersPage)

    const dispatch = useDispatch()

    const setLogin = useCallback((email: string, password: string, rememberMe: boolean) => {
        dispatch(SetLogin(email, password, rememberMe))
    }, [])


    return (
        <>
            {isFetching ? <LinearProgress /> : null}
            <Login
                setLogin={setLogin}
                isAuth={isAuth}
            />
        </>
    )
}

