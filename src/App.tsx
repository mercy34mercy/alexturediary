import React from 'react';
import { useEffect, useState } from 'react';
import './App.css';
import { FeedView } from './FeedView';
import Header from './Header';
import Loading from './Loading ';

// const App = () => {
  
//   const [isLoading,setIsLoading] = useState(true)

//   return (
//     <>
//     {isLoading && <Loading/>}
//     </>
//       );
// }


const App = () => {
  return (
    <div className="App">
      <Header></Header>
      <FeedView></FeedView>
    </div>
  );
}

export default App