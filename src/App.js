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

class App extends Component {

 
  state = {
    AuthVisible: true,
    SearchVisible: 'Searh',
    AddCargoVisible: false,
    email: '',
    password: '',
    userName: 'Курц Коснтантин',
    userСompany: 'Рога и Копыта',
    userId: '777',
    countryLoad: '',
    regionLoad: '',
    countryUnload: '',
    regionUnload: ''
  }
 


 onSubmited = () => {
    this.setState({AuthVisible: false});
}

onRegister = () => {
  this.setState({SearchVisible: 'Register'})
}



selectCountry = (event) => {
  switch(event.target.id) {
    case 'countryLoad' : this.setState({countryLoad: event.target.value}); break;
    case 'countryUnload' : this.setState({countryUnload: event.target.value}); break;
    case 'regionLoad' : this.setState({regionLoad: event.target.value}); break;
    case 'regionUnload' : this.setState({regionUnload: event.target.value}); break;
  }
}

AddCargoVisible = (event) => {
   this.setState({SearchVisible: 'AddCargo'})
   event.preventDefault();
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
        {this.state.AuthVisible ? 
        <Auth 
        SearchVisible={this.state.SearchVisible}
        onSubmited={this.onSubmited} 
        onRegister={this.onRegister} /> : 
        <UserInfo 
        userName={this.state.userName}
        userСompany={this.state.userСompany}
        userId={this.state.userId}/>
      }
        </div>


      	<div className={this.state.AddCargoVisible ? "col-lg-6" : "col-lg-9" }>

        {(this.state.SearchVisible == 'Searh')

        &&

        <GlobalSearch
        AddCargoVisible = {this.AddCargoVisible}
        selectCountry={this.selectCountry} 
        countryLoad={this.state.countryLoad} 
        countryUnload={this.state.countryUnload} />
      
        ||
        (this.state.SearchVisible == 'Register')
        &&


        <Register
        onRegister={this.onRegister} />
        ||
        (this.state.SearchVisible == 'AddCargo')
        &&

        <AddCargo />

        

       


          } 

      
        </div>





      	<div className="col-lg-3"><MasterRightBanner /></div>
      </div>

   		



      </div>
    );
  }
}

export default App;

      	
