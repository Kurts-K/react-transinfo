import React, { Component } from 'react';
import './style_UserInfo.css'
import LeftNav from '.././LeftNav'


class UserInfo extends Component {

	render() {

		return(
		<div>
			<div className="userInfo">
				<div className="btn-group">
				<a className="my_room btn btn-primary">Личный кабинет</a>
				<a className="my_page btn btn-primary">Моя страница</a>
				</div>
				<p className="user_name">{this.props.userName}</p>
				<p className="user_company">{this.props.userСompany}</p>
				<p className="user_id">Ваш ID - {this.props.userId}</p>
				<p className="buy_tarif">Некогда объяснять, купи 
				<a href="#"> тарифный план </a> со скидкой 146%
				</p>
			</div>

			<LeftNav />


		</div>
			);


	}

}

export default UserInfo