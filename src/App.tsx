import React from 'react';
import { useEffect, useState } from 'react';
import './stylesheets/App.css';
import { FeedView } from './components/templates/FeedView';
import Header from './components/atoms/Header';
import Timeline from './pages/Timeline';
import Animation from './components/atoms/animation';
import Triangle from './components/atoms/Triangle';
import { DebugInfo } from './components/atoms/DebugInfo';
import { GlobalStyle } from './styled/Global';
import { isPostCentered } from './pages/Timeline';
import Effect from './components/atoms/Effect';
import { useGetAlldiaryQuery } from './generated/graphql';


const App = () => {
    const { data, error, loading } = useGetAlldiaryQuery()
    return (
        <div className="App">
            <Effect></Effect>
            <DebugInfo></DebugInfo>
            <GlobalStyle />
            <Timeline></Timeline>
        </div>
    );
}

export default App