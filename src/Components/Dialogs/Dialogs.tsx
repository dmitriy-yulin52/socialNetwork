import React from 'react';
import c from './Dialogs.module.css'
import DialogItem from './DialogItem/DialogItem'
import Message from './Message/Message'
import {DialogsData} from '../../index'
import {MessagesData} from '../../index'


export let dialogsElements = DialogsData.map((i)=> <DialogItem name={i.name} id={i.id}/>)
export let messageElements = MessagesData.map((i)=> <Message message={i.message} id={i.id}/>)

const Dialogs= () => {
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