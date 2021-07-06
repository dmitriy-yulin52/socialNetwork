import {v1} from "uuid";


export type PostType = {
    id: string
    message: string
    like: number
    time: number
}
export type MessagesDataType = {
    id: string
    message: string
}
export type DialogsData = {
    id: string
    name: string
}
export type ProfilePostsType = {
    messageForNewPost: string
    posts: Array<PostType>
}
type MessageDialogType = {
    messages: Array<MessagesDataType>
    dialogs: Array<DialogsData>
    newDialogsMessage: string
}
export type StateType = {
    profilePage: ProfilePostsType
    messagesPage: MessageDialogType
}
export type StoreType = {
    _state: StateType
    newPost: (postText: string) => void
    newTextChangeHandler: (newText: string) => void
    newDialogs: (newMessage: string) => void
    _onChange: () => void
    subscribe: (callBack: () => void) => void
    getState: () => StateType
    dispatch: (action: any) => void
}

export const store: StoreType = {
    _state: {
        profilePage: {
            messageForNewPost: '',
            posts: [
                {id: v1(), message: 'Hi, how are you', like: 4, time: 7},
                {id: v1(), message: 'It,s my first post', like: 22, time: 19},
                {id: v1(), message: 'yo', like: 14, time: 12},
                {id: v1(), message: 'it-camasutra', like: 11, time: 90}
            ],
        },
        messagesPage: {
            newDialogsMessage: '',
            dialogs: [
                {id: v1(), name: 'dmitriy'},
                {id: v1(), name: 'vicroriy'},
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
    },
    _onChange() {
        console.log('hello')
    },

    getState() {
        return this._state
    },
    subscribe(callBack) {
        this._onChange = callBack
    },
    newPost(postText) {
        const newPost: PostType = {
            id: v1(),
            message: postText,
            like: 14,
            time: 22
        }
        this._state.profilePage.posts.unshift(newPost);
        this._onChange()
    },
    newTextChangeHandler(newText) {
        this._state.profilePage.messageForNewPost = newText
        this._onChange()
    },
    newDialogs(newMessage) {
        const newDialog: MessagesDataType = {
            id: v1(),
            message: newMessage
        }
        this._state.messagesPage.messages.push(newDialog);
        this._onChange()
    },
    dispatch(action) {
        if (action.type === 'ADD-POST') {
            const newPost: PostType = {
                id: v1(),
                message: action.postText,
                like: 14,
                time: 22
            }
            this._state.profilePage.posts.unshift(newPost);
            this._state.profilePage.messageForNewPost = ''
            this._onChange()

        } else if (action.type === 'UPDATE-NEW-POST-TEXT') {
            this._state.profilePage.messageForNewPost = action.newText
            this._onChange()

        } else if(action.type === 'ADD-MESSAGE'){
            const newMessageDialog = {
                id: v1(),
                message: action.newMessage
            }
            this._state.messagesPage.messages.push(newMessageDialog)
            this._state.messagesPage.newDialogsMessage = ''
            this._onChange()

        } else if(action.type === 'NEW-MESSAGE-TEXT') {
            this._state.messagesPage.newDialogsMessage = action.newMessage
            this._onChange()
        }
    }
}


