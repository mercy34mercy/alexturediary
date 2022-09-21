import React from 'react';
import logo from './logo.svg';
import './stylesheets/App.css';
import { FeedView } from './components/templates/FeedView';
import Header from './Header';
import Timeline from './pages/Timeline';


const App = () => {
  return (
    <div className="App">
    <Timeline></Timeline>
    </div>
  );
}

export default App;
