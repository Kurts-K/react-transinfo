import React, { Component } from 'react';
import './style_MasterRightBanner.css';
var banner = require('./banner.gif');


class MasterRightBanner extends Component {           
  render() {                             
    return (
      <div className="banner">
      
       	<img src={banner} alt="banner" />
      
      </div>
    );
  }
}


export default MasterRightBanner;


