import React from 'react';
import {compose} from "redux";
import {withAuthRedirect} from "../../HOC/withAuthRedirect";


const Music = () => {

    return (
        <div>
            <h1>Music</h1>
        </div>
    )
}

export default compose<React.ComponentType>(withAuthRedirect)(Music)