import React, { Component } from 'react';
import Logo from './header/Logo';
import Region from './header/Region';
import Nav from './Nav';
import Auth from './Auth';
import GlobalSearch from './GlobalSearch';
import MasterRightBanner from './MasterRightBanner';
import UserInfo from './UserInfo';
import './app.css';    

class App extends Component {

 
  state = {
    AuthVisible: true,
    email: '',
    password: '',
    userName: 'Курц Коснтантин',
    userСompany: 'Рога и Копыта',
    userId: '777'
  }
 


 onSubmited = () => {
    this.setState({AuthVisible: false});
   
    
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
        <Auth onSubmited={this.onSubmited} /> : 
        <UserInfo 
        userName={this.state.userName}
        userСompany={this.state.userСompany}
        userId={this.state.userId}


        />}
        </div>
      	<div className="col-lg-6"><GlobalSearch /></div>
      	<div className="col-lg-3"><MasterRightBanner /></div>
      </div>

   		



      </div>
    );
  }
}

export default App;

      	
