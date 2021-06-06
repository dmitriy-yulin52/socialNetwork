import React, {useState} from 'react';
import c from './Dialogs.module.css'
import DialogItem from './DialogItem/DialogItem'
import Message from './Message/Message'
import {MessagesDataType, newPost} from "../../Redux/state";
import {DialogsData} from "../../Redux/state";


type PropsType = {
    dialogs: Array<DialogsData>
    messages: Array<MessagesDataType>

}


const Dialogs: React.FC<PropsType> = (props) => {

    let dialogsElements = props.dialogs.map((i) => <DialogItem name={i.name} id={i.id}/>)
    let messageElements = props.messages.map((i) => <Message message={i.message} id={i.id}/>)



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
                <div className={c.textarea}><textarea></textarea></div>
                <div>
                    <button></button>
                </div>
            </div>
        </div>
    )
}

export default Dialogs;