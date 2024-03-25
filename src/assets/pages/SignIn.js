import React, { useState } from 'react'; 
import ButtonForForms from '../../components/ButtonForForms';
import './SignUp+SignIn.css'



const SignIn = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    
  });

  const [formErrors, setFormErrors] = useState({
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    validateInputs();
  };

  const validateInputs = () => {
    const { email, password } = formData;
    const newErrors = {};

    if (email.trim() === '') {
      newErrors.email = 'Это обязательное поле';
    } else if (!validateEmail(email)) {
      newErrors.email = 'Введите верный email';
    }

    if (password.trim() === '') {
      newErrors.password = 'Это обязательное поле';
    } else if (password.length < 8) {
      newErrors.password = 'Пароль должен содержать как минимум 8 символов';
    }


    setFormErrors(newErrors);
  };

  const validateEmail = (email) => {
    return String(email).toLowerCase().match(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/);
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit} id="form">
        <h1 className='pb-5'>Войти</h1>
        <div className={`input-group ${formErrors.email ? 'error' : ''}`}>
          <label email="email">Ваш email</label>
          <input type="text" id="email" name="email" value={formData.email} onChange={handleChange}/>
          <div className="error">{formErrors.email}</div>
        </div>
        
        <div className={`input-group ${formErrors.password ? 'error' : ''}`}>
          <label password="password">Ваш пароль</label>
          <input type="password" id="password" name="password" value={formData.password} onChange={handleChange}/>
          <div className="error">{formErrors.password}</div>
        </div>
        
        <ButtonForForms text="Войти"></ButtonForForms>
       
      </form>
    </div>
  );
};

export default SignIn;