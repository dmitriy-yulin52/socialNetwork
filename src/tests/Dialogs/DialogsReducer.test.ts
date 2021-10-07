import {
    addMessageActionCreator,
    dialogsReducer,
    InitialStateDialogsType,
    RemoveMessageCreator,
} from "../../Redux/Dialogs/DialogsReducer";
import {v1} from "uuid";

let startState: InitialStateDialogsType
let todoListId: string
beforeEach(() => {
    todoListId = v1()

    startState = {
        dialogs: [
            {id: todoListId, name: 'dmitriy'},
            {id: todoListId, name: 'vicrory'},
            {id: todoListId, name: 'sasha'},
            {id: todoListId, name: 'leonid'},
            {id: todoListId, name: 'victor'},
            {id: todoListId, name: 'john'},
            {id: todoListId, name: 'dddd'}

        ],
        messages: [
            {id: '1', message: 'hello'},
            {id: '2', message: 'hi'},
            {id: '3', message: 'yo'}
        ]
    }

})


test('correct message should be added', () => {

    const action = addMessageActionCreator('Hello world!')
    const endState = dialogsReducer(startState, action)

    expect(endState.messages.length).toBe(4)
    expect(endState.messages[3].message).toBe('Hello world!')
    expect(endState.messages[0].message).toBe('hello')
})
test('correct message should be removed', () => {

    const action = RemoveMessageCreator('3')
    const endState = dialogsReducer(startState, action)

    expect(endState.messages.length).toBe(2)
    expect(endState.messages[1].message).toBe('hi')

})