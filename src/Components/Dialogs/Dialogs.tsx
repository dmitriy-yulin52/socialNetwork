import React from 'react';
import c from './Dialogs.module.css'
import DialogItem from './DialogItem/DialogItem'
import Message from './Message/Message'
import {MessagesDataType} from "../../Redux/state";
import {DialogsData} from "../../Redux/state";


type PropsType = {
    dialogs: Array<DialogsData>
    messages:Array<MessagesDataType>
}




const Dialogs:React.FC <PropsType> = (props) => {

let dialogsElements = props.dialogs.map((i)=> <DialogItem name={i.name} id={i.id}/>)
let messageElements = props.messages.map((i)=> <Message message={i.message} id={i.id}/>)


    return (
        <div className={c.dialogs}>
            <div className={c.dialogsItems}>
                {
                    dialogsElements
                }
            </div>
            <div className={c.messages}>
                {
                    messageElements
                }
            </div>
        </div>
    )
}

export default Dialogs;