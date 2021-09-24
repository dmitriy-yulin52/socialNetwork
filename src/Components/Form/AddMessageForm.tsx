import React from "react";
import {useFormik} from "formik";
import {TextField} from "@material-ui/core";
import Button from "@material-ui/core/Button";
import * as yup from 'yup';


export type MessageType = {
    message: string
}
 type AddMessageFromType = {
    onSubmit: (formData:MessageType)=> void
}

const validationSchema = yup.object({
    message: yup
        .string()
        .required('Message is required'),
});

export const AddMessageFrom = React.memo((props:AddMessageFromType) => {

    const {
        onSubmit
    }= props


    const formik = useFormik({
        initialValues: {
            message: '',
        },
        validationSchema: validationSchema,
        onSubmit: values => {
            onSubmit(values)
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

            />
            <Button
                variant="contained"
                color="primary"
                type="submit"
                size={'small'}
                onClick={()=> console.log(formik)}
            >Submit</Button>
        </form>
    );
});


