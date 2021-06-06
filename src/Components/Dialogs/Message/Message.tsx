import React from 'react';
import c from './Message.module.css'


type PropsType = {
    id: number
    message: string
}

const Message: React.FC<PropsType> = (props) => {
    const {id, message} = props;
    return (
        <div>
            <div className={c.message}>{props.message}</div>
        </div>)
}

export default Message;