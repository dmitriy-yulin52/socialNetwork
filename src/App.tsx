import React from 'react';
import './App.css'
import Header from "./Components/Header/Header"
import NavBar from "./Components/NavBar/NavBar"
import {Route} from "react-router-dom"
import DialogsContainer from "./Components/Dialogs/DialogsContainer";
import {UsersContainer} from "./Components/Users/Users.container";
import  ProfileContainer  from './Components/Profile/Profile.Container';


const App = () => {


    return (
        <div className="app-wrapper">
            <Header/>
            <NavBar/>
            <div className='app-wrapper-content'>
                <Route path='/dialogs'
                       render={() =>
                           <DialogsContainer
                               // store={store}
                           />}
                />
                <Route path='/profile/:userId?'
                       render={() =>
                           <ProfileContainer/>
                       }
                />
                <Route path='/users'
                       render={ () => <UsersContainer/>}
                />
                {/*<Route path='/news' render={() => <News/>}/>*/}
                {/*<Route path='/music' render={() => <Music/>}/>*/}
                {/*<Route path='/settings' render={() => <Setting/>}/>*/}
                {/*<Route path='/friends' render={() => <Friends/>}/>*/}
            </div>
        </div>
    );
}

export default App;
