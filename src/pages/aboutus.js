
import React, { Component } from 'react';
import MyTemplate from './mytemplate';
import { connect } from 'react-redux';


class AboutUs extends Component {

    componentDidMount() {
      this.props.dispatch(this.myAction());
    }

    myAction = () => ({type: "FETCH_USERS_FULFILLED", payload:{"log": 1}})

    render() {
  
      return (
        <MyTemplate title="About Us"/>
      );
  
    }
  
  }


const mapStateToProps = function(state) {
  return {
    profile: state
  }
}
  
  export default connect(mapStateToProps)(AboutUs);