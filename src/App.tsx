import React from 'react';
import logo from './logo.svg';
import './App.css'
import Header from "./Components/Header/Header"
import NavBar from "./Components/NavBar/NavBar"
import Profile from "./Components/Profile/Profile"
import Dialogs from "./Components/Dialogs/Dialogs"
import {BrowserRouter, Route} from "react-router-dom"
import Music from "./Components/Music/Music"
import News from "./Components/News/News"
import Setting from "./Components/Settings/Settings"
import {StateType, StoreType} from "./Redux/state";
import Friends from "./Components/Friends/Friends"


export type PropsType = {
    store: StoreType
    dispatch:(action:any)=> void
}


const App: React.FC<PropsType> = (props) => {

    const {store,dispatch} = props

    const state = store.getState()
    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header/>
                <NavBar/>
                <div className='app-wrapper-content'>
                    <Route path='/dialogs'
                           render={() =>
                               <Dialogs
                                   messages={state.messagesPage.messages}
                                   dialogs={state.messagesPage.dialogs}
                                   dispatch={dispatch}
                                   messagesText={state.messagesPage.newDialogsMessage}
                               />}
                    />
                    <Route path='/profile'
                           render={() =>
                               <Profile
                                   profilePage={state.profilePage}
                                   dispatch={dispatch}
                               />}
                    />
                    <Route path='/news' render={() => <News/>}/>
                    <Route path='/music' render={() => <Music/>}/>
                    <Route path='/settings' render={() => <Setting/>}/>
                    <Route path='/friends' render={() => <Friends/>}/>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
