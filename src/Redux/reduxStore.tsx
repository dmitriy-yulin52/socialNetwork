import React from 'react'
import {combineReducers, createStore} from "redux";
import {profileReducer} from "./ProfileReducer";
import {dialogsReducer} from "./DialogsReducer";


export let rootReducers = combineReducers({
    profilePage:profileReducer,
    messagesPage:dialogsReducer
})

export type AppStateType = ReturnType<typeof rootReducers>

export let store = createStore(rootReducers)


