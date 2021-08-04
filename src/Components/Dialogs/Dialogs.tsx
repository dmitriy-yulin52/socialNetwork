import React, {ChangeEvent, KeyboardEvent, useEffect, useState} from 'react';
import style from './Dialogs.module.sass'
import DialogItem from './DialogItem/DialogItem'
import Message from './Message/Message'
import {
    ActionACTypes,
    addMessageActionCreator, InitialStateDialogsType,
    localStorageMessageCreator, RemoveMessageCreator,
    updateNewMessageCreator
} from "../../Redux/DialogsReducer";
import {useDispatch, useSelector} from "react-redux";
import {Dispatch} from "redux";
import {selectStateMessagesPage} from "../../Redux/selectors";
import {AppStateType} from "../../Redux/reduxStore";





const Dialogs = () => {


    const messagesPage = useSelector<AppStateType, InitialStateDialogsType>(selectStateMessagesPage)
    const dispatch = useDispatch<Dispatch<ActionACTypes>>()


    let dialogsElements = messagesPage.dialogs.map((i) => <DialogItem key={i.id} name={i.name} id={i.id}/>)
    let messageElements = messagesPage.messages.map((i) => <Message key={i.id} message={i.message} id={i.id} RemoveMessage={()=>dispatch(RemoveMessageCreator(i.id))}/>)

    let [error, setError] = useState<null | string>(null)


    const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
        dispatch(updateNewMessageCreator(event.currentTarget.value))
    }
    const onClickHandler = () => {
        let textTrim = messagesPage.newDialogsMessage.trim()
        if (textTrim) {
            dispatch(addMessageActionCreator(textTrim))
        } else {
            setError('Title is required')
        }
    }
    const onKeyPressHandler = (event: KeyboardEvent<HTMLInputElement>) => {
        setError(null)
        if (event.key === 'Enter') {
            onClickHandler()
        }
    }

    useEffect(()=>{
        let data = localStorage.getItem('message')
        if(data){
            let newData = JSON.parse(data)
            dispatch(localStorageMessageCreator(newData))
        }
    },[])

    useEffect(()=>{
        localStorage.setItem('message',JSON.stringify(messagesPage.messages))
    }, [messagesPage.messages])

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
                    <input className={style.input}
                           value={messagesPage.newDialogsMessage}
                           onChange={onChangeHandler}
                           onKeyPress={onKeyPressHandler}
                    />
                    <button onClick={onClickHandler}>click</button>
                    {error && <div className={style.error}>{error}</div>}
                </div>
            </div>
        </div>
    )
}

export default Dialogs;