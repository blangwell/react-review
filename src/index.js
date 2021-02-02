import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Hello from './Hello';
import Post from './Post';
import reportWebVitals from './reportWebVitals';

const post = {
  title: "Are lanterns gay?",
  author: "JK Rowling",
  body: "Yes, yes as a matter of fact they are indeed.",
  comments: ["wow, so brave", "yass gaga", "liberal media at its finest"]
}

ReactDOM.render(
  <React.StrictMode>
    <Hello name="Kimber" age={29}/>
    <Post post={post}/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
