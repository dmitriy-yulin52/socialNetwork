import React from 'react';
import {useFormik, Field} from 'formik';
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

type LoginType = {
    setLogin: (email: string, password: string, rememberMe: boolean) => void
}

export const Login = (props: LoginType) => {
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
                    onClick={() => console.log(formik)}
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


// export default connect(null, {
//     SetLogin
// })(Login)