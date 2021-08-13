import React from 'react';
import c from './Message.module.css'
import {IconButton} from "@material-ui/core";
import {Delete} from "@material-ui/icons";



type PropsType = {
    id: string
    message: string
    RemoveMessage:(messagesId:string)=>void
}

const Message: React.FC<PropsType> =  React.memo((props) => {

    const {
        id,
        message,
        RemoveMessage
    } = props;

    return (
        <div id={id} className={c.message}>
            <div>
                <div className={c.message}>{message}</div>
            </div>
            <IconButton
                aria-label="delete"
                size="small"
            >
                <Delete
                    onClick={()=>RemoveMessage(id)}
                    fontSize="inherit"
                />
            </IconButton>
        </div>


    )
})

export default Message;