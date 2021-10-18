import React from 'react';
import {compose} from "redux";
import {withAuthRedirect} from "../../HOC/withAuthRedirect";


const Setting = () => {
    return(
        <div>
            <h1>Setting</h1>
        </div>
    )
}

export default compose<React.ComponentType>(withAuthRedirect)(Setting)