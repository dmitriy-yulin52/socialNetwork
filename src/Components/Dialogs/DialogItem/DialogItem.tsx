import React from 'react';
import {NavLink} from 'react-router-dom';
import c from './DialogsItem.module.css'


type PropsType = {
    id: string
    name: string
}

const DialogItem: React.FC<PropsType> = React.memo((props) => {
    const {id, name} = props;

    let path = `/dialogs/${id}`;

    return <div className={`${c.dialog} ${c.active}`}>
                <NavLink to={path}>
                    {name}
                </NavLink>
    </div>
})



export default DialogItem;