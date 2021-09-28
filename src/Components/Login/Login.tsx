import React from 'react';
import { useFormik,Field } from 'formik';
import * as yup from 'yup';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import s from './Login.module.sass'

const validationSchema = yup.object({
    email: yup
        .string()
        .email('Enter a valid email')
        .required('Email is required'),
    password: yup
        .string()
        .min(8, 'Password should be of minimum 8 characters length')
        .required('Password is required'),
});

export const Login = () => {
    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
        },
        validationSchema: validationSchema,
        onSubmit: (values) => {
            alert(JSON.stringify(values, null, 2));
        },
    });

    return (
        <div className={s.loginWrapper}>
            <form onSubmit={formik.handleSubmit}>
                <TextField
                    fullWidth
                    id="email"
                    name="email"
                    label="Email"
                    value={formik.values.email}
                    onChange={formik.handleChange}
                    error={formik.touched.email && Boolean(formik.errors.email)}
                    helperText={formik.touched.email && formik.errors.email}

                />
                <TextField
                    fullWidth
                    id="password"
                    name="password"
                    label="Password"
                    type="password"
                    value={formik.values.password}
                    onChange={formik.handleChange}
                    error={formik.touched.password && Boolean(formik.errors.password)}
                    helperText={formik.touched.password && formik.errors.password}
                    className={s.password}
                />

                <Button
                    onClick={()=> console.log(formik)}
                    className={s.button}
                    color="primary"
                    variant="contained"
                    fullWidth type="submit">
                    Submit
                </Button>
            </form>
        </div>
    );
};
//
//
//
//
// import React, {ReactNode, useEffect} from 'react'
// import styles from './Login.module.sass'
// import {reduxForm, Field, InjectedFormProps} from "redux-form";
// import {useDispatch} from "react-redux";
// import {SetLoginThunkCreator} from "../../Redux/auth-reducer";
//
//
//
//
//
// type FormDateType = {
//     Login:string
//     password:string
//     rememberMe:boolean
// }
//
// const LoginForm:React.FC<InjectedFormProps <FormDateType>>   = (props) => {
//
//     // const {
//     //     Login,
//     //     password,
//     //     rememberMe
//     // } = props
//     //
//     //
//     // const dispatch = useDispatch()
//     // useEffect(()=> {
//     //     dispatch(SetLoginThunkCreator())
//     // })
//     return (
//             <form onSubmit={props.handleSubmit}>
//                 <div>
//                     <Field
//                         className={styles.input}
//                         name={'Login'}
//                         placeholder={'Login'}
//                         component={'input'}
//                     />
//                 </div>
//                 <div>
//                     <Field
//                         className={styles.input}
//                         name={'password'}
//                         placeholder={'password'}
//                         component={'input'}
//                     />
//                 </div>
//                 <div>
//                     <Field
//                         className={styles.input}
//                         name={'rememberMe'}
//                         type={'checkbox'}
//                         component={'input'}
//                     />
//                     <span>remember me</span>
//                 </div>
//                 <div>
//                     <button>Login</button>
//                 </div>
//             </form>
//     )
// }
// export const Login = () => {
//     const onSubmit = (formData:FormDateType)=> {
//         console.log(formData)
//     }
//     return (
//         <div>
//             <h1>Login</h1>
//             <LoginReduxForm onSubmit={onSubmit}/>
//         </div>
//     )
// }
//
// const LoginReduxForm = reduxForm<FormDateType>({
//     // a unique name for the form
//     form: 'login'
// })(LoginForm)
//
