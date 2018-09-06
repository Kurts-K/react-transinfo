import React, { Component } from 'react';
import QuickStart from './../QuickStart'
import './style_globasSearh.css'
import InputLoad from './InputLoad.js'

class GlobalSearch extends Component {




	render() {

		return (
			<div>
				<QuickStart />

				<div class="form-group">
				<h1>ПОИСК ГРУЗОВ И ТРАНСПОРТА</h1>
				<form>


		<div className="row">

			<div className="col-lg-7">

				<div className="load">
					<div className="select_loading">
					<label  htmlFfor="select_loading">Загрузка </label>
					<select className="form-control-sm" id="select_loading">
						<InputLoad value={'by'} country={'Беларусь'} />
						<InputLoad value={'ru'} country={'Россия'} />
						<InputLoad value={'ua'} country={'Украина'} />
						<InputLoad value={'kz'} country={'Казахстан'} />
						
					</select>
					<input type="text" name="rad_sloading" className="rad" placeholder="км" disabled="disabled" />
					</div>

					
					<div clssName="select_unloading">
					<label htmlFfor="select_unloading">Разгрузка</label>
					<select className="form-control-sm" id="select_unloading">
						<InputLoad value={'by'} country={'Беларусь'} />
						<InputLoad value={'ru'} country={'Россия'} />
						<InputLoad value={'ua'} country={'Украина'} />
						<InputLoad value={'kz'} country={'Казахстан'} />
					</select>
					<input type="text" name="rad_unloading" className="rad" placeholder="км" disabled="disabled" />
					</div>
				</div>

			</div>



			<div className="col-lg-5">


					<div className="type_bodywork">
					<ul id="type_bodywork">
					<label htmlFfor="type_bodywork">Тип кузова</label>
						<li>
					<input type="checkbox" name="tent" id="tent" />
					<label htmlFfor="tent">Тент</label>
						</li>
						<li>
					<input type="checkbox" name="ref" id="ref" />
					<label htmlFfor="ref">Рефрижератор</label>
						</li>
						<li>
					<input type="checkbox" name="micro" id="micro" />
					<label htmlFfor="micro">Микроавтобус</label>
						</li>
						<li>
					<input type="checkbox" name="fur" id="fur" />
					<label htmlFfor="fur">Фургон</label>
						</li>
					</ul>
					</div>

			</div>

		</div>


					
					
		<div className="row">
			<div className="col-lg-12">

					<div className="weightAmount">
					<label htmlFor="weight">Вес</label>
					<input type="text" name="weight" className="weight" placeholder="Тонн" id="weight" />

					<label htmlFor="weight">М3</label>
					<input type="text" name="amount" className="amount" placeholder="м3" id="amount" />
					</div>
			</div>



					
			<div className="col-lg-12">
					<div className="date">
						<label htmlFor="from">Когда: от</label>
						<input type="date" name="from" className="from" id="from" />

						<label htmlFor="to">до</label>
						<input type="date" name="to" className="to" id="to" />
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
