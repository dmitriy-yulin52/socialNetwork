import React from 'react'
import {applyMiddleware, combineReducers, createStore} from "redux";
import {profileReducer} from "../Components/Profile/ProfileReducer";
import {dialogsReducer} from "../Components/Dialogs/DialogsReducer";
import {usersReducer} from "../Components/Users/users-reducer";
import {authReducer} from "./auth-reducer";
import ThunkMiddleware from 'redux-thunk'
import {appReducer} from "../Components/app/app-reducer";


export let rootReducers = combineReducers({
    profilePage:profileReducer,
    messagesPage:dialogsReducer,
    usersPage: usersReducer,
    auth:authReducer,
    app:appReducer
})

export type AppStateType = ReturnType<typeof rootReducers>

export let store = createStore(rootReducers,applyMiddleware(ThunkMiddleware))

// @ts-ignore
window.store = store


