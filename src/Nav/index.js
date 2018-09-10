import React, { Component } from 'react'; 
import './style_nav.css';				  


class Nav extends Component {            
  render() {                              
    return (
      <div>
      <ul className="nav justify-content-center">
      	<li><a href="#">Грузы</a></li>
      	<li><a href="#">Транспорт</a></li>
      	<li><a href="#">Тендеры</a></li>
      	<li><a href="#">Каталог</a></li>
      	<li><a href="#">Зона надежности</a></li>
      	<li><a href="#">Рассчет расстояний</a></li>
      	<li><a href="#">Новости</a></li>
      	<li><a href="#">Форум</a></li>
      	<li><a href="#">Полезное</a></li>
      	<li><a href="#">Услуги и цены</a></li>
      	<li><a href="#">Контакты</a></li>
      </ul>
      </div>
    );
  }
}

export default Nav;