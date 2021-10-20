import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import App from "./App";

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




let users = [
    {
        name: "Dima",
        age: 10,
        address:{
            city:"Minsk",
            country: "Belarus"
        }
    },
    {
        name: "Victor",
        age: 13,
        address:{
            city:"Minsk",
            country: "Belarus"
        }
    }
]

console.log(users[0].address.country);