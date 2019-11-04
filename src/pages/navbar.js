
import React, { Component } from 'react';
import { Link } from 'react-router';

class NavBar extends Component {

    render() {
  
      return (
        <div className="navbar">

            <Link to="/">Feed</Link>

            <Link to="/profile">Profile</Link>

            <Link to="/about">AboutUs</Link>

        </div>
      );
  
    }
  
  }
  
  export default NavBar;