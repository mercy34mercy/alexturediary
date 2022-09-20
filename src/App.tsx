import React from 'react';
import logo from './logo.svg';
import './App.css';
import { FeedView } from './FeedView';
import Header from './Header';


const App = () => {
  return (
    <div className="App">
      <FeedView></FeedView>
      <Header></Header>
    </div>
  );
}

export default App;
