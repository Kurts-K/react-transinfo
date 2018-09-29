import React, { Component } from 'react';
import QuickStart from './../QuickStart'
import './style_globasSearh.css'

import Country from './Country.js'
import Region from './Region.js'




class GlobalSearch extends Component {


	render() {

		return (
			<div>

				<QuickStart AddCargo={this.props.AddCargoVisible}
				
				 />
				

				<div class="form-group">
				<h1>ПОИСК ГРУЗОВ И ТРАНСПОРТА</h1>
				
				<form onChange={this.props.handleChangeTextInput}>


		<div className="row">

			<div className="col-lg-7">

				<div className="load">
					<div className="select_loading">
					<label  htmlFfor="select_loading">Загрузка </label>
					<Country  
					loadunload={'countryLoad'} 
					selectCountry={this.props.selectCountry}/>

					
					<Region 
					loadunload={'regionLoad'} 
					countryLoad={this.props.countryLoad} 
					selectCountry={this.props.selectCountry}  />

					</div>

					<div clssName="select_unloading">
					<label htmlFfor="select_unloading">Разгрузка</label>
					<Country  
					loadunload={'countryUnload'} 
					selectCountry={this.props.selectCountry} />
					
					<Region 
					loadunload={'regionUnload'} 
					countryUnload={this.props.countryUnload} 
					selectCountry={this.props.selectCountry} />
					
					</div>

				</div>

			</div>



			<div className="col-lg-5">


					<div className="type_bodywork">
						<ul id="type_bodywork">
							<label htmlFfor="type_bodywork">Тип кузова</label>
								<li>
							<input 
							type="checkbox" 
							name="SearchCargoType_Tent" 
							id="SearchCargoType_Tent" />
							<label htmlFfor="SearchCargoType_Tent">Тент</label>
								</li>
								<li>
							<input 
							type="checkbox" 
							name="SearchCargoType_Ref" 
							id="SearchCargoType_Ref" />
							<label htmlFfor="SearchCargoType_Ref">Рефрижератор</label>
								</li>
								<li>
							<input 
							type="checkbox" 
							name="SearchCargoType_Micro" 
							id="SearchCargoType_Micro" />
							<label htmlFfor="SearchCargoType_Micro">Микроавтобус</label>
								</li>
								<li>
							<input 
							type="checkbox" 
							name="SearchCargoType_Fur" 
							id="SearchCargoType_Fur" />
							<label htmlFfor="SearchCargoType_Fur">Фургон</label>
								</li>
						</ul>
					</div>

			</div>

		</div>


					
					
		<div className="row">
			<div className="col-lg-12">

					<div className="weightAmount">
					<label htmlFor="SearhCargoWeight">Вес</label>
					<input type="text" name="SearhCargoWeight" id="SearhCargoWeight" className="weight" placeholder="Тонн" id="weight" />

					<label htmlFor="SearhCargoAmount">М3</label>
					<input type="text" name="SearhCargoAmount" id="SearhCargoAmount" className="amount" placeholder="м3" id="amount" />
					</div>
			</div>



					
			<div className="col-lg-12">
					<div className="date">
						<label htmlFor="SearhCargoDateFrom">Когда: от</label>
						<input type="date" name="SearhCargoDateFrom" className="from" 
						id="SearhCargoDateFrom" />

						<label htmlFor="SearhCargoDateTo">до</label>
						<input type="date" name="SearhCargoDateTo" className="to" 
						id="SearhCargoDateTo" />
					</div>
			</div>

		</div>



		<div className="row">

			<div className="col-lg-5"></div>
			<div className="col-lg-3">
				<button className="btn btn-warning btn-sm">Найти груз</button>
			</div>
			<div className="col-lg-3">
				<button className="btn btn-success btn-sm">Найти транспорт</button>
			</div>
		</div>



				</form>

			</div>

			</div>
			)


	}
}

export default GlobalSearch;
