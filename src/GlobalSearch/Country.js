import React, { Component } from 'react';

import InputLoad from './InputLoad.js'


class Country extends Component {
		render() {
			return(
				<select className="form-control-sm" id={this.props.loadunload} onChange={this.props.selectCountry} >
						<InputLoad value={'by'} country={'Беларусь'} />
						<InputLoad value={'ru'} country={'Россия'}  />
						<InputLoad value={'ua'} country={'Украина'} />
						<InputLoad value={'kz'} country={'Казахстан'} />
					</select>

				)
		}
}


export default Country