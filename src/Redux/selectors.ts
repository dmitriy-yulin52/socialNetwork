import {AppStateType} from './reduxStore'


export const selectStateUsersPage = (state:AppStateType)=> state.usersPage
export const selectStateProfilePage = (state:AppStateType)=> state.profilePage
export const selectStateMessagesPage = (state:AppStateType)=> state.messagesPage
export const selectStateAuthPage = (state:AppStateType)=> state.auth
export const selectStatusProfilePage = (state:AppStateType)=> state.profilePage.status