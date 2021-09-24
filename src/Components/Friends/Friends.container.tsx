import React from 'react'
import Friends from "./Friends";
import {compose} from "redux";
import {withAuthRedirect} from "../../HOC/withAuthRedirect";



const FriendsContainer = React.memo(()=> {
    return(
        <Friends/>
    )
})


export default compose<React.ComponentType>(withAuthRedirect)(FriendsContainer)