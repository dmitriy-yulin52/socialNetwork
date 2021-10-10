import React, {useCallback} from 'react'
import {Login} from "./Login";
import {useDispatch, useSelector} from "react-redux";
import {SetLogin} from "../../Redux/auth/auth-reducer";
import {selectStateAuthPage} from "../../Redux/selectors";


export const LoginContainer = () => {

    const {
        isAuth,
        captchaUrl,
    } = useSelector(selectStateAuthPage)


    const dispatch = useDispatch()

    const setLogin = useCallback((email: string, password: string, rememberMe: boolean, captchaUrl: string | null) => {
        dispatch(SetLogin(email, password, rememberMe, captchaUrl))
    }, [])


    return (
        <>
            <Login
                setLogin={setLogin}
                isAuth={isAuth}
                captchaUrl={captchaUrl}
            />
        </>
    )
}

