import React from 'react';
import {NavLink} from 'react-router-dom';
import c from './DialogsItem.module.css'


type PropsType = {
    id: number
    name: string
}

const DialogItem: React.FC<PropsType> = (props) => {
    const {id, name} = props;

    let path = `/dialogs/${props.id}`;

    return <div className={`${c.dialog} ${c.active}`}>
                <NavLink to={path}>
                    {props.name}
                </NavLink>
    </div>
}



export default DialogItem;