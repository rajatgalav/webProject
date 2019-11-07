
import React, { Component } from 'react';
import { Link } from 'react-router';
import '../css/index.scss';

class NavBar extends Component {
    render() {
      return (
        <div>
          <div className="navbar">
            <ul>
              <li className="nav-item">
                <a href="#Feed">Feed</a>
              </li>
              <li className="nav-item">
                <a href="#Profile">Profile</a>
              </li>
              <li className="nav-item">
                <a href="#AboutUs">AboutUs</a>
              </li>
            </ul>
          </div>
          {/*<div className="navbar">
            <Link to="/">Feed</Link>
            <Link to="/profile">Profile</Link>
            <Link to="/about">AboutUs</Link>
          </div>*/}
        </div>
      );
  
    }
  
  }
  
  export default NavBar;