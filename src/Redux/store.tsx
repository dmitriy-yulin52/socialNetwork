import {v1} from "uuid";
import {
    addPostActionCreator,
    profileReducer,
    updateNewPostTextActionCreator
} from '../Components/Profile/ProfileReducer';
import {
    addMessageActionCreator,
    dialogsReducer,
} from '../Components/Dialogs/DialogsReducer';


// export type PostType = {
//     id: string
//     message: string
//     like: number
//     time: number
// }
// export type MessagesDataType = {
//     id: string
//     message: string
// }
// export type DialogsData = {
//     id: string
//     name: string
// }
// export type ProfilePostsType = {
//     messageForNewPost: string
//     posts: Array<PostType>
// }
// export type MessageDialogType = {
//     messages: Array<MessagesDataType>
//     dialogs: Array<DialogsData>
//     newDialogsMessage: string
// }
// export type StateType = {
//     profilePage: ProfilePostsType
//     messagesPage: MessageDialogType
// }
// export type StoreType = {
//     _state: StateType
//     _onChange: () => void
//     subscribe: (callBack: () => void) => void
//     getState: () => StateType
//     dispatch: (action: ActionTypes) => void
// }


// export type ActionTypes =
//     ReturnType<typeof addPostActionCreator>
//     | ReturnType<typeof updateNewPostTextActionCreator>
//     | ReturnType<typeof addMessageActionCreator>
//     | ReturnType<typeof updateNewMessageCreator>


// export const store = {
//     _state: {
//         profilePage: {
//             messageForNewPost: '',
//             posts: [
//                 {id: v1(), message: 'Hi, how are you', like: 4, time: 7},
//                 {id: v1(), message: 'It,s my first post', like: 22, time: 19},
//                 {id: v1(), message: 'yo', like: 14, time: 12},
//                 {id: v1(), message: 'it-camasutra', like: 11, time: 90}
//             ],
//         },
//         messagesPage: {
//             newDialogsMessage: '',
//             dialogs: [
//                 {id: v1(), name: 'dmitriy'},
//                 {id: v1(), name: 'vicrory'},
//                 {id: v1(), name: 'sasha'},
//                 {id: v1(), name: 'leonid'},
//                 {id: v1(), name: 'victor'},
//                 {id: v1(), name: 'john'},
//                 {id: v1(), name: 'dddd'}
//
//             ],
//             messages: [
//                 {id: v1(), message: 'hello'},
//                 {id: v1(), message: 'hi'},
//                 {id: v1(), message: 'yo'}
//             ]
//         }
//     },
//     _onChange() {
//         console.log('hello')
//     },
//     getState() {
//         return this._state
//     },
//     subscribe(callBack) {
//         this._onChange = callBack
//     },
//
//     dispatch(action) {
//         this._state.profilePage = profileReducer(this._state.profilePage, action)
//         this._state.messagesPage = dialogsReducer(this._state.messagesPage, action)
//         this._onChange()
//     }
// }





