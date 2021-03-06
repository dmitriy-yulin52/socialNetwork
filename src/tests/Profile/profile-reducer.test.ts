import {InitialStateType, profileReducer, removePostAc, setStatusAC} from "../../Redux/Profile/ProfileReducer";


let startState: InitialStateType

beforeEach(()=>{

    startState = {
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
                small: '',
                large: ''
            }
        },
        status:''
    }

})

test('correct status should be added',()=> {

    const action = setStatusAC('I super man')
    const endSate = profileReducer(startState,action)

    expect(endSate.status).toBe('I super man')
})
test('post should be removed',()=> {

    const action = removePostAc('1')
    const endSate = profileReducer(startState,action)

    expect(endSate.posts.length).toBe(3)
    expect(endSate.posts[0].message).toBe('It,s my first post')
    expect(endSate.posts[1].id).toBe('3')
})
test('status should be changed',()=> {

    const newStatus = 'Hello world!'

    const action = setStatusAC(newStatus)
    const endSate = profileReducer(startState,action)

    expect(endSate.status).toBe(newStatus)

})