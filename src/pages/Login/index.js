import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';


import './login.css';

import conexoes from '../../assets/conexoes.jpg'
import AuthService from '../../api/services/AuthService';

export default function Login() {

    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');
   
    const navigate = useNavigate();

   async function login(e){
      e.preventDefault();

      const data = {
         userName,
         password
      };
    //  console.log(process.env.BASE_URL);
      try {
         const _authService = new AuthService();
         const response = await _authService.create(data);
         

         localStorage.setItem('userName', userName);
         localStorage.setItem('acessToken', response.data.acessToken);
         localStorage.setItem('refreshToken', response.data.refreshToken);

         navigate('/Quizz');
         
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
               value={userName}
               onChange={e => setUserName(e.target.value)}
               />

               <input 
               type="password" 
               placeholder='Password'
               value={password}
               onChange={e => setPassword(e.target.value)}
               />

               <button className='button' type='submit'>Login</button>
               <a href='./Cadastro' >Ainda não tem uma conta ? Cadastre-se </a>
            
            </form>
         </section>

         <img src={conexoes} alt="Login"/>

      </div>

   )
}

/*    <div className='Login-container'> 
<section className='form'>
<form className='form-horizontal'>

  <div class="form-group">
      <label class="col-md-2-control-label"></label>
     <div class="col-md-10">
        <input class="form-control">Username</input>
        <span class="text-danger">Username</span>
     </div>
  </div>

  <div class="form-group">
      <label class="col-md-2-control-label"></label>
     <div class="col-md-10">
        <input class="form-control">Senha</input>
        <span class="text-danger">Senha</span>
     </div>
  </div>

  <div class="form-group">
    <div class="col-md-offset-2 col-md-10">
      <input type="submit" class="btn btn-sucess"></input>
    </div>
</div>


  </form>
</section>

<img src={conexoes} alt="Login"/>
</div> */