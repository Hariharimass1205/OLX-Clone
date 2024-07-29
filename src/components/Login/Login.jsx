import React from 'react';

import Logo from '../../assets/olx-logo.png';
import './Login.css';
import {useForm} from 'react-hook-form'
import { useNavigate } from 'react-router-dom';

function Login() {
  const {register , handleSubmit , formState:{errors}} = useForm()
  const navigate = useNavigate()
  function formSubmitdata(data){
    console.log(data)
  }
  return (
    <div>
      <div className="loginParentDiv">
        <img width="200px" height="200px" src={Logo}></img>
        <form onSubmit={handleSubmit(formSubmitdata)}> 
          <label htmlFor="fname">Email</label>
          <br />
          <input
            className="input"
            type="email"
            {...register("email",{required: true})}
          />
          <small style={{color:"red" , display:"block"}}>{errors.email && " email must"}</small>
          <br />
          <label htmlFor="lname">Password</label>
          <br />
          <input
            className="input"
            type="password"
            {...register("password",{required:true})}
          />
          <small  style={{color:"red" , display:"block"}}>{errors.password && " passcode must"}</small>
          <br />
          <br />
          <button>Login</button>
        </form>
        <a onClick={()=>navigate('/signup')}>Signup</a>
      </div>
    </div>
  );
}

export default Login;
