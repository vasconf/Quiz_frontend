import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import '../Cadastro/cadastro.css'

export default function Cadastro() {

   // const [userName, setUserName] = useState('');
   // const [password, setPassword] = useState('');
   
    const navigate = useNavigate();

   async function Cadastro(e){
      e.preventDefault();

   /**    const data = {
         userName,
         password
      }; **/
  
      try {
       
         

      //   localStorage.setItem('userName', userName);


         navigate('/Quizz');
         
      } catch (error) {
         alert('login failed try again!');
      }
   }

   return (

      <div className='login-container-cadastro'>
            <form class="row g-3">
            <div class="col-md-4">
                <label for="validationServer01" class="form-label">First name</label>
                <input type="text" class="form-control is-valid" id="validationServer01" value="Mark" required/>
                <div class="valid-feedback">
                Looks good!
                </div>
            </div>
        <div class="col-md-4">
            <label for="validationServer02" class="form-label">Last name</label>
            <input type="text" class="form-control is-valid" id="validationServer02" value="Otto" required/>
            <div class="valid-feedback">
            Looks good!
            </div>
        </div>
        <div class="col-md-4">
            <label for="validationServerUsername" class="form-label">Username</label>
            <div class="input-group has-validation">
                <span class="input-group-text" id="inputGroupPrepend3">@</span>
                <input type="text" class="form-control is-invalid" id="validationServerUsername" aria-describedby="inputGroupPrepend3 validationServerUsernameFeedback" required/>
                <div id="validationServerUsernameFeedback" class="invalid-feedback">
                    Please choose a username.
                </div>
            </div>
        </div>
        <div class="col-12">
            <button class="btn btn-primary" type="submit">Submit form</button>
        </div>
        </form>
    </div>

   )
}
