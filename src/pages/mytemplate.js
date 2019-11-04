
import React, { Component } from 'react';
import NavBar from './navbar';

class MyTemplate extends Component {

    render() {
  
      return (
        <div>

            <NavBar />

            <p className="page-info">

            This is the {this.props.title} page

            </p>

        </div>
      );
  
    }
  
  }
  
  export default MyTemplate;