import React from 'react';
import {NavLink} from 'react-router-dom';
import c from './Dialogs.module.css';


const DialogItem: React.FC<DialogsDataType> = (props) => {
    const {id, name} = props;

    let path = `/dialogs/${props.id}`;

    return <div className={`${c.dialog} ${c.active}`}>
                <NavLink to={path}>
                    {props.name}
                </NavLink>
    </div>
}
const Message: React.FC<MessageDataType> = (props) => {
    const {id,message} = props;
    return <div className={c.message}>{props.message}</div>
}


let DialogsData = [
    {id: 1, name: 'dmitriy'},
    {id: 2, name: 'vicrotiy'},
    {id: 3, name: 'sasha'},
    {id: 4, name: 'leonid'},
    {id: 5, name: 'victor'},
    {id: 6, name: 'john'}

]

let MessagesData = [
    {id: 1, message: 'hello'},
    {id: 2, message: 'hi'},
    {id: 3, message: 'yo'}
]

let dialogsElements = DialogsData.map((i)=> <DialogItem name={i.name} id={i.id}/>)
let messageElements = MessagesData.map((i)=> <Message message={i.message} id={i.id}/>)

type DialogsDataType = {
    id: number
    name: string
}

type MessageDataType = {
    id: number
    message: string
}


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