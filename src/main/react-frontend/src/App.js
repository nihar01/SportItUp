import logo from './logo.svg';
import './App.css';
import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import HeaderComponent from './components/HeaderComponent';
import FooterComponent from './components/FooterComponent';
import Welcome from './components/Welcome'
import UserRegisterComponent from './components/UserRegisterComponent';
import UserSignInComponent from './components/UserSignInComponent'
import VenueList from './components/VenueList';
import 'bootstrap/dist/css/bootstrap.min.css';
import AdminDashboard from "./components/AdminDashboard"
import Venueshow from './components/Venueshow';
import BookingList from './components/BookingList';
import DoBooking from './components/DoBooking';
import ActivityDetails from "./components/ActivityDetails"
import ActivityList from "./components/ActivityList"
import AddActivity from "./components/AddActivity"

class App extends React.Component {
  
  constructor(props){
    super(props)

  let isloggedIn = false
  let uId
  this.state = {
    isloggedIn ,
    uId
    
    
  }
  this.handleLogin = this.handleLogin.bind(this)
}

  handleLogin(loggedIn,Id) {
    this.setState({ isloggedIn: loggedIn , uId: Id});
    
  }
  
  render(){
  return (
  
    <div  >
      <Router>
      <HeaderComponent  isloggedIn={this.state.isloggedIn}/>
                <div className="container">
                  <Switch>
                  <Route path="/" exact component={UserSignInComponent}></Route>
                  <Route path="/Welcome"   render={()=> <Welcome isloggedIn={this.state.isloggedIn}/>}></Route>
                  <Route path="/userRegisterComponent" component={UserRegisterComponent}></Route>
                  <Route path="/userSignInComponent" render={(props) => <UserSignInComponent {...props} handleLog = {this.handleLogin} />}></Route>
                  {/* <Route path="/userSignInComponent" component={UserSignInComponent}></Route> */}
                  <Route path="/VenueList" render={()=> <VenueList uId={this.state.uId} isloggedIn={this.state.isloggedIn}/>}></Route>
                  <Route path="/AdminDashboard" component={AdminDashboard}></Route>
                  <Route path="/Venueshow" component={Venueshow}></Route>
                  <Route path="/BookingList" render={()=> <BookingList uId={this.state.uId} isloggedIn={this.state.isloggedIn}/>}></Route>
                  <Route path="/DoBooking" component={DoBooking}></Route>
                  <Route path="/AddActivity" component={AddActivity}></Route>
                  <Route path="/ActivityList" component={ActivityList}></Route>
                  <Route path="/ActivityDetails" component={ActivityDetails}></Route>
                  </Switch>
                </div>
        <FooterComponent/>
      </Router>
    </div>
   
  );
  }
}

export default App;
