import React, { useContext, useState } from 'react';

import Logo from '../../assets/olx-logo.png';
import './Login.css';
import {useForm} from 'react-hook-form'
import { useNavigate } from 'react-router-dom';
import AuthContext from '../../Context/AuthContext';

function Login() {
  const[error, setError]  = useState(null)
  const {register , handleSubmit , formState:{errors}} = useForm()
  const navigate = useNavigate()
  const {user, logIn}  = useContext(AuthContext)
  async  function formSubmitdata(data,e){
    console.log(data)
    let email = data.email
    let password = data.password
    let {success} = await logIn(email,password)
    success? null : setError("Invaid login credentials")
  }

  if (user) {
    navigate("/");
    return null;
  }
  return (
    <div>
      <div className="loginParentDiv">
        <img width="200px" height="200px" src={Logo}></img>
        {error && <div style={{color:"red"}}>{error}</div>}
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
