import React from 'react';
import c from './Post.module.css';

type PropsType = {
    message: string
    like: number
    time: number
}

const Post:React.FC <PropsType> = (props) => {
    const {message,like, time} = props

    return(
        <div className={c.item}>
            <img className={c.logo_img}  src='https://fsb.zobj.net/crop.php?r=7-v795zJWgH85Pz0R8KUaEPB83xdbyUIvqhQ-WDJ2rCUE4-J34DiS8qZBrLTHWG4dql2g1gC4MIeYhczKRul_Rb--xilzH_LINSipRmJCEV83LubDPvzl-wqYdrjEmdLxpYuC5nXj1WgVRQQ'/>
            <span>
                {props.message}
            </span>
            <div> like {props.like}</div>

        </div>
    )
}

export default Post;