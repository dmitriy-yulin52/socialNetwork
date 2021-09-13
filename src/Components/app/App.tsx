import React from 'react';
import './App.css'
import NavBar from "../NavBar/NavBar"
import {Route} from "react-router-dom"
import UsersContainer from "../Users/Users.container";
import {HeaderContainer} from '../Header/HeaderContainer';
import Music from "../Music/Music";
import Setting from "../Settings/Settings";
import {FriendsContainer} from "../Friends/Friends.container";
import {NewsContainer} from "../News/NewsContainer";
import {Login} from "../Login/Login";
import ProfileContainer from "../Profile/Profile.Container";
import DialogsContainer from "../Dialogs/DialogsContainer";
import {ErrorSnackBar} from "../SnackBar/ErrorSnackBar";
import {Footer} from "../Footer/Footer";


const App = React.memo(() => {
    return (
        <div>
            <div className="app-wrapper">
                <ErrorSnackBar/>
                <HeaderContainer/>
                <NavBar/>
                <div className='app-wrapper-content'>
                    <Route path='/dialogs'
                           render={() =>
                               <DialogsContainer
                               />}
                    />
                    <Route path='/profile/:userId?'
                           render={() =>
                               <ProfileContainer/>
                           }
                    />
                    <Route path='/users'
                           render={() => <UsersContainer/>}
                    />
                    <Route path='/news' render={() => <NewsContainer/>}/>
                    <Route path='/music' render={() => <Music/>}/>
                    <Route path='/settings' render={() => <Setting/>}/>
                    <Route path='/friends' render={() => <FriendsContainer/>}/>
                    <Route path='/login' render={() => <Login/>}/>
                </div>

            </div>
            <Footer/>
        </div>
    );
})

export default App;
