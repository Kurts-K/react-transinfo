import React, { Component } from 'react'; 
import LeftNavLi from './LeftNavLi';
import './style_LeftNavLi.css';


class LeftNav extends Component {
	render() {
		return(
			
			<ul>
				<LeftNavLi liName={'Добавьте документы'} />
				<LeftNavLi liName={'Грузы'} />
				<LeftNavLi liName={'Транспорт'} />
				<LeftNavLi liName={'Избранные заявки и архив'} />
				<LeftNavLi liName={'Мои сообщения'} />
				<LeftNavLi liName={'Каталог предприятий'} />
				<LeftNavLi liName={'Тендеры и запросы'} />
				<LeftNavLi liName={'Автопарки и ставки'} />
				<LeftNavLi liName={'Система заявлений о долге'} />
				<LeftNavLi liName={'Моя учетная запись/Настройки'} />
			</ul>
			
			);
	}


}


export default LeftNav;