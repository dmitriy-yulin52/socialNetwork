import {authReducer, InitialStateType, setAuthUserDataAC} from "../../Redux/auth/auth-reducer";


// @ts-ignore
let startState = InitialStateType

beforeEach(()=>{
    startState = {
        userId:2,
        login:'',
        email:'',
        isAuth:false,

    }
})

test('login,email should be correct added',()=>{
        const userId = 14
        const email = 'arsenal@mail.ru'
        const login = 'di'

    const action = setAuthUserDataAC(login,email,userId,true)
    const endState = authReducer(startState,action)

    expect(endState.login).toBe('di')
    expect(endState.userId).toBe(14)
    expect(endState.email).toBe('arsenal@mail.ru')
})