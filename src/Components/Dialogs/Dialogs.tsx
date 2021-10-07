import React from 'react';
import style from './Dialogs.module.sass'
import DialogItem from './DialogItem/DialogItem'
import Message from './Message/Message'
import {
    InitialStateDialogsType,
} from "../../Redux/Dialogs/DialogsReducer";
import {AddMessageFrom, MessageType} from "../Form/DialogsForm/AddMessageForm";



type DialogsPropsType = {
    stateMessagesPage: InitialStateDialogsType
    addMessage: (data:MessageType) => void
    removeMessage:(id:string)=>void
}


const Dialogs = React.memo((props: DialogsPropsType) => {

    const {
        stateMessagesPage,
        removeMessage,
        addMessage,
    } = props



    let dialogsElements = stateMessagesPage.dialogs.map((i) => <DialogItem key={i.id} name={i.name} id={i.id}/>)
    let messageElements =
        stateMessagesPage.messages
            .map((i) => {
                return <Message
                    key={i.id} message={i.message} id={i.id}
                    RemoveMessage={() => removeMessage(i.id)}/>
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
                <AddMessageFrom
                    onSubmit={addMessage}
                />
            </div>
        </div>
    )
})

export default Dialogs;