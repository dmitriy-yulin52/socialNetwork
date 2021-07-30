import React, {ChangeEvent, KeyboardEvent, useEffect, useState} from 'react';
import style from './Dialogs.module.sass'
import DialogItem from './DialogItem/DialogItem'
import Message from './Message/Message'
import {DialogType, MessageType} from "../../Redux/DialogsReducer";


type PropsType = {
    newDialogsMessage: string
    updateNewMessage: (event: string) => void
    addMessage: (message: string) => void
    dialogs: Array<DialogType>
    messages: Array<MessageType>
    localStorageMessage:(messages:Array<MessageType>)=>void
    RemoveMessage:(messagesId:string)=>void
}


const Dialogs: React.FC<PropsType> = (props) => {
    const {newDialogsMessage, addMessage, updateNewMessage, dialogs, messages,localStorageMessage,RemoveMessage} = props

    let dialogsElements = dialogs.map((i) => <DialogItem key={i.id} name={i.name} id={i.id}/>)
    let messageElements = messages.map((i) => <Message key={i.id} message={i.message} id={i.id} RemoveMessage={RemoveMessage}/>)




    let [error, setError] = useState<null | string>(null)


    const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
        updateNewMessage(event.currentTarget.value)
    }
    const onClickHandler = () => {
        let textTrim = newDialogsMessage.trim()
        if (textTrim) {
            addMessage(textTrim)
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
            localStorageMessage(newData)
        }
    },[])
    useEffect(()=>{
        localStorage.setItem('message',JSON.stringify(messages))
    })

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
                           value={newDialogsMessage}
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