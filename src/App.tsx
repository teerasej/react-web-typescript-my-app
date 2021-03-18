import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { CircularProgress } from '@material-ui/core';

function App() {

  const [onLoading, setOnLoading] = useState(true);
  
  useEffect(() => {
    // check token 

    setOnLoading(false);
  }, [])


  if(onLoading) {
    return (
      <div className="App">
        <CircularProgress/>
      </div>
    );
  } else {
    return (
      <div>ok</div>
    );
  }
  
}

export default App;
