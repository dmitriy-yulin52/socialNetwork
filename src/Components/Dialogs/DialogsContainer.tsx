import React from 'react';
import {
    addMessageActionCreator,
    DialogType,
    localStorageMessageCreator,
    MessageType, RemoveMessageCreator,
    updateNewMessageCreator
} from "../../Redux/DialogsReducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {AppStateType} from "../../Redux/reduxStore";
import {Dispatch} from 'redux'


// type PropsType = {
//     store: StoreType
// }
// export const DialogsContainer= () => {
//     // const {store} = props
//     // const state = store.getState()
//     //
//     //
//     // const updateNewMessage = (event: string) => {
//     //     const action = updateNewMessageCreator(event)
//     //     store.dispatch(action)
//     // }
//     // const addMessage = (message: string) => {
//     //     const action = addMessageActionCreator(message)
//     //     store.dispatch(action)
//     // }
//
//
//     return (
//
//         <StoreContext.Consumer>
//             {(store) => {
//             const state = store.getState()
//             const updateNewMessage = (event: string) => {
//                 const action = updateNewMessageCreator(event)
//                 store.dispatch(action)
//             }
//             const addMessage = (message: string) => {
//                 const action = addMessageActionCreator(message)
//                 store.dispatch(action)
//             }
//
//
//             return (
//                 <Dialogs
//                     updateNewMessage={updateNewMessage}
//                     addMessage={addMessage}
//                     newDialogsMessage={state.messagesPage.newDialogsMessage}
//                     messagesPage={state.messagesPage}
//                 />
//             )
//         }}
//
//         </StoreContext.Consumer>
//     )
// }


type MapStateToPropsType = {
    newDialogsMessage: string
    dialogs: Array<DialogType>
    messages: Array<MessageType>
}
type DispatchStateToPropsType = {
    updateNewMessage:(message: string)=> void
    addMessage:(newMessage: string)=> void
    localStorageMessage:(messages:Array<MessageType>)=>void
    RemoveMessage:(messagesId:string)=>void
}

const mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        newDialogsMessage: state.messagesPage.newDialogsMessage,
        dialogs: state.messagesPage.dialogs,
        messages: state.messagesPage.messages,
    }
}

const mapDispatchStateToProps = (dispatch: Dispatch):DispatchStateToPropsType => {
    return {
        updateNewMessage: (message: string) => {
            dispatch(updateNewMessageCreator(message))
        },
        addMessage: (newMessage: string) => {
            dispatch(addMessageActionCreator(newMessage))
        },
        localStorageMessage:(messages:Array<MessageType>)=>{
            dispatch(localStorageMessageCreator(messages))
        },
        RemoveMessage:(messagesId:string)=>{
            dispatch(RemoveMessageCreator(messagesId))
        }
    }
}

const DialogsContainer = connect(mapStateToProps, mapDispatchStateToProps)(Dialogs);

export default DialogsContainer

