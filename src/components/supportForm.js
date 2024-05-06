import React, { useState } from 'react'; 
import ButtonForForms from "./ButtonForForms"
import { Link } from 'react-router-dom';
import  '../assets/pages/FormsStyles.css';
import MainButton from '../components/MainButton';

const Support= () => {
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
                  <h1 className='pb-10'>Форма обратной связи</h1>

                <div>
                    <label className='label' for="support-select">С чем вам нужна помощь?</label>
                        <select name="support" id="support">
                            <option value="">-- Выберите один из пунктов --</option>
                            <option value="bug">Сообщить об ошибке</option>
                            <option value="log-in-support">Проблема со входом в аккаунт</option>
                            <option value="ban">Мой аккаунт был заблокирован</option>
                            <option value="restore">Я не могу восстановить свой пароль</option>
                        </select>
                </div>

                  <div className={`input-group ${formErrors.email ? 'error' : ''}`}>
                    <label className='label' email="email">Ваш email от аккаунта langlink</label>
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

                  <div>
                    <label className='label'>Скриншот профиля, чтобы подтвердить личность</label>
                    <MainButton text="Прикрепить"></MainButton>
                  </div>
  
                  <div className={`input-group ${formErrors.password ? 'error' : ''}`}>
                    <label className='label' password="password">Ваш пароль</label>
                    <input type="password" id="password" name="password" value={formData.password} onChange={handleChange}/>
                    <div className="error">{formErrors.password}</div>
                  </div>

                  <div>
                    <input type='text' id='textarea' name='textarea'></input> 
                  </div>
  
                  <ButtonForForms text="Отправить"></ButtonForForms>
                  
                </form>
              </div>
            </div>
          </section>
        </div>
      </div>
    );
  };
  
  export default Support;