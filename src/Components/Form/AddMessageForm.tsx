import style from "../Dialogs/Dialogs.module.sass";
import TextField from "@material-ui/core/TextField/TextField";
import Button from "@material-ui/core/Button";
import React, {ChangeEvent, KeyboardEvent} from "react";
import {Field, InjectedFormProps} from "redux-form";


type AddMessageFormType = {
    error: null | boolean
    onChangeHandler: (event: ChangeEvent<HTMLInputElement>) => void
    onKeyPressHandler: (event: KeyboardEvent<HTMLInputElement>) => void
    newDialogsMessage: string
    onClickHandler: () => void
}


export const AddMessageForm = (props: AddMessageFormType) => {


    const {
        error,
        onChangeHandler,
        onKeyPressHandler,
        newDialogsMessage,
        onClickHandler,
    } = props


    return (
        <div className={style.textarea}>
            <form onSubmit={props.handleSubmit}>
                {
                    error
                        ? <Field
                            onChange={onChangeHandler}
                            onKeyPress={onKeyPressHandler}
                        />
                        : <Field
                            name={'newMessage'}
                            component={'input'}
                            value={newDialogsMessage}
                            onChange={onChangeHandler}
                            onKeyPress={onKeyPressHandler}
                            className={style.textFieldDialogs}
                            placeholder={'Enter you message'}
                        />
                }
                <>
                    <Button
                        variant="contained"
                        color="primary"
                        disableElevation
                        onClick={onClickHandler}
                        size={'small'}
                    >
                        click
                    </Button>
                </>
            </form>
        </div>
    )
}