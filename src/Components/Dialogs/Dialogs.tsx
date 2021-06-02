import React from 'react';
import {NavLink} from 'react-router-dom';
import c from './Dialogs.module.css';


const PropsDialogsItem = {
    id: 1,
    name: ['dmitriy', 'valery','sasha','victor']
}
type DialogsItemType = {
    id:number
    name: string
}

const DialogItem: React.FC <DialogsItemType> = (props) => {
    const {id,name} = props;

    let path = `/dialogs/${props.id}`;

    return <div className={c.dialog + ' ' + c.active}>
        <NavLink to={path}>
            {props.name}
        </NavLink>
    </div>
}

const propsMessage = {
    message: ['hello','hi','yo']
}

type MessageType = {
    message: string
}
const Message:React.FC<MessageType> = (props)=> {
    const {message} = props;
    return  <div className={c.message}>{props.message}</div>
}


const Dialogs = () => {
    return (
        <div className={c.dialogs}>
            <div className={c.dialogsItems}>
                <DialogItem name={PropsDialogsItem.name[0]} id={PropsDialogsItem.id}/>
                <DialogItem name={PropsDialogsItem.name[1]} id={PropsDialogsItem.id}/>
                <DialogItem name={PropsDialogsItem.name[2]} id={PropsDialogsItem.id}/>
                {/*<DialogItem name={PropsDialogsItem.name[1]}/>*/}
                {/*<DialogItem name={PropsDialogsItem.name[2]}/>*/}
                {/*<DialogItem name={PropsDialogsItem.name[3]}/>*/}
            </div>
            <div className={c.messages}>
                <Message message={propsMessage.message[0]}/>
                <Message message={propsMessage.message[1]}/>
                <Message message={propsMessage.message[2]}/>
            </div>
        </div>
    )
}

export default Dialogs;