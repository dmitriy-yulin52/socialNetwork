import React, {useCallback} from 'react';
import {
    addMessageActionCreator,
    InitialStateDialogsType, RemoveMessageCreator,
} from "../../Redux/Dialogs/DialogsReducer";
import Dialogs from "./Dialogs";
import {AppStateType} from "../../Redux/store/reduxStore";
import {compose,} from 'redux'
import {useDispatch, useSelector} from "react-redux";
import {selectStateMessagesPage} from "../../Redux/selectors";
import {withAuthRedirect} from "../../HOC/withAuthRedirect";
import {MessageType} from "../Form/DialogsForm/AddMessageForm";



const DialogsContainer = React.memo(() => {

    const messagesPage = useSelector<AppStateType, InitialStateDialogsType>(selectStateMessagesPage)
    const dispatch = useDispatch()

    const addMessage = useCallback((data:MessageType) => {
        dispatch(addMessageActionCreator(data.message))
    }, [dispatch])

    const removeMessage = useCallback((id: string) => {
        dispatch(RemoveMessageCreator(id))
    }, [dispatch])

    return (
        <Dialogs
            stateMessagesPage={messagesPage}
            addMessage={addMessage}
            removeMessage={removeMessage}
        />
    )
})


export default compose<React.ComponentType>(withAuthRedirect)(DialogsContainer)



// export const DialogsContainerComponent = withAuthRedirect(DialogsContainer)

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

