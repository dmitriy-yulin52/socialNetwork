import React, {useCallback} from 'react'
import {Login} from "./Login";
import {useDispatch} from "react-redux";
import {SetLogin} from "../../Redux/auth-reducer";





export const LoginContainer = ()=>{

    const dispatch = useDispatch()

    const setLogin = useCallback((email: string, password: string, rememberMe: boolean)=> {
        dispatch(SetLogin(email,password,rememberMe))
    },[])

    return (
        <Login setLogin={setLogin}/>
    )
}