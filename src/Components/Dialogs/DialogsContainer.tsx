import React, {useCallback} from 'react';
import {
    ActionACTypes,
    addMessageActionCreator,
    InitialStateDialogsType,
    updateNewMessageCreator
} from "../../Redux/DialogsReducer";
import Dialogs from "./Dialogs";
import {AppStateType} from "../../Redux/reduxStore";
import {Dispatch} from 'redux'
import {useDispatch, useSelector} from "react-redux";
import {selectStateMessagesPage} from "../../Redux/selectors";


export const DialogsContainer = React.memo(() => {

    const messagesPage = useSelector<AppStateType, InitialStateDialogsType>(selectStateMessagesPage)
    const dispatch = useDispatch<Dispatch<ActionACTypes>>()


    const updateMessage = useCallback((updMessage: string) => {
        dispatch(updateNewMessageCreator(updMessage))
    }, [updateNewMessageCreator])

    const addMessage = useCallback((message: string) => {
        dispatch(addMessageActionCreator(message))
    }, [addMessageActionCreator])

    return (
        <Dialogs
            stateMessagesPage={messagesPage}
            addMessage={addMessage}
            updateMessage={updateMessage}
        />
    )
})




// type MapStateToPropsType = {
//     newDialogsMessage: string
//     dialogs: Array<DialogType>
//     messages: Array<MessageType>
// }
// type DispatchStateToPropsType = {
//     updateNewMessage: (message: string) => void
//     addMessage: (newMessage: string) => void
//     localStorageMessage: (messages: Array<MessageType>) => void
//     RemoveMessage: (messagesId: string) => void
// }
//
// const mapStateToProps = (state: AppStateType): MapStateToPropsType => {
//     return {
//         newDialogsMessage: state.messagesPage.newDialogsMessage,
//         dialogs: state.messagesPage.dialogs,
//         messages: state.messagesPage.messages,
//     }
// }
//
// const mapDispatchStateToProps = (dispatch: Dispatch): DispatchStateToPropsType => {
//     return {
//         updateNewMessage: (message: string) => {
//             dispatch(updateNewMessageCreator(message))
//         },
//         addMessage: (newMessage: string) => {
//             dispatch(addMessageActionCreator(newMessage))
//         },
//         localStorageMessage: (messages: Array<MessageType>) => {
//             dispatch(localStorageMessageCreator(messages))
//         },
//         RemoveMessage: (messagesId: string) => {
//             dispatch(RemoveMessageCreator(messagesId))
//         }
//     }
// }
//
// const DialogsContainer = connect(mapStateToProps, mapDispatchStateToProps)(Dialogs);
//
// export default DialogsContainer

