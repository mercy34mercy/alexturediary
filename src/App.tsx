import React from 'react';
import { useEffect, useState } from 'react';
import './stylesheets/App.css';
import { FeedView } from './components/templates/FeedView';
import Header from './components/atoms/Header';
import Timeline from './pages/Timeline';
import Animation from './animation';
import Triangle from './components/atoms/Triangle';
import { DebugInfo } from './components/atoms/DebugInfo';
import { GlobalStyle } from './styled/Global';

const App = () => {
  return (
  <div className="App">
    <DebugInfo></DebugInfo>
    <GlobalStyle />
    <Timeline></Timeline>
  </div>
  );
}

export default App