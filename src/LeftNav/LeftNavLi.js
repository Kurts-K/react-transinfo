import React, { Component } from 'react'; 
import './style_LeftNavLi.css'

function LeftNavLi(props) {
	return(
			<li><a href="#" className="LeftNavLi">{props.liName}</a></li>
		);
}


export default LeftNavLi