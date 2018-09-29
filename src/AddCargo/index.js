import React, { Component } from 'react';
import './AddCargo-style.css' 
import Country from '../GlobalSearch/Country.js'
import Region from '../GlobalSearch/Region.js'


class AddCargo extends Component { 
	render() {
		return(
			<div>
				<h2>Добавить груз</h2>
<p><a href="#" onClick={this.props.onRegister}>Главная страница </a> | 
	<a href="#" className="linkReg"> Добавить груз</a></p>
				<p>Поля отмеченные (*), обязательны для заполнения.</p>

					<form onChange={this.props.handleChangeTextInput}>
					<div className="row">

					<div className="col-lg-3">
						<label htmlFor="AddCargoName">Наименование груза</label>
						<input type="text" name="AddCargoName" id="AddCargoName" />
					</div>

					<div className="col-lg-3">
						<label htmlFor="AddCargoType">Тип кузова</label>
						<input type="text" name="AddCargoType" id="AddCargoType" />
					</div>

					<div className="col-lg-6">
						<p>Дата готовности груза к загрузке:</p>
						<label htmlFor="AddCargoDateLoad">C</label>
						<input type="date" name="AddCargoDateLoad" id="AddCargoDateLoad" />

						<label htmlFor="AddCargoDateUnload">По</label>
						<input type="date" name="AddCargoDateUnload" id="AddCargoDateUnload" />
					</div>
      				</div>

      				<div className="row">
	      				<div className="col-lg-3">
							<label htmlFor="AddCargoWeight">Вес, т</label>
							<input type="text" name="AddCargoWeight" id="AddCargoWeight" />
						</div>

						<div className="col-lg-3">
							<label htmlFor="AddCargoAmount">Объем, м3</label>
							<input type="text" name="AddCargoAmount" id="AddCargoAmount" />
						</div>


						<div className="col-lg-4">
							<div className="row">
								<div className="col-lg-3"></div>
								<label htmlFor="AddCargoСonsolidated ">Сборный груз</label>
								<input type="checkbox" name="AddCargoСonsolidated" id="AddCargoСonsolidated" />
							</div>

							<div className="row">
									<div className="col-lg-3"></div>
									<label htmlFor="AddCargoUrgently">Срочно</label>
									<input type="checkbox" name="AddCargoUrgently" id="AddCargoUrgently" />
							</div>
						</div>
					</div>




					<div className="row">
						<div className="col-lg-6">
							<label>Место загрузки (страна):</label>
							<Country  
							loadunload={'AddCargoСountryLoad'} 
							selectCountry={this.props.selectCountry}/>
							<label>Место загрузки (город):</label>
							<Region 
							loadunload={'AddCargoRegionLoad'} 
							AddCargoСountryLoad={this.props.AddCargoСountryLoad} 
							selectCountry={this.props.selectCountry}  />

						</div>
						<div className="col-lg-6">
							<label>Место разгрузки (страна):</label>
							<Country  
							loadunload={'AddCargoCountryUnload'} 
							selectCountry={this.props.selectCountry}/>

							<label>Место разгрузки (город):</label>
							<Region 
							loadunload={'AddCargoRegionUnload'} 
							AddCargoCountryUnload={this.props.AddCargoCountryUnload} 
							selectCountry={this.props.selectCountry}  />

						</div>
					</div>





					</form>
					

			</div>


			);
	}

 }


export default AddCargo