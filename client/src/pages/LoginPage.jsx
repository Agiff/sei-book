import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { baseUrl } from '../config';

const LoginPage = () => {
  const navigate = useNavigate();
  const [loginForm, setLoginForm] = useState({
    email: '',
    password: ''
  });

  const changeLoginFormHandler = (e) => {
    const { value, name } = e.target;
    const newLoginForm = {
      ...loginForm,
      [name]: value
    }
    setLoginForm(newLoginForm);
  }

  const submitLogin = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post(`${baseUrl}/users/login`, loginForm);
      localStorage.access_token = data.access_token;
      navigate('/');
    } catch (error) {
      console.log(error.response.data.message);
    }
  }

  return (
    <div className='container min-vh-100 d-flex justify-content-center align-items-center'>
      <Form className='card w-50 p-3 py-4' onSubmit={submitLogin}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" name='email' placeholder="Enter email" onChange={changeLoginFormHandler}/>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" name='password' placeholder="Password" onChange={changeLoginFormHandler}/>
        </Form.Group>
        <div>
          <Button variant="primary" type="submit">
            Sign In
          </Button>
        </div>
      </Form>
    </div>
  )
}

export default LoginPage
