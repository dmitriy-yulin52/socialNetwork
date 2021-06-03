import React from 'react';
import c from './Message.module.css'


export type MessageDataType = {
    id: number
    message: string
}

const Message: React.FC<MessageDataType> = (props) => {
    const {id,message} = props;
    return <div className={c.message}>{props.message}</div>
}

export default Message;