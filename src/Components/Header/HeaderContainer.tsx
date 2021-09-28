import React, {useCallback} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {AppStateType} from "../../Redux/reduxStore";
import {HeaderCopy} from "./HeaderCopy";
import Header from "./Header";
import {LinearProgress} from "@material-ui/core";
import {logout} from "../../Redux/auth-reducer";


export const HeaderContainer = React.memo(() => {

    const selector = (state: AppStateType) => state.auth
    const {
        isAuth,
        login,
    } = useSelector(selector)

    const dispatch = useDispatch()

    const logOutSystem = useCallback(()=> {
        dispatch(logout())
    },[])
    return (
            <Header
                isAuth={isAuth}
                login={login}
                logout={logOutSystem}
            />
    )
})


// type MapStateToPropsType = {
//     isAuth:boolean
//     login: string | null
// }
// type MapDispatchToPropsType = {
//     setAuthUserData:(data:UserDataType)=> void
// }
//
// type HeaderPropsType = MapStateToPropsType
//
// class HeaderContainer extends React.Component<HeaderPropsType> {
//
//     componentDidMount() {
//         getAuthUserDataThunkCreator()
//     }
//     render() {
//         return (
//             <HeaderCopy {...this.props}/>
//             // <Header {...this.props}/>
//         )
//
//     }
// }
//
// let mapStateToProps = (state:AppStateType) => {
//     return {
//         isAuth:state.auth.isAuth,
//         login:state.auth.data.login
//     }
// }
//
// // let mapDispatchToProps = (dispatch:Dispatch) => {
// //     return {
// //         setAuthUserData:(data:UserDataType)=>{
// //             dispatch(setAuthUserDataAC(data))
// //         }
// //     }
// // }
//
//
// export default connect(mapStateToProps)(HeaderContainer)