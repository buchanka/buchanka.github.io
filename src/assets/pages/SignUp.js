import React, { useState } from 'react'; 
import ButtonForForms from '../../components/ButtonForForms';
import './SignUp+SignIn.css'



const SignUp = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    surname: '',
  });

  const [formErrors, setFormErrors] = useState({
    username: '',
    email: '',
    password: '',
    surname: '',
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
    const { username, email, password, surname } = formData;
    const newErrors = {};

    for (const field in formData) {
      if (formData[field].trim() === '') { 
        newErrors[field] = 'Это обязательное поле';
      } else if (field === 'password' && formData[field].trim().length < 8) {
        newErrors.password = 'Пароль должен содержать как минимум 8 символов';
      }
    }
    

    setFormErrors(newErrors);
  };

  const validateEmail = (email) => {
    return String(email).toLowerCase().match(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/);
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit} id="form">
        <h1 className='pb-5'>Регистрация на langlink</h1>
        <div className={`input-group ${formErrors.email ? 'error' : ''}`}>
          <label email="email">Ваш email</label>
          <input type="text" id="email" name="email" value={formData.email} onChange={handleChange}/>
          <div className="error">{formErrors.email}</div>
        </div>
        <div className={`input-group ${formErrors.username ? 'error' : ''}`}>
          <label username="username">Ваше имя</label>
          <input type="text" id="username" name="username" value={formData.username} onChange={handleChange}/>
          <div className="error">{formErrors.username}</div>
        </div>
        <div className={`input-group ${formErrors.surname ? 'error' : ''}`}>
          <label surname="surname">Ваша фамилия</label>
          <input type="text" id="surname" name="surname" value={formData.surname} onChange={handleChange}/>
          <div className="error">{formErrors.surname}</div>
        </div>
        <div className={`input-group ${formErrors.password ? 'error' : ''}`}>
          <label password="password">Придумайте пароль</label>
          <input type="password" id="password" name="password" value={formData.password} onChange={handleChange}/>
          <div className="error">{formErrors.password}</div>
        </div>
        
        <ButtonForForms text="Зарегистрироваться"></ButtonForForms>
       
      </form>
    </div>
  );
};

export default SignUp;
