import React from 'react';
import style from './Post.module.sass'
import {Delete} from "@material-ui/icons";
import {IconButton} from "@material-ui/core";

type PropsType = {
    id: string
    message: string
    like: number
    time: number
    removePost: (userId: string) => void
}

const Post = React.memo((props: PropsType) => {

    const {
        id,
        message,
        like,
        time,
        removePost,
    } = props


    return (
        <>
            <div style={{display: 'flex'}}>
                <div className={style.item}>
                    <img className={style.logo_img}
                         src='https://fsb.zobj.net/crop.php?r=7-v795zJWgH85Pz0R8KUaEPB83xdbyUIvqhQ-WDJ2rCUE4-J34DiS8qZBrLTHWG4dql2g1gC4MIeYhczKRul_Rb--xilzH_LINSipRmJCEV83LubDPvzl-wqYdrjEmdLxpYuC5nXj1WgVRQQ'/>
                    <span>
                {message}
            </span>
                    <div> like {like}</div>

                </div>
                <div>
                    <IconButton
                        aria-label="delete"
                        size="small"
                    >
                        <Delete
                            onClick={()=>removePost(id)}
                            fontSize="inherit"
                        />
                    </IconButton>
                </div>
            </div>
        </>
    )
})

export default Post;