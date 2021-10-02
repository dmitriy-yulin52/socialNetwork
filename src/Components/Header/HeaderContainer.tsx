import React, {useCallback} from 'react';
import {useDispatch, useSelector} from "react-redux";
import Header from "./Header";
import {logout} from "../../Redux/auth-reducer";
import {selectStateAuthPage} from "../../Redux/selectors";


export const HeaderContainer = () => {

    const {
        isAuth,
        login,
    } = useSelector(selectStateAuthPage)

    const dispatch = useDispatch()

    const logoutSystem = useCallback(()=> {
        dispatch(logout())
    },[])
    return (
            <Header
                isAuth={isAuth}
                login={login}
                logout={logoutSystem}
            />
    )
}


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