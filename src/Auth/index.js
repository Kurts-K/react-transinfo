import React, { Component } from 'react'; 
import './style_auth.css';				  
import Form from './Form'


class Auth extends Component {  

  constructor(props) {
    super(props);
   
    this.handleSubmit = this.handleSubmit.bind(this);
    this.onClickRegister = this.onClickRegister.bind(this);
    
  }





  handleSubmit(event) {
    event.preventDefault();
    this.props.onSubmited();
  }


  onClickRegister(event) {
  event.preventDefault();
  this.props.onRegister();
 
}


render() {                            
    return (

      <div>

      <div className="authForm">ЛИЧНЫЙ КАБИНЕТ</div>

      <Form
      onSubmit = {this.handleSubmit} 
      handleChangeTextInput = {this.props.handleChangeTextInput} 
      onRegister = {this.onClickRegister} 
      buttonName = {this.props.CenterSearchVisible}
      />
     
      </div>
    );
  }
}

export default Auth;




