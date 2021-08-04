import React from 'react'
import {combineReducers, createStore} from "redux";
import {profileReducer} from "./ProfileReducer";
import {dialogsReducer} from "./DialogsReducer";
import {usersReducer} from "./users-reducer";
import {authReducer} from "./auth-reducer";


export let rootReducers = combineReducers({
    profilePage:profileReducer,
    messagesPage:dialogsReducer,
    usersPage: usersReducer,
    auth:authReducer,
})

export type AppStateType = ReturnType<typeof rootReducers>


export let store = createStore(rootReducers)

// @ts-ignore
window.store = store


