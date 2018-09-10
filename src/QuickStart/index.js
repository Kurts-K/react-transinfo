import React, { Component } from 'react';
import './style_quickStart.css'

function QuickStart({AddCargo}) {
	return (
			<div className="row">
				<div className="col-lg-4">
				<button onClick={AddCargo} className="btn btn-warning btn-lg btn-block">Add Cargo</button>
				</div>
				<div className="col-lg-4">
				<button className="btn btn-success btn-lg btn-block disabled ">Add Transport</button>
				</div>
				<div className="col-lg-4">
				<button className="btn btn-primary btn-lg btn-block disabled ">Distance Calc</button>
				</div>
			</div>

		)
}


export default QuickStart;