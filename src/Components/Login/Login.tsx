import React from 'react'
import styles from './Login.module.sass'
import Field, {reduxForm} from "redux-form";

type LoginType = {

}

const LoginForm = () => {
    return (
            <form action="">
                <div>
                    <input
                        className={styles.input}
                        placeholder={'Login'}/>
                </div>
                <div>
                    <input
                        className={styles.input}
                        placeholder={'Password'}/>
                </div>
                <div>
                    <input
                        className={styles.input}
                        type={'checkbox'}/><span>remember me</span>
                </div>
                <div>
                    <button>Login</button>
                </div>
            </form>
    )
}
export const Login = (props:LoginType) => {
    return (
        <div>
            <h1>Login</h1>
            <LoginReduxForm/>
        </div>
    )
}

const LoginReduxForm = reduxForm({
    // a unique name for the form
    form: 'login'
})(LoginForm)

