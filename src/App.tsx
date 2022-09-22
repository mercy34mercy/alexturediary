import React from 'react';
import './stylesheets/App.css';
import Timeline from './pages/Timeline';
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