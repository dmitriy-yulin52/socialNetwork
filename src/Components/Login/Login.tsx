import React from 'react';
import {useFormik} from 'formik';
import * as yup from 'yup';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import s from './LoginStyle.module.css'
import {Redirect} from "react-router-dom";
import {Link} from "@material-ui/core";



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

type LoginType = {
    setLogin: (email: string, password: string, rememberMe: boolean) => void
    isAuth:boolean
}

export const Login = React.memo((props: LoginType) => {
    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
        },
        validationSchema: validationSchema,
        onSubmit: (values) => {
            props.setLogin(values.email,values.password,true)
        },
    });

    if(props.isAuth){
        return <Redirect to={'/profile'}/>
    }

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
                <div className={s.submitButton}>
                    <Button
                        className={s.button}
                        color="primary"
                        variant="contained"
                        fullWidth type="submit">
                        Submit
                    </Button>
                </div>
            </form>
            <div className={s.link}>
                <Link href="#" underline="hover">
                    {'Забыли пароль?'}
                </Link>

            </div>
            <hr/>
            <div className={s.createButton}>
                <Button
                    className={s.createAccount}
                    color='primary'
                    variant="contained"
                    size="small"
                >
                    Create an account
                </Button>
            </div>

        </div>
    );
});


// export default connect(null, {
//     SetLogin
// })(Login)