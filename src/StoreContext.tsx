import React from 'react';
import {StoreType} from "./Redux/store";


const StoreContext = React.createContext({} as StoreType)

type ProviderType = {
    store: StoreType
    children: React.ReactNode
}


export const Provider = (props: ProviderType) => {

    return(
        <StoreContext.Provider value={props.store}>
        </StoreContext.Provider>
        )
}


export default StoreContext