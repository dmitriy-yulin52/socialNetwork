import React from 'react';
import {StoreType} from "../../Redux/store";
import {addMessageActionCreator, updateNewMessageCreator} from "../../Redux/DialogsReducer";
import Dialogs from "./Dialogs";
import StoreContext from "../../StoreContext";


// type PropsType = {
//     store: StoreType
// }


export const DialogsContainer= () => {
    // const {store} = props
    // const state = store.getState()
    //
    //
    // const updateNewMessage = (event: string) => {
    //     const action = updateNewMessageCreator(event)
    //     store.dispatch(action)
    // }
    // const addMessage = (message: string) => {
    //     const action = addMessageActionCreator(message)
    //     store.dispatch(action)
    // }


    return (

        <StoreContext.Consumer>
            {(store) => {
            const state = store.getState()
            const updateNewMessage = (event: string) => {
                const action = updateNewMessageCreator(event)
                store.dispatch(action)
            }
            const addMessage = (message: string) => {
                const action = addMessageActionCreator(message)
                store.dispatch(action)
            }


            return (
                <Dialogs
                    updateNewMessage={updateNewMessage}
                    addMessage={addMessage}
                    newDialogsMessage={state.messagesPage.newDialogsMessage}
                    messagesPage={state.messagesPage}
                />
            )
        }}

        </StoreContext.Consumer>
    )
}

