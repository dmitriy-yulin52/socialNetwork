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
import {StateType} from "./Redux/state";

export type PropsType = {
    state: StateType
}



const App:React.FC <PropsType> = (props) => {
    const {state} = props
    debugger;
    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header/>
                <NavBar/>
                <div className='app-wrapper-content'>
                    {/*<Route path='/dialogs' component={SomeComponent1}/>*/}
                    {/*<Route path='/profile' component={SomeComponent2}/>*/}
                    {/*<Route path='/news' component={SomeComponent3}/>*/}
                    {/*<Route path='/music' component={SomeComponent4}/>*/}
                    {/*<Route path='/settings' component={SomeComponent5}/>*/}

                    <Route path='/dialogs' render={()=> <Dialogs messages={props.state.messagesPage.messages} dialogs={props.state.messagesPage.dialogs}/>}/>
                    <Route path='/profile' render={()=> <Profile profilePage={props.state.profilePage}/>}/>
                    <Route path='/news' render={()=> <News/>}/>
                    <Route path='/music' render={()=> <Music/>}/>
                    <Route path='/settings' render={()=> <Setting/>}/>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
