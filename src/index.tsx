import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';



export let DialogsData = [
    {id: 1, name: 'dmitriy'},
    {id: 2, name: 'vicrotiy'},
    {id: 3, name: 'sasha'},
    {id: 4, name: 'leonid'},
    {id: 5, name: 'victor'},
    {id: 6, name: 'john'}

] //Dialogs.tsx

export let MessagesData = [
    {id: 1, message: 'hello'},
    {id: 2, message: 'hi'},
    {id: 3, message: 'yo'}
]  //Dialogs.tsx

export const propsPost = [
    {id: 1, message: 'Hi, how are you', like: 4, time: 7},
    {id: 2, message: 'It,s my first post', like: 22, time: 19},
    {id: 3, message: 'yo', like: 14, time: 12},
    {id: 4, message: 'it-camasutra', like: 11, time: 90}
]  //MyPosts.tsx

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
