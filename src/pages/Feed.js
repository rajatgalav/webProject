
import React, { Component } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import Bubbles from '../images/great-bubbles.jpg';
import Lion from '../images/lion-king.jpg';
import Shimla from '../images/shimla-mountain.jpg';
import NavBar from './navbar';
import '../css/index.scss';

class Feed extends Component {

  render() {
    return (
      <div>
        <NavBar />
        <Carousel id="Feed" showThumbs={false} showStatus={false} autoPlay infiniteLoop>
          <div>
            <img src={Shimla} />
            <p className="legend">Legend 1</p>
          </div>
          <div>
            <img src={Lion} />
            <p className="legend">Legend 2</p>
          </div>
          <div>
            <img src={Bubbles} />
            <p className="legend">Legend 3</p>
          </div>
        </Carousel>
        <div id="Profile">
          <span>hello</span>
        </div>
        <div id="AboutUs">
          <span>hello</span>
        </div>
      </div>
    );
  } 
}
  
export default Feed;