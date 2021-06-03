export type PropsPostType = {
    id: number
    message: string
    like: number
    time: number
}

export type MessagesDataType = {
    id: number
    message: string
}

export type DialogsData = {
    id: number
    name: string
}


type MessageDialogType = {
    messages: Array<MessagesDataType>
    dialogs: Array<DialogsData>
}

export type StateType = {
    profilePage: Array<PropsPostType>
    messagesPage: MessageDialogType
}
export let state = {
    profilePage: [
        {id: 1, message: 'Hi, how are you', like: 4, time: 7},
        {id: 2, message: 'It,s my first post', like: 22, time: 19},
        {id: 3, message: 'yo', like: 14, time: 12},
        {id: 4, message: 'it-camasutra', like: 11, time: 90}
    ],
    messagesPage: {
        dialogs: [
            {id: 1, name: 'dmitriy'},
            {id: 2, name: 'vicrotiy'},
            {id: 3, name: 'sasha'},
            {id: 4, name: 'leonid'},
            {id: 5, name: 'victor'},
            {id: 6, name: 'john'}

        ],
        messages: [
            {id: 1, message: 'hello'},
            {id: 2, message: 'hi'},
            {id: 3, message: 'yo'}
        ]
    }
}

