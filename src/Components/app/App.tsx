import React from 'react';
import './App.css'
import NavBar from "../NavBar/NavBar"
import {Route, withRouter} from "react-router-dom"
import UsersContainer from "../Users/Users.container";
import {HeaderContainer} from '../Header/HeaderContainer';
import Music from "../Music/Music";
import Setting from "../Settings/Settings";
import FriendsContainer from "../Friends/Friends.container";
import NewsContainer from "../News/NewsContainer";
import ProfileContainer from "../Profile/Profile.Container";
import DialogsContainer from "../Dialogs/DialogsContainer";
import {Footer} from "../Footer/Footer";
import {LoginContainer} from "../Login/LoginContainer";
import {LinearProgress} from "@material-ui/core";
import {connect} from "react-redux";
import {AppStateType} from "../../Redux/store/reduxStore";
import {compose, Dispatch} from "redux";
import {ErrorSnackBar} from "../ErrorSnackBar/ErrorSnackBar";


class App extends React.Component<AppType> {

    // componentDidMount() {
    //     this.props.initializeAppTC()
    // }

    render() {
        return (
            <div>
                <div className="app-wrapper">
                    <ErrorSnackBar/>
                    <HeaderContainer/>
                    <NavBar/>
                    <div className='app-wrapper-content'>
                        {this.props.isFetching ? <LinearProgress/> : null}
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
}

//types class component
type AppType = {
    isFetching: boolean
    initializeAppTC: () => (dispatch: Dispatch) => void
}

const mapStateToProps = (state: AppStateType) => {
    return {
        isFetching: state.usersPage.isFetching
    }
}
// const mapStateToProps = (dispatch:Dispatch) => {
//     return bindActionCreators({setInitializedSuccess},dispatch)
// }

export default compose<React.ComponentType>(
    withRouter,
    connect(mapStateToProps, null)
)(App)