import React, { Component } from 'react'; 
import './style_auth.css';				  
import Form from './Form'


class Auth extends Component {  

  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.onClickRegister = this.onClickRegister.bind(this);
    
  }


  handleChange(event) {
    var tar = event.target.name;
    var val = event.target.value;
    this.setState({[tar]: val});
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
      onChange = {this.handleChange} 
      onRegister = {this.onClickRegister} 
      buttonName = {this.props.SearchVisible}
      />
     
      </div>
    );
  }
}

export default Auth;




