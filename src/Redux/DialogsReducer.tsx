import ReactDOM from "react-dom";
import {v1} from "uuid";
import {ActionTypes, MessageDialogType} from "./store";


export const ADD_MESSAGE = 'ADD-MESSAGE';
export const NEW_MESSAGE_TEXT = 'NEW-MESSAGE-TEXT';

export const dialogsReducer = (state: MessageDialogType, action: ActionTypes)=> {


    switch(action.type) {
        case ADD_MESSAGE:
            const newMessageDialog = {
                id: v1(),
                message: action.newMessage
            }
            state.messages.push(newMessageDialog)
            state.newDialogsMessage = ''
            return state

        case NEW_MESSAGE_TEXT:
            state.newDialogsMessage = action.newMessage
            return state

        default:
            return state
    }

}

export const addMessageActionCreator = (message:string) => {
    return {
        type: ADD_MESSAGE,
        newMessage:message
    }as const
}
export const updateNewMessageCreator = (event:string) => {
    return {
        type: NEW_MESSAGE_TEXT,
        newMessage:event
    }as const
}