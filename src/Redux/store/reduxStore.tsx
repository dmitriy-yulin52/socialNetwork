import React from 'react'
import {applyMiddleware, combineReducers, createStore} from "redux";
import {profileReducer} from "../Profile/ProfileReducer";
import {dialogsReducer} from "../Dialogs/DialogsReducer";
import {usersReducer} from "../Users/users-reducer";
import {authReducer} from "../auth/auth-reducer";
import ThunkMiddleware from 'redux-thunk'
import {appReducer} from "../App/app-reducer";


export let rootReducers = combineReducers({
    profilePage: profileReducer,
    messagesPage: dialogsReducer,
    usersPage: usersReducer,
    auth: authReducer,
    app: appReducer,
})

export type AppStateType = ReturnType<typeof rootReducers>

export let store = createStore(rootReducers, applyMiddleware(ThunkMiddleware))

// @ts-ignore
window.store = store


