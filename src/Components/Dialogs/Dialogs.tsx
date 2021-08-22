import React, {ChangeEvent, KeyboardEvent, useCallback, useEffect, useState} from 'react';
import style from './Dialogs.module.sass'
import DialogItem from './DialogItem/DialogItem'
import Message from './Message/Message'
import {
    ActionACTypes,
    InitialStateDialogsType,
    localStorageMessageCreator, RemoveMessageCreator,
} from "../../Redux/DialogsReducer";
import {useDispatch, useSelector} from "react-redux";
import {Dispatch} from "redux";
import {selectStateMessagesPage} from "../../Redux/selectors";
import {AppStateType} from "../../Redux/reduxStore";
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField/TextField';
import {Redirect} from "react-router-dom";


type DialogsPropsType = {
    stateMessagesPage: InitialStateDialogsType
    addMessage: (message: string) => void
    updateMessage: (updMessage: string) => void
    isAuth:boolean
}


const Dialogs = React.memo((props: DialogsPropsType) => {

    const {
        isAuth,
        stateMessagesPage,
        addMessage,
        updateMessage
    } = props

    const messagesPage = useSelector<AppStateType, InitialStateDialogsType>(selectStateMessagesPage)
    const dispatch = useDispatch<Dispatch<ActionACTypes>>()

    const removeMessage = useCallback((id: string) => {
        dispatch(RemoveMessageCreator(id))
    }, [RemoveMessageCreator])


    let dialogsElements = stateMessagesPage.dialogs.map((i) => <DialogItem key={i.id} name={i.name} id={i.id}/>)
    let messageElements =
        stateMessagesPage.messages
            .map((i) => {
                return <Message
                    key={i.id} message={i.message} id={i.id}
                    RemoveMessage={() => removeMessage(i.id)}/>
            })

    let [error, setError] = useState<null | boolean>(null)


    const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
        updateMessage(event.currentTarget.value)
    }
    const onClickHandler = () => {
        let textTrim = stateMessagesPage.newDialogsMessage.trim()
        if (textTrim) {
            addMessage(textTrim)
        } else {
            setError(true)
        }
    }

    const onKeyPressHandler = (event: KeyboardEvent<HTMLInputElement>) => {
        if (error !== null) {
            setError(null)
        }
        if (event.key === 'Enter') {
            onClickHandler()
        }
    }

    useEffect(() => {
        let data = localStorage.getItem('message')
        if (data) {
            let newData = JSON.parse(data)
            dispatch(localStorageMessageCreator(newData))
        }
    }, [])
    useEffect(() => {
        localStorage.setItem('message', JSON.stringify(messagesPage.messages))
    }, [messagesPage.messages])


    if(isAuth){
        return <Redirect to={'/login'}/>
    }

    return (
        <div className={style.dialogs}>
            <div className={style.dialogsItems}>
                {
                    dialogsElements
                }
            </div>
            <div className={style.messages}>
                <div>
                    {
                        messageElements
                    }
                </div>
                <div className={style.textarea}>
                    {
                        error
                            ? <TextField
                                error
                                id="outlined-error-helper-text"
                                label="Error"
                                defaultValue="Hello World"
                                helperText="Title is required."
                                variant="outlined"
                                onChange={onChangeHandler}
                                onKeyPress={onKeyPressHandler}
                                size={'small'}
                            />
                            : <TextField
                                id="outlined-basic"
                                label="Outlined"
                                variant="outlined"
                                value={messagesPage.newDialogsMessage}
                                onChange={onChangeHandler}
                                onKeyPress={onKeyPressHandler}
                                size={'small'}
                                className={style.textFieldDialogs}
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
                </div>
            </div>
        </div>
    )
})

export default Dialogs;