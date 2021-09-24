import React from 'react';
import style from './MyPosts.module.sass'
import Post from "./Post/Post";
import {PostType} from "../ProfileReducer";
import {TextField} from "@material-ui/core";
import Button from "@material-ui/core/Button";
import {useFormik} from "formik";
import * as yup from "yup";


export type MessagePostType = {
    message: string
}
type PropsType = {
    posts: Array<PostType>
    onSubmit: (message: MessagePostType) => void
}

const validationSchema = yup.object({
    message: yup
        .string()
        .required('Message is required'),
});

export const MyPosts = React.memo((props: PropsType) => {

    const {
        posts,
        onSubmit,
    } = props;

    let postElement = posts.map((i) =>
        <Post
            id={i.id}
            message={i.message}
            like={i.like}
            time={i.time}
        />)



    // const onAddPostClickHandler = () => {
    //     const messageTrim = messageForNewPost.trim()
    //     if (messageTrim) {
    //         addPost(messageTrim)
    //     } else {
    //         setError('Title is required')
    //     }
    // }
    // const onPostChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    //     updateNewPostText(event.currentTarget.value)
    //     setError(null)
    // }
    // const onPostChangePressKey = (event: KeyboardEvent<HTMLInputElement>) => {
    //     if (error !== null) {
    //         setError(null)
    //     }
    //     if (event.key === 'Enter') {
    //         onAddPostClickHandler()
    //     }
    // }

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
        <div>
            <h2 className={style.item}>My post</h2>
            <div className={style.input}>
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
                    >Click</Button>
                </form>
                {/*<input value={messageForNewPost} onChange={onPostChangeHandler} onKeyPress={onPostChangePressKey}/>*/}
                {/*<button onClick={onAddPostClickHandler}>click</button>*/}
                {/*<div className={style.error}>*/}
                {/*    <span>{error}</span>*/}
                {/*</div>*/}
            </div>

            <div className={style.newPost}>
                New post
            </div>
            <div className={style.posts}>
                {postElement}
            </div>
        </div>
    )
})

