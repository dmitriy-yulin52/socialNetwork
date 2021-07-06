import ReactDOM from "react-dom";
import React from "react";
import App from "./App";
import {store} from "./Redux/state";

export const renderTree = () => {
    ReactDOM.render(
        <React.StrictMode>
            <App store={store} dispatch={store.dispatch.bind(store)}/>
        </React.StrictMode>,
        document.getElementById('root')
    );
}