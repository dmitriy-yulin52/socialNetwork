import React, {ChangeEvent, KeyboardEvent,useState} from 'react';
import c from './Dialogs.module.css'
import DialogItem from './DialogItem/DialogItem'
import Message from './Message/Message'
import {DialogType, MessageType} from "../../Redux/DialogsReducer";


type PropsType = {
    newDialogsMessage:string
    updateNewMessage: (event: string)=> void
    addMessage: (message: string)=> void
    dialogs: Array<DialogType>
    messages: Array<MessageType>
}


const Dialogs: React.FC<PropsType> = (props) => {
    const{newDialogsMessage,addMessage,updateNewMessage,dialogs,messages} = props

    let dialogsElements = dialogs.map((i) => <DialogItem key={i.id} name={i.name} id={i.id}/>)
    let messageElements = messages.map((i) => <Message key={i.id} message={i.message} id={i.id}/>)

    let[error,setError] = useState<null | string>(null)


    const onChangeHandler = (event:ChangeEvent<HTMLInputElement>)=>{
        updateNewMessage(event.currentTarget.value)
    }
    const onClickHandler = ()=> {
        let textTrim = newDialogsMessage.trim()
        if(textTrim){
            addMessage(textTrim)
        }else{
            setError('Title is required')
        }

    }
    const onKeyPressHandler = (event:KeyboardEvent<HTMLInputElement>)=>{
        setError(null)
        if(event.key === 'Enter'){
        onClickHandler()
        }
    }


    return (
        <div className={c.dialogs}>
            <div className={c.dialogsItems}>
                {
                    dialogsElements
                }
            </div>
            <div className={c.messages}>
                <div>
                    {
                        messageElements
                    }

                </div>
                <div className={c.textarea}>
                    <input className={c.input}
                           value={newDialogsMessage}
                           onChange={onChangeHandler}
                           onKeyPress={onKeyPressHandler}
                    />
                    <button onClick={onClickHandler}>click</button>
                    {error && <div className={c.error}>{error}</div>}
                </div>
            </div>
        </div>
    )
}

export default Dialogs;