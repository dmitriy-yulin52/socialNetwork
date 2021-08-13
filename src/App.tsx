import React from 'react';
import './App.css'
import NavBar from "./Components/NavBar/NavBar"
import {Route} from "react-router-dom"
import {UsersContainer} from "./Components/Users/Users.container";
import {WithUrlDataContainerComponent} from "./Components/Profile/Profile.Container";
import {DialogsContainer} from "./Components/Dialogs/DialogsContainer";
import { HeaderContainer } from './Components/Header/HeaderContainer';


const App = React.memo(() => {

    return (
        <div className="app-wrapper">
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
                           <WithUrlDataContainerComponent/>
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
})

export default App;
