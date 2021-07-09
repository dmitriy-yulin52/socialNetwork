import React from 'react'
import {combineReducers, createStore} from "redux";
import {profileReducer} from "./ProfileReducer";
import {dialogsReducer} from "./DialogsReducer";


let reducers = combineReducers({
    profilePage:profileReducer,
    messagesPage:dialogsReducer
})
export let store = createStore(reducers)