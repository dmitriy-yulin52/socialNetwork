import React, {ChangeEvent, KeyboardEvent,useState} from 'react';
import c from './Dialogs.module.css'
import DialogItem from './DialogItem/DialogItem'
import Message from './Message/Message'
import {MessagesDataType, StoreType} from "../../Redux/store";
import {DialogsData} from "../../Redux/store";
import {addMessageActionCreator, updateNewMessageCreator} from "../../Redux/DialogsReducer";


type PropsType = {
    dispatch: (action: any)=> void
    messagesText:string
    store: StoreType
}


const Dialogs: React.FC<PropsType> = (props) => {
    const{dispatch,messagesText,store} = props
    const state = store.getState().messagesPage

    let dialogsElements = state.dialogs.map((i) => <DialogItem name={i.name} id={i.id}/>)
    let messageElements = state.messages.map((i) => <Message message={i.message} id={i.id}/>)

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