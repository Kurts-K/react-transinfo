import React, { Component } from 'react';
import './AddCargo-style.css' 


class AddCargo extends Component { 
	render() {
		return(
			<div>
				<h2>Добавить груз</h2>
<p><a href="#" onClick={this.props.onRegister}>Главная страница </a> | 
	<a href="#" className="linkReg"> Добавить груз</a></p>
				<p>Поля отмеченные (*), обязательны для заполнения.</p>

					<form>
					<div className="row">

					<div className="col-lg-3">
						<label htmlFor="cargoName">Наименование груза</label>
						<input type="text" name="cargoName" id="cargoName" />
					</div>

					<div className="col-lg-3">
						<label htmlFor="cargoType">Тип кузова</label>
						<input type="text" name="cargoType" id="cargoType" />
					</div>

					<div className="col-lg-6">
						<p>Дата готовности груза к загрузке:</p>
						<label htmlFor="dateLoad">C</label>
						<input type="date" name="dateLoad" id="dateLoad" />

						<label htmlFor="dateUnload">По</label>
						<input type="date" name="dateUnload" id="dateUnload" />
					</div>
      				</div>

      				<div className="row">
      					<div className="col-lg-3">
						<label htmlFor="cargoWeight">Вес, т</label>
						<input type="text" name="cargoWeight" id="cargoWeight" />
					</div>

					<div className="col-lg-3">
						<label htmlFor="cargoAmount">Объем, м3</label>
						<input type="text" name="cargoAmount" id="cargoAmount" />
					</div>


					<div className="col-lg-4">
						<div className="row">
						<div className="col-lg-3"></div>
						<label htmlFor="cargoAmount">Сборный груз</label>
						<input type="checkbox" name="cargoAmount" id="cargoAmount" />
					</div>
					<div className="row">
						<div className="col-lg-3"></div>
						<label htmlFor="cargoAmount">Срочно</label>
						<input type="checkbox" name="cargoAmount" id="cargoAmount" />
					</div>
					</div>




      				</div>





					</form>
					

			</div>


			);
	}

 }


export default AddCargo