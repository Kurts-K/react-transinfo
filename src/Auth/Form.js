import React, { Component } from 'react'; 			  


function Form({onSubmit, handleChangeTextInput, onRegister, buttonName}) { 

    return (
     <div>
        
        <form className="formAuth" onSubmit={onSubmit} onChange={handleChangeTextInput}>
         <div>
          <input type="text" name="AuthEmail" placeholder="Личный e-mail" />
        </div>
        <div>
          <input type="password" name="AuthPassword" placeholder="Пароль" />
        </div>
        <div>

          <input type="checkbox" name="AuthAlienPc" id="AuthAlienPc" />
          <label htmlFor="AuthAlienPc">Чужой компьютер</label>
          </div>
          <button className="btn btn-primary">Войти</button>
          <a href="#" className="forgot">Забыли пароль?</a>
      </form>
        <button onClick={onRegister} className="btn btn-danger btn-block">
        {buttonName == 'Searh' ? 'Регистрация' : 'На главную'}
        </button>
        
      </div>
      );
}

export default Form;