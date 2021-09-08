import React from 'react'


export const Login = () => {
    return (
        <div>
            <h1>Login</h1>
            <form action="">
                <div>
                    <input placeholder={'Login'}/>
                </div>
                <div>
                    <input placeholder={'Password'}/>
                </div>
                <div>
                    <input type={'checkbox'}/><span>remember me</span>
                </div>
                <div>
                    <button>Login</button>
                </div>
            </form>
        </div>
    )
}