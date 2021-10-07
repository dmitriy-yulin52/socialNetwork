import {authReducer, InitialStateType, setAuthUserDataAC} from "../../Redux/auth/auth-reducer";


let startState: InitialStateType

beforeEach(()=>{
    startState = {
        userId:1,
        login:'',
        email:'',
        isAuth:false,
    }
})

test('login,email should be correct added', ()=>{


    const userId = 14
    const login = 'dmitriy'
    const email = 'arsenal@mail.ru'

    const action = setAuthUserDataAC(login,email,userId,true)
    const endState = authReducer(startState,action)

    expect(endState.login).toBe('dmitriy')
    expect(endState.userId).toBe(14)
    expect(endState.email).toBe('arsenal@mail.ru')
    expect(startState).not.toBe(endState)
})