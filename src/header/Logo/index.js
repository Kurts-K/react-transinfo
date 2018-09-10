import React, { Component } from 'react'; 
import '../style_header.css';				  
var logo = require('./logo.gif')         

class Logo extends Component {           
  render() {                             
    return (
      <div className="logo">
      <a href="index.html">
       	<img src={logo} alt="logo" />
      </a>
      </div>
    );
  }
}

export default Logo;


