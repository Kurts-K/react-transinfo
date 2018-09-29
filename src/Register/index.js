import React, { Component } from 'react';
import './Register_style.css' 


class Register extends Component { 
	render() {
		return(
			<div>
				<h2>Регистрация</h2>
				<p><a href="#" onClick={this.props.onRegister}>Главная страница</a> | <a href="#" className="linkReg">Регистрация</a></p>
				<p>Вся поля являются обязательными</p>

					<form onChange={this.props.handleChangeTextInput}>
					<div className="row">
					<div className="col-lg-3"><label htmlFor="RegFirstName">Имя</label></div>
					<div className="col-lg-6"><input className="form-control" size="30" type="text" name="RegFirstName" id="RegFirstName" /></div>
					</div>


					<div className="row">
					<div className="col-lg-3"><label htmlFor="RegLastName">Фамилия</label></div>
					<div className="col-lg-6"><input className="form-control" type="text" name="RegLastName" id="RegLastName" /></div>
					</div>

					<div className="row">
					<div className="col-lg-3"><label htmlFor="RegEmail">E-mail</label></div>
					<div className="col-lg-6"><input className="form-control" type="email" name="RegEmail" id="RegEmail" /></div>
					</div>

					<div className="row">
					<div className="col-lg-3"><label htmlFor="RegFone">Телефон</label></div>
					<div className="col-lg-6"><input className="form-control" type="text" name="RegFone" id="RegFone" /></div>
					</div>

					<div className="row">
					<div className="col-lg-3"><label htmlFor="RegPassword1">Пароль</label></div>
					<div className="col-lg-6"><input className="form-control" type="RegPassword1" name="RegPassword1" id="RegPassword1" /></div>
					</div>

					<div className="row">
					<div className="col-lg-3"><label htmlFor="RegPassword2">Повторный ввод пароля</label></div>
					<div className="col-lg-6"><input className="form-control" type="password" name="RegPassword2"  id="RegPassword2" /></div>
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