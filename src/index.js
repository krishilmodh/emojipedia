import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import emojipedia from './emojipedia';
const newemoji = emojipedia.map(function (emojientry) {
  return emojientry.meaning.substring(1,100)
})
console.log(newemoji);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    
  </React.StrictMode>
);
