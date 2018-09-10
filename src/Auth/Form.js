import React, { Component } from 'react'; 			  


function Form({onSubmit, onChange, onRegister, buttonName}) { 

    return (
     <div>
        
        <form className="formAuth" onSubmit={onSubmit} onChange={onChange}>
         <div>
          <input type="text" name="email" placeholder="Личный e-mail" />
        </div>
        <div>
          <input type="password" name="password" placeholder="Пароль" />
        </div>
        <div>

          <input type="checkbox" name="alienPc" />
          <label htmlFor="alienPc">Чужой компьютер</label>
          </div>
          <button className="btn btn-primary">Войти</button>
          <a href="#" className="forgot">Забыли пароль?</a>
      </form>
        <button onClick={onRegister} className="btn btn-danger btn-block">
        {buttonName ? 'Регистрация' : 'На главную'}
        </button>

      </div>
      );
}

export default Form;