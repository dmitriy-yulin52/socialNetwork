import React from 'react'
import styles from './Login.module.sass'
import {Field,InjectedFormProps, reduxForm} from "redux-form";

type FormDateType = {
    Login:string
    password:string
    rememberMe:boolean
}

const LoginForm:React.FC<InjectedFormProps<FormDateType>> = (props) => {
    return (
            <form onSubmit={props.handleSubmit}>
                <div>
                    <Field
                        className={styles.input}
                        name={'Login'}
                        placeholder={'Login'}
                        component={'input'}
                    />
                </div>
                <div>
                    <Field
                        className={styles.input}
                        name={'password'}
                        placeholder={'password'}
                        component={'input'}
                    />
                </div>
                <div>
                    <Field
                        className={styles.input}
                        name={'rememberMe'}
                        type={'checkbox'}
                        component={'input'}
                    />
                    <span>remember me</span>
                </div>
                <div>
                    <button>Login</button>
                </div>
            </form>
    )
}
export const Login = () => {
    const onSubmit = (formData:FormDateType)=> {
        console.log(formData)
    }
    return (
        <div>
            <h1>Login</h1>
            <LoginReduxForm onSubmit={onSubmit}/>
        </div>
    )
}

const LoginReduxForm = reduxForm<FormDateType>({
    // a unique name for the form
    form: 'login'
})(LoginForm)

