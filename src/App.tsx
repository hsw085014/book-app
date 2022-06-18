/* eslint-disable */


import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import article from './article'

let title = "my first keyboard"
let summary = "I buy new keyboard. including typing video"


function App() {
  return (
    <div className="App">
      <ul>
        <Title />
        <Article />
      </ul>
    </div>
  );
};

function Title() {
  return (
    <div className='title'>
      <h4 className='titleH4'>DEVlog</h4>
    </div>
  );
};


function Article() {
  return (
    <div className='article'>
      <Link to='/article'>
        <h4>{title}</h4>
        <p>{summary}</p>
      </Link>
    </div>
  );
};

export default App;
