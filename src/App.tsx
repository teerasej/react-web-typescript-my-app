import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { CircularProgress } from '@material-ui/core';
import LoginPage from './pages/login-page/LoginPage';

function App() {

  const [onLoading, setOnLoading] = useState(true);
  const [alreadySingIn, setAlreadySingIn] = useState(false);
  
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

    if(alreadySingIn) {
      return (
        <div>app</div>
      );
    } else {
      return (
        <LoginPage/>
      );
    }
    
  }
  
}

export default App;
