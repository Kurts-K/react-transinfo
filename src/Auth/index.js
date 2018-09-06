import React, { Component } from 'react'; 
import './style_auth.css';				  
import Form from './Form'


class Auth extends Component {  

  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
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

  render() {                            
    return (

      <div>
      <div className="authForm">ЛИЧНЫЙ КАБИНЕТ</div>
      <Form onSubmit = {this.handleSubmit} onChange= {this.handleChange} />
      </div>
    );
  }
}

export default Auth;




