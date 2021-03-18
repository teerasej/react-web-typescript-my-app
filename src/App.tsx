import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useHistory
} from "react-router-dom";
import RegisterPage from './pages/register-page/RegisterPage';
import LoginPage from './pages/login-page/LoginPage';
import Main from './pages/Main';

function App() {


    return (
      <Router>
        <Switch>
          <Route path="/login">
            <LoginPage />
          </Route>
          <Route path="/signup">
            <RegisterPage />
          </Route>
          <Route path="/">
            <Main/>
          </Route>
        </Switch>
      </Router>
    );

  }



export default App;
