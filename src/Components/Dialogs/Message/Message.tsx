import React from 'react';
import c from './Message.module.css'



type PropsType = {
    id: string
    message: string
    RemoveMessage:(messagesId:string)=>void
}

const Message: React.FC<PropsType> =  React.memo((props) => {
    console.log('message')

    const {id, message,RemoveMessage} = props;
    return (
        <div id={id} className={c.message}>
            <div>
                <div className={c.message}>{message}</div>
            </div>
            <button onClick={()=>RemoveMessage(id)}>X</button>
        </div>


    )
})

export default Message;