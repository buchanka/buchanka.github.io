import React, { useState } from 'react'; 
import ButtonForForms from '../../components/ButtonForForms';
import './FormsStyles.css'
import signup from '../used/signup.jpg';
import { Link } from 'react-router-dom';



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
    <div className='w-full h-full bg-lilac p-20'>
      <div className="max-h-screen">
        <section className='border-black min-h-screen flex flex-row items-center justify-center'>
          <div class="bg-gray-100 p-5 flex rounded-2xl shadow-lg max-w-5xl">
            <div class="md:w-1/2 px-5">
              <form onSubmit={handleSubmit} id="auth_form">
                <h1 className='pb-10 text-center text-plumy text-2xl'>Регистрация на langlink</h1>
                <div className={`input-group ${formErrors.email ? 'error' : ''}`}>
                  <label className='label' email="email">Ваш email</label>
                  <input type="text" id="email" name="email" value={formData.email} onChange={handleChange}/>
                  <div className="error">{formErrors.email}</div>
                </div>

                <div className={`input-group ${formErrors.username ? 'error' : ''}`}>
                  <label className='label' username="username">Ваше имя</label>
                  <input type="text" id="username" name="username" value={formData.username} onChange={handleChange}/>
                  <div className="error">{formErrors.username}</div>
                </div>

                <div className={`input-group ${formErrors.surname ? 'error' : ''}`}>
                  <label className='label' surname="surname">Ваша фамилия</label>
                  <input type="text" id="surname" name="surname" value={formData.surname} onChange={handleChange}/>
                  <div className="error">{formErrors.surname}</div>
                </div>

                <div className={`input-group ${formErrors.password ? 'error' : ''}`}>
                  <label className='label' password="password">Придумайте пароль</label>
                  <input type="password" id="password" name="password" value={formData.password} onChange={handleChange}/>
                  <div className="error">{formErrors.password}</div>
                </div>

                <ButtonForForms text="Войти"></ButtonForForms>
                <div className="text-sm flex justify-end items-center mt-3 underline">
                  <Link to='/signin' className="underline">Вы уже зарегистрированы? Войти</Link>
                </div>
              </form>
            </div>
            <div class="md:w-1/2 px-5">
              <div className='flex flex-row justify-center items-end px-16 py-9 mt-10 rounded-[50px] max-md:px-5 max-md:mt-10 '>
                <img className='' src={signup}/>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default SignUp;




