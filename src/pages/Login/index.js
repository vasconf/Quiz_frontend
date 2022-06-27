import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import './login.css';

import conexoes from '../../assets/conexoes.jpg'
import AuthService from '../../api/services/AuthService';
import LoginModel from '../../api/entities/LoginModel';

export default function Login() {

   const [loginState, setLoginState] = useState(new LoginModel())

   const navigate = useNavigate();

   async function login(e) {
      e.preventDefault();

      try {
         const _authService = new AuthService();
         const response = await _authService.post({ endpoint: "Auth", entity: JSON.stringify(loginState) });

         localStorage.setItem('userName', loginState.username);
         localStorage.setItem('acessToken', response.data.acessToken);
         localStorage.setItem('refreshToken', response.data.refreshToken);

         navigate('/Quiz');

      } catch (error) {
         alert('login failed try again!');
      }
   }

   return (
      <div className='login-container'>
         <section className='form'>
            <form onSubmit={login} >
               <h1>Acess your Account</h1>

               <input
                  placeholder='Username'
                  value={loginState.username}
                  onChange={e => setLoginState({ ...loginState, username: e.target.value })}
               />

               <input
                  type="password"
                  placeholder='Password'
                  value={loginState.password}
                  onChange={e => setLoginState({ ...loginState, password: e.target.value })}
               />

               <button className='button' type='submit'>Login</button>

            </form>
         </section>

         <img src={conexoes} alt="Login" />

      </div>

   )
}
