import React, {useCallback} from 'react'
import {Login} from "./Login";
import {useDispatch, useSelector} from "react-redux";
import { SetLogin} from "../../Redux/auth-reducer";
import {LinearProgress} from "@material-ui/core";
import {selectStateAuthPage, selectStateUsersPage} from "../../Redux/selectors";


export const LoginContainer = () => {

    const {
        isAuth
    } = useSelector(selectStateAuthPage)

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

