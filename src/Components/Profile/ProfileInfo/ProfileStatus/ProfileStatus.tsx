import React, {ChangeEvent, useState} from 'react'
import style from './ProfileStatus.module.sass'


type ProfileStatusType = {
    status: string
    updateStatus:(status:string)=> void
}


export const ProfileStatus = React.memo((props: ProfileStatusType) => {
    const {
        status,
        updateStatus
    } = props

    const [message, setMessage] = useState('')
    const [editMode, setEditMode] = useState(false)

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setMessage(e.currentTarget.value)
    }

    const onEditMode = () => {
        setEditMode(true)
        setMessage(status)
    }
    const offEditMode = () => {
        setEditMode(false)
        updateStatus(message)
    }

    return (
        <div className={style.BlockStatus}>
            {editMode
            ?
            <div>
                <input
                    value={message}
                    onChange={onChangeHandler}
                    onBlur={offEditMode}
                    autoFocus
                />
            </div>
            :
            <div>
                <span onDoubleClick={onEditMode}>{status || 'No status'}</span>
            </div>}
        </div>
    )
})