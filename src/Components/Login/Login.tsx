import React from 'react'
import styles from './Login.module.sass'

type LoginType = {

}


export const Login = (props:LoginType) => {
    return (
        <div>
            <h1>Login</h1>
            <LoginForm/>
        </div>
    )
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