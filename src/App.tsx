import React from 'react';
import { useEffect, useState } from 'react';
import './stylesheets/App.css';
import { FeedView } from './components/templates/FeedView';
import Header from './components/atoms/Header';
import Timeline from './pages/Timeline';
import BackgroundRandomCircles from './components/atoms/BackgroundRandomCircles';
import BackgroundTriangles from './components/atoms/BackgroundTriangles';
import { DebugInfo } from './components/atoms/DebugInfo';
import { GlobalStyle } from './styled/Global';
import { isPostCentered } from './pages/Timeline';
import Effect from './components/atoms/Effect';
import { useGetAlldiaryQuery } from './generated/graphql';

const App = () => {
  return (
    <div className="App">
    {/* <Effect></Effect> */}
    <Animation></Animation>
    <DebugInfo></DebugInfo>
    <GlobalStyle />
    <Timeline></Timeline>
    </div>
  );
}

export default App