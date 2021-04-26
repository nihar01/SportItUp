import logo from './logo.svg';
import './App.css';
import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import HeaderComponent from './components/HeaderComponent';
import FooterComponent from './components/FooterComponent';
import Welcome from './components/Welcome'
import UserRegisterComponent from './components/UserRegisterComponent';
import UserSignInComponent from './components/UserSignInComponent'
import VenueList from './components/VenueList';
import 'bootstrap/dist/css/bootstrap.min.css';
import AdminDashboard from "./components/AdminDashboard"
import Venueshow from './components/Venueshow';

function App() {
  return (

    <div  >
      <Router>
      <HeaderComponent />
                <div className="container">
                  <Switch>
                  <Route path="/" exact component={Welcome}></Route>
                  <Route path="/userRegisterComponent" component={UserRegisterComponent}></Route>
                  <Route path="/userSignInComponent" component={UserSignInComponent}></Route>
                  <Route path="/VenueList" component={VenueList}></Route>
                  <Route path="/AdminDashboard" component={AdminDashboard}></Route>
                  <Route path="/Venueshow" component={Venueshow}></Route>
                  
                  </Switch>
                </div>
        <FooterComponent/>
      </Router>
    </div>
   
  );
}

export default App;
