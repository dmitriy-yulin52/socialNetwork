import {v1} from "uuid";


const ADD_MESSAGE = 'ADD-MESSAGE';
const NEW_MESSAGE_TEXT = 'NEW-MESSAGE-TEXT';

export type DialogType = {
    id: string
    name: string
}
export type MessageType = {
    id: string
    message: string
}
type InitialStateType = {
    newDialogsMessage: string
    dialogs: Array<DialogType>
    messages: Array<MessageType>
}

export type ActionTypes =
    ReturnType<typeof addMessageActionCreator>
    | ReturnType<typeof updateNewMessageCreator>

const initialState = {
        newDialogsMessage: '',
        dialogs: [
            {id: v1(), name: 'dmitriy'},
            {id: v1(), name: 'vicrory'},
            {id: v1(), name: 'sasha'},
            {id: v1(), name: 'leonid'},
            {id: v1(), name: 'victor'},
            {id: v1(), name: 'john'},
            {id: v1(), name: 'dddd'}

        ],
        messages: [
            {id: v1(), message: 'hello'},
            {id: v1(), message: 'hi'},
            {id: v1(), message: 'yo'}
        ]
}


export const dialogsReducer = (state: InitialStateType = initialState, action: ActionTypes)=> {

    switch(action.type) {
        case ADD_MESSAGE:
            return {
                ...state,
                newDialogsMessage: '',
                messages: [
                    ...state.messages,
                    {id: v1(), message: action.newMessage}
                ]
            }
            // const newMessageDialog = {
            //     id: v1(),
            //     message: action.newMessage
            // }
            // state.messages.push(newMessageDialog)
            // state.newDialogsMessage = ''
            // return state

        case NEW_MESSAGE_TEXT:
            return {
                ...state,
                newDialogsMessage: action.newMessage
            }
            // state.newDialogsMessage = action.newMessage
            // return state
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