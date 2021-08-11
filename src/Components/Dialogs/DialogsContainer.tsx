import React from 'react';
import {
    addMessageActionCreator,
    DialogType,
    localStorageMessageCreator,
    MessageType, RemoveMessageCreator,
    updateNewMessageCreator
} from "../../Redux/DialogsReducer";
import Dialogs from "./Dialogs";
import {AppStateType} from "../../Redux/reduxStore";
import {Dispatch} from 'redux'


export const DialogsContainer = () => {

    return (
        <Dialogs/>
    )
}

type MapStateToPropsType = {
    newDialogsMessage: string
    dialogs: Array<DialogType>
    messages: Array<MessageType>
}
type DispatchStateToPropsType = {
    updateNewMessage: (message: string) => void
    addMessage: (newMessage: string) => void
    localStorageMessage: (messages: Array<MessageType>) => void
    RemoveMessage: (messagesId: string) => void
}

const mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        newDialogsMessage: state.messagesPage.newDialogsMessage,
        dialogs: state.messagesPage.dialogs,
        messages: state.messagesPage.messages,
    }
}

const mapDispatchStateToProps = (dispatch: Dispatch): DispatchStateToPropsType => {
    return {
        updateNewMessage: (message: string) => {
            dispatch(updateNewMessageCreator(message))
        },
        addMessage: (newMessage: string) => {
            dispatch(addMessageActionCreator(newMessage))
        },
        localStorageMessage: (messages: Array<MessageType>) => {
            dispatch(localStorageMessageCreator(messages))
        },
        RemoveMessage: (messagesId: string) => {
            dispatch(RemoveMessageCreator(messagesId))
        }
    }
}

// const DialogsContainer = connect(mapStateToProps, mapDispatchStateToProps)(Dialogs);

// export default DialogsContainer

