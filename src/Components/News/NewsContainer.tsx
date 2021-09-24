import React from 'react'
import News from "./News";
import {compose} from "redux";
import {withAuthRedirect} from "../../HOC/withAuthRedirect";


const NewsContainer = ()=> {
    return (
        <News/>
    )
}

export default compose<React.ComponentType>(withAuthRedirect)(NewsContainer)