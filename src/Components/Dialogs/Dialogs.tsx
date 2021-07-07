import React, {ChangeEvent, KeyboardEvent,useState} from 'react';
import c from './Dialogs.module.css'
import DialogItem from './DialogItem/DialogItem'
import Message from './Message/Message'
import {addMessageActionCreator, MessagesDataType, updateNewMessageCreator} from "../../Redux/state";
import {DialogsData} from "../../Redux/state";


type PropsType = {
    dialogs: Array<DialogsData>
    messages: Array<MessagesDataType>
    dispatch: (action: any)=> void
    messagesText:string
}


const Dialogs: React.FC<PropsType> = (props) => {

    const{dialogs,messages,dispatch,messagesText} = props

    let dialogsElements = dialogs.map((i) => <DialogItem name={i.name} id={i.id}/>)
    let messageElements = messages.map((i) => <Message message={i.message} id={i.id}/>)

    let[error,setError] = useState<null | string>(null)


    const onChangeHandler = (event:ChangeEvent<HTMLInputElement>)=>{
        const action = updateNewMessageCreator(event.currentTarget.value)
        dispatch(action)
    }
    const onClickHandler = ()=> {
        let textTrim = messagesText.trim()
        const action = addMessageActionCreator(textTrim)
        if(textTrim){
            dispatch(action)
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
                    <input className={c.input} value={messagesText} onChange={onChangeHandler} onKeyPress={onKeyPressHandler}/>
                    <button onClick={onClickHandler}>click</button>
                    {error && <div className={c.error}>{error}</div>}
                </div>
            </div>
        </div>
    )
}

export default Dialogs;