import React, {useCallback} from 'react'
import {Login} from "./Login";
import {useDispatch, useSelector} from "react-redux";
import { SetLogin} from "../../Redux/auth/auth-reducer";
import {selectStateAuthPage} from "../../Redux/selectors";


export const LoginContainer = () => {

    const {
        isAuth,
        captchaUrl,
    } = useSelector(selectStateAuthPage)



    const dispatch = useDispatch()

    const setLogin = useCallback((email: string, password: string, rememberMe: boolean) => {
        dispatch(SetLogin(email, password, rememberMe))
    }, [])


    return (
        <>
            <Login
                setLogin={setLogin}
                isAuth={isAuth}
            />
        </>
    )
}

