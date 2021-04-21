import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class HeaderComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
                 
        }
        

    }



    render() {
        return (
            <div>
                <header>
                    <nav className="navbar navbar-expand-md navbar-dark bg-dark" >
                    {/* <div><a href="" className="navbar-brand">SportItUp</a></div> */}

                    <div className="collapse navbar-collapse justify-content-between" id="navbarTogglerDemo01">
      <a className="navbar-brand" href="">Sport It Up</a>
      <img src="https://cdn.imgbin.com/8/10/4/imgbin-american-football-computer-icons-sport-ball-RYFV5vhZY4NW6XuvSHWGLF9km.jpg" style={{maxWidth:"5%"}}/>
      <ul className="navbar-nav ml-auto me-auto mb-2 mb-lg-0">
        <li className="nav-item" >
        <Link to="/">
          <a className="nav-link " aria-current="page" href="">Home</a>
          </Link>
        </li>
        <li className="nav-item">
        <Link to="/userRegisterComponent">
          <a className="nav-link " href="">Register</a>
          </Link>
        </li>
        
        <li className="nav-item">
        <Link to="/userSignInComponent">
          <a className="nav-link " href="" tabindex="-1" aria-disabled="true">Sign In</a>
        </Link>
        </li>
      
      <li className="nav-item">
        <Link to="/VenueList">
          <a className="nav-link " href="" tabindex="-1" aria-disabled="true">Venues</a>
          </Link >
        </li>
      

      <li className="nav-item">
          <a className="nav-link " href="" tabindex="-1" aria-disabled="true">Create Activity</a>
        </li>

        <li className="nav-item">
          <a className="nav-link " href="" tabindex="-1" aria-disabled="true">Events</a>
        </li>

        <li className="nav-item">
          <a className="nav-link " href="" tabindex="-1" aria-disabled="true">Bookings</a>
        </li>
      </ul>

      </div>
      <div className="collapse navbar-collapse justify-content-between" id="navbarTogglerDemo02">
      <ul className="navbar-nav ml-auto me-auto mb-2 mb-lg-0">
        <li className="nav-item">
      <form className="d-flex">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form>
      </li>
      </ul>
      </div>
      
                    </nav>
                </header>
            </div>
        )
    }
}

export default HeaderComponent
