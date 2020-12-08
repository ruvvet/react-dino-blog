import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// create an object
const post={title: 'the land before time',
author:'Some Dino',
body: 'once upon a time...',
comments: ["First!", "TIHI", "<3!"]
}




ReactDOM.render(
  <React.StrictMode>
    {/* pass the object into the app */}
    <App post={post}/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
