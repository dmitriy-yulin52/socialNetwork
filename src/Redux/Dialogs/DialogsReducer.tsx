import {v1} from "uuid";


export enum ACTION_TYPE_TYPE {
    ADD_MESSAGE = 'ADD-MESSAGE',
    REMOVE_MESSAGE = 'REMOVE-MESSAGE'
}

export type DialogType = {
    id: string
    name: string
}
export type MessageType = {
    id: string
    message: string
}
export type InitialStateDialogsType = {
    dialogs: Array<DialogType>
    messages: Array<MessageType>
}

type AddMessageType = {
    type: ACTION_TYPE_TYPE.ADD_MESSAGE,
    newMessage: string,
}

type RemoveMessage = {
    type: ACTION_TYPE_TYPE.REMOVE_MESSAGE,
    messagesId: string,
}

export type ActionACTypes =
    AddMessageType
    | RemoveMessage


const initialStateDialogs: InitialStateDialogsType = {

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


export const dialogsReducer = (state: InitialStateDialogsType = initialStateDialogs, action: ActionACTypes) => {

    switch (action.type) {
        case ACTION_TYPE_TYPE.ADD_MESSAGE:
            return {
                ...state,
                messages: [
                    ...state.messages,
                    {id: v1(), message: action.newMessage}
                ]
            }

        case ACTION_TYPE_TYPE.REMOVE_MESSAGE:
            return {...state, messages: state.messages.filter(el => el.id !== action.messagesId)}

        default:
            return state
    }

}

export const addMessageActionCreator = (message: string): AddMessageType => {
    return {
        type: ACTION_TYPE_TYPE.ADD_MESSAGE,
        newMessage: message
    }
}

export const RemoveMessageCreator = (messagesId: string): RemoveMessage => {
    return {
        type: ACTION_TYPE_TYPE.REMOVE_MESSAGE,
        messagesId
    }
}
