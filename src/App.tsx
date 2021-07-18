import React from 'react';
import './App.css'
import Header from "./Components/Header/Header"
import NavBar from "./Components/NavBar/NavBar"
import Profile from "./Components/Profile/Profile"
import {Route} from "react-router-dom"
import Music from "./Components/Music/Music"
import News from "./Components/News/News"
import Setting from "./Components/Settings/Settings"
import Friends from "./Components/Friends/Friends"
import DialogsContainer from "./Components/Dialogs/DialogsContainer";
import {UsersContainer} from "./Components/Users/Users.container";


// export type PropsType = {
//     // store: StoreType
// }


const App = () => {

    // const {store} = props

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
                <Route path='/profile'
                       render={() =>
                           <Profile
                               // store={store}
                           />}
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
