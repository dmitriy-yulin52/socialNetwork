import React from "react";
import {useFormik} from "formik";
import {TextField} from "@material-ui/core";
import Button from "@material-ui/core/Button";
import * as yup from 'yup';
import s from './AddMessageForm.module.css'

export type MessagePostType = {
    message: string
}
type AddNewPostFormType = {
    onSubmit: (formData:MessagePostType)=> void
}

const validationSchema = yup.object({
    message: yup
        .string()
        .required('Message is required'),
});

export const AddNewPostForm = React.memo((props:AddNewPostFormType) => {


    const formik = useFormik({
        initialValues: {
            message: '',
        },
        validationSchema: validationSchema,
        onSubmit: values => {
            props.onSubmit(values)
            formik.resetForm()
        },
    });



    return (
        <form onSubmit={formik.handleSubmit}>
            <TextField
                id="message"
                name="message"
                type="text"
                error={Boolean(formik.errors.message)}
                onChange={formik.handleChange}
                value={formik.values.message}
                helperText={formik.errors.message}
                className={s.input}
            />
            <Button
                variant="contained"
                color="primary"
                type="submit"
                size={'small'}
                onClick={()=> console.log(formik)}
            >Add</Button>
        </form>
    );
});




