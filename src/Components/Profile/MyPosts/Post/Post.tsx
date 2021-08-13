import React from 'react';
import style from './Post.module.sass'

type PropsType = {
    id: string
    message: string
    like: number
    time: number
}

const Post = React.memo((props:PropsType) => {
    return(
        <div className={style.item}>
            <img className={style.logo_img}  src='https://fsb.zobj.net/crop.php?r=7-v795zJWgH85Pz0R8KUaEPB83xdbyUIvqhQ-WDJ2rCUE4-J34DiS8qZBrLTHWG4dql2g1gC4MIeYhczKRul_Rb--xilzH_LINSipRmJCEV83LubDPvzl-wqYdrjEmdLxpYuC5nXj1WgVRQQ'/>
            <span>
                {props.message}
            </span>
            <div> like {props.like}</div>

        </div>
    )
})

export default Post;