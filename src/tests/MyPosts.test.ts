import {

} from "../Redux/DialogsReducer";
import {
    addPostActionCreator,
    idUser,
    InitialStateType,
    profileReducer,
    updateNewPostTextActionCreator
} from "../Redux/ProfileReducer";
import {v1} from "uuid";

let startState : InitialStateType
let todoListId: string
beforeEach(()=>{

    startState = {
        messageForNewPost: '',
        posts: [
            {id: '1', message: 'Hi, how are you', like: 4, time: 7},
            {id: '2', message: 'It,s my first post', like: 22, time: 19},
            {id: '3', message: 'yo', like: 14, time: 12},
            {id: '4', message: 'it-camasutra', like: 11, time: 90}
        ],
        profile: {
            userId: 2,
            aboutMe: '',
            lookingForAJob: true,
            lookingForAJobDescription: '',
            fullName: '',
            contacts: {
                github: '',
                vk: '',
                facebook: '',
                instagram: '',
                twitter: '',
                website: '',
                youtube: '',
                mainLink: ''
            },
            photos: {
                small: '(string)',
                large: '(string)'
            }
        }
    }

})


test('correct post should be added',()=> {

    let newMessage = 'new message'
    const action = addPostActionCreator(newMessage)
    const endState = profileReducer(startState,action)


    expect(endState.posts[4].message).toBe(newMessage)
    expect(endState.posts[4].id).toBe(idUser)
    expect(endState.posts[4].like).toBe(4)
    expect(endState.posts[4].time).toBe(7)
    expect(endState.posts[1].message).toBe('It,s my first post')
    expect(endState.posts[2].time).toBe(12)
})
test('correct messagePostText should be update',()=> {

    let newPostText = 'New post message'
    const action = updateNewPostTextActionCreator(newPostText)
    const endState = profileReducer(startState,action)

    expect(endState.messageForNewPost).toBe(newPostText)

})
test('correct message should be removed',()=> {

    const action = RemoveMessageCreator('3')
    const endState = dialogsReducer(startState,action)

    expect(endState.messages.length).toBe(2)
    expect(endState.messages[1].message).toBe('hi')

})

function ProfileReducer(startState: InitialStateType, action: { type: ACTION_TYPE_TYPE.ADD_POST; postText: string; }) {
    throw new Error("Function not implemented.");
}
