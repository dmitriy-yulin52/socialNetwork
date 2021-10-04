import React from 'react';
import './App.css'
import NavBar from "../NavBar/NavBar"
import {Redirect, Route, withRouter} from "react-router-dom"
import UsersContainer from "../Users/Users.container";
import {HeaderContainer} from '../Header/HeaderContainer';
import Music from "../Music/Music";
import Setting from "../Settings/Settings";
import FriendsContainer from "../Friends/Friends.container";
import NewsContainer from "../News/NewsContainer";
import ProfileContainer from "../Profile/Profile.Container";
import DialogsContainer from "../Dialogs/DialogsContainer";
import {ErrorSnackBar} from "../SnackBar/ErrorSnackBar";
import {Footer} from "../Footer/Footer";
import {LoginContainer} from "../Login/LoginContainer";
import {LinearProgress} from "@material-ui/core";
import {useSelector} from "react-redux";
import {selectStateUsersPage} from "../../Redux/selectors";



export const App = () => {
    const {
        isFetching,
    } = useSelector(selectStateUsersPage)

    return (
        <div>
            <div className="app-wrapper">
                <ErrorSnackBar/>
                <HeaderContainer/>
                <NavBar/>
                <div className='app-wrapper-content'>
                    {isFetching ? <LinearProgress /> : null}
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
                    <Route path='/login' render={() => <LoginContainer/>}/>
                </div>

            </div>
            <Footer/>
        </div>
    );
}


