import logo from './logo.svg';
import './App.css';
import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import HeaderComponent from './components/HeaderComponent';
import FooterComponent from './components/FooterComponent';
import Welcome from './components/Welcome'
import UserRegisterComponent from './components/UserRegisterComponent';
import UserLoginComponent from './components/UserLoginComponent'


function App() {
  return (

    <div  >
      <Router>
      <HeaderComponent />
                <div className="container">
                  <Switch>
                  <Route path="/" exact component={Welcome}></Route>
                  <Route path="/userRegisterComponent" component={UserRegisterComponent}></Route>
                  <Route path="/userLoginComponent" component={UserLoginComponent}></Route>
                 

                  </Switch>
                </div>
                <FooterComponent/>
      </Router>
    </div>
   
  );
}

export default App;
