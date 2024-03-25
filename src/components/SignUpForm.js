import React, { useState } from 'react';

const SignUpForm = ({handleSubmit, handleChange, formData, formErrors}) => {
  const [formData, setFormData] = useState({
    email: '',
    username: '',
    surname: '',
    password: '',
  });

 const [formErrors, setFormErrors] = useState({
    email: '',
    username: '',
    surname: '',
    password: '',
  });

 const handleChange = () => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

 const handleSubmit = () => {
    e.preventDefault();
    validateInputs();
  };
  const validateInputs = () => {
    const { email, username, surname, password} = formData;
    const newErrors = {};

    if (username.trim() === '') {
        newErrors.username = 'Username is Required';
      }

      if (surname.trim() === '') {
        newErrors.surname = 'Surname is Required';
      }
      
    if (email.trim() === '') {
      newErrors.email = 'Email is Required';
      } else if (!validateEmail(email)) {
      newErrors.email = 'Please Enter Valid Email';
      }

    if (password.trim() === ''){
        newErrors.password = 'Password is Required';
    }else if (password.length < 8){
        newErrors.password = 'Password must be at least 8 character long';
    }
    
    setFormErrors(newErrors);
};

const validateEmail = (email) => {
    return String(email).toLowerCase().match(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/);
  };

}

export default SignUpForm;
