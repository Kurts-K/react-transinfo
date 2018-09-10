import React, { Component } from 'react';
import './Register_style.css' 


class Register extends Component { 
	render() {
		return(
			<div>
				<h2>Регистрация</h2>
				<p><a href="#" onClick={this.props.onRegister}>Главная страница</a> | <a href="#" className="linkReg">Регистрация</a></p>
				<p>Вся поля являются обязательными</p>

					<form>
					<div className="row">
					<div className="col-lg-3"><label htmlFor="name">Имя</label></div>
					<div className="col-lg-6"><input className="form-control" size="30" type="text" name="firstName" id="name" /></div>
					</div>


					<div className="row">
					<div className="col-lg-3"><label htmlFor="lastName">Фамилия</label></div>
					<div className="col-lg-6"><input className="form-control" type="text" name="lastName" id="lastName" /></div>
					</div>

					<div className="row">
					<div className="col-lg-3"><label htmlFor="email">E-mail</label></div>
					<div className="col-lg-6"><input className="form-control" type="text" name="email" id="email" /></div>
					</div>

					<div className="row">
					<div className="col-lg-3"><label htmlFor="fone">Телефон</label></div>
					<div className="col-lg-6"><input className="form-control" type="text" name="fone" id="fone" /></div>
					</div>

					<div className="row">
					<div className="col-lg-3"><label htmlFor="password1">Пароль</label></div>
					<div className="col-lg-6"><input className="form-control" type="password" name="password1" id="password1" /></div>
					</div>

					<div className="row">
					<div className="col-lg-3"><label htmlFor="password2">Повторный ввод пароля</label></div>
					<div className="col-lg-6"><input className="form-control" type="password" name="password2"  id="password2" /></div>
					</div>

					<div className="row">
					<div className="col-lg-5">
						<button className="btn btn-success">Зарегистрироваться</button>

					</div>
					
					</div>



					</form>
					

			</div>


			);
	}

 }


export default Register