import React, { useState } from 'react'; 
import ButtonForForms from '../../components/ButtonForForms';
import './FormsStyles.css'
import signin from '../used/signin.jpg';
import { Link } from 'react-router-dom';

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
    <div className='w-full h-full bg-lilac p-20'>
      <div className="max-h-screen">
        <section className='border-black min-h-screen flex flex-row items-center justify-center'>
          <div class="bg-gray-100 p-5 flex rounded-2xl shadow-lg max-w-5xl">
            <div class="md:w-1/2 px-5">
              <form onSubmit={handleSubmit} id="auth_form">
                <h1 className='pb-20 text-center text-plumy text-2xl'>Войти</h1>
                <div className={`input-group ${formErrors.email ? 'error' : ''}`}>
                  <label className='label' email="email">Ваш email</label>
                  <input type="text" id="email" name="email" value={formData.email} onChange={handleChange}/>
                  <div className="error">{formErrors.email}</div>
                </div>
                <div className={`input-group ${formErrors.password ? 'error' : ''}`}>
                  <label className='label' password="password">Ваш пароль</label>
                  <input type="password" id="password" name="password" value={formData.password} onChange={handleChange}/>
                  <div className="error">{formErrors.password}</div>
                </div>
                <ButtonForForms text="Войти"></ButtonForForms>
                <div className="text-sm flex justify-end items-center mt-3 underline">
                  <Link to='/signup' className="underline">Вы еще не зарегистрированы? Зарегистрироваться</Link>
                </div>
              </form>
            </div>
            <div class="md:w-1/2 px-5">
              <div className='flex flex-row justify-center items-end px-16 py-9 mt-10 rounded-[50px] max-md:px-5 max-md:mt-10 '>
                <img className='' src={signin}/>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default SignIn;



