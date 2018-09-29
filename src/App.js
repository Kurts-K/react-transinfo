import React, { Component } from 'react';
import Logo from './header/Logo';
import Region from './header/Region';
import Nav from './Nav';
import Auth from './Auth';
import GlobalSearch from './GlobalSearch';
import MasterRightBanner from './MasterRightBanner';
import UserInfo from './UserInfo';
import './app.css';    
import Register from './Register'
import AddCargo from './AddCargo'
import axios from 'axios'

class App extends Component {

 
  state = {

  //Видимость компонентов
    LeftAuthVisible: Auth,
    CenterSearchVisible: 'Searh',

 //Авторизация
    AuthEmail: '',
    AuthPassword: '',
    AuthAlienPc: '',


//Регистрация
    RegFirstName: '',
    RegLastName: '',
    RegEmail: '',
    RegFone: '',
    RegPassword1: '',
    RegPassword2: '',


//Данные пользователя в Userinfo
    userName: 'Курц Коснтантин',
    userСompany: 'Рога и Копыта',
    userId: '777',


//GlobalSearh параметры
    countryLoad: '',
    countryUnload: '',

    regionLoad: '',
    regionUnload: '',

    SearchCargoType_Tent: '',
    SearchCargoType_Ref: '',
    SearchCargoType_Micro: '',
    SearchCargoType_Fur: '',

    SearhCargoWeight: '',
    SearhCargoAmount: '',

    SearhCargoDateFrom: '',
    SearhCargoDateTo: '',

//Данные добавления нового груза
    AddCargoName: '',
    AddCargoType: '',

    AddCargoDateLoad: '',
    AddCargoDateUnload: '',

    AddCargoWeight: '',
    AddCargoAmount: '',

    AddCargoСonsolidated: '',
    AddCargoUrgently: '',

    AddCargoСountryLoad: '',
    AddCargoCountryUnload: '',

    AddCargoRegionLoad: '',
    AddCargoRegionUnload: '',

    

   
  }

  
 


 onSubmited = () => {
    this.setState({LeftAuthVisible: UserInfo});
}

onRegister = () => {
if (this.state.CenterSearchVisible == 'Searh') {
  this.setState({CenterSearchVisible: 'Register'})
} else 
  this.setState({CenterSearchVisible: 'Searh'})
}

AddCargoVisible = (event) => {
   this.setState({CenterSearchVisible: 'AddCargo'})
   event.preventDefault();
}

  handleChangeTextInput = (event) => {
    var tar = event.target.name;
    var val = event.target.value;
    if (event.target.type == 'checkbox') {
    this.setState({[tar]: event.target.checked});
  } else if (event.target.type != 'checkbox')

    this.setState({[tar]: val});
}



selectCountry = (event) => {
  switch(event.target.id) {
    case 'countryLoad' : this.setState({countryLoad: event.target.value}); break;
    case 'countryUnload' : this.setState({countryUnload: event.target.value}); break;
    case 'regionLoad' : this.setState({regionLoad: event.target.value}); break;
    case 'regionUnload' : this.setState({regionUnload: event.target.value}); break;

  case 'AddCargoСountryLoad' : this.setState({AddCargoСountryLoad: event.target.value}); break;
  case 'AddCargoCountryUnload' : this.setState({AddCargoCountryUnload: event.target.value}); break;
  case 'AddCargoRegionLoad' : this.setState({AddCargoRegionLoad: event.target.value}); break;
  case 'AddCargoRegionUnload' : this.setState({AddCargoRegionUnload: event.target.value}); break;

   
   
  }
}







  render() {
    return (
      <div className="App container-fluid">

      <div className="row">
      	<div className="col-lg-4"><Logo /></div>
      	<div className="col-lg-4"></div>
      	<div className="col-lg-4"><Region /></div>
      </div>

	  <Nav />

	   <div className="row">


      	<div className="col-lg-3">
        {this.state.LeftAuthVisible == Auth && 
        <Auth 
        CenterSearchVisible={this.state.CenterSearchVisible}
        onSubmited={this.onSubmited} 
        onRegister={this.onRegister}
        handleChangeTextInput = {this.handleChangeTextInput}
         /> ||
        this.state.LeftAuthVisible == UserInfo &&
        <UserInfo 
        userName={this.state.userName}
        userСompany={this.state.userСompany}
        userId={this.state.userId}/>}
        </div>


      	


        <div className={this.state.CenterSearchVisible == 'AddCargo' ? "col-lg-9" : "col-lg-6" }>
        {this.state.CenterSearchVisible == 'Searh'   &&

        <GlobalSearch
        AddCargoVisible = {this.AddCargoVisible}
        selectCountry={this.selectCountry} 
        countryLoad={this.state.countryLoad} 
        countryUnload={this.state.countryUnload}
        handleChangeTextInput={this.handleChangeTextInput} />  ||
        this.state.CenterSearchVisible == 'Register'&&

        <Register
        handleChangeTextInput={this.handleChangeTextInput}
        onRegister={this.onRegister} />              ||
        this.state.CenterSearchVisible == 'AddCargo' &&

        <AddCargo
        selectCountry={this.selectCountry} 
        AddCargoСountryLoad={this.state.AddCargoСountryLoad} 
        AddCargoCountryUnload={this.state.AddCargoCountryUnload}
        handleChangeTextInput={this.handleChangeTextInput}
         /> }
        
        </div>





      	<div className="col-lg-3"><MasterRightBanner /></div>
      </div>

   		



      </div>
    );
  }
}

export default App;

      	
