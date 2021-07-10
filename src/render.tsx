import ReactDOM from "react-dom";
import React from "react";
import App from "./App";
import {store} from "./Redux/store";
import {BrowserRouter} from "react-router-dom";
import { Provider } from "./StoreContext";


export const renderTree = () => {
    ReactDOM.render(
        <React.StrictMode>
            <BrowserRouter>
                <Provider store={store}>
                    <App/>
                </Provider>
            </BrowserRouter>
        </React.StrictMode>,document.getElementById('root')
    );
}