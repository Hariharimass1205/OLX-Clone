import React, { useState } from 'react';
import Logo from '../../assets/olx-logo.png';
import './Signup.css';
import {useForm} from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

export default function Signup() {
 
  const [name,setName] = useState("")
  const [email,setEmail] = useState("")
  const [phone,setPhone] = useState("")
  const {register , handleSubmit , formState:{errors}} = useForm()
 

 function  onFormSubmit(data){
    console.log(data);
    setName(data.name)
    setEmail(data.email)
    setPhone(data.phone)
    console.log(name,email,phone)
  }
  const navigate = useNavigate()
  return (
    <div>
      <div className="signupParentDiv">
        <img width="100px" height="100px" src={Logo}></img>
        <form onSubmit={handleSubmit(onFormSubmit)}>
          <label htmlFor="fname">Username</label>
          <br />
          <input
            className="input"
            type="text"
            {...register("name",{required:true})}
          />
          <small style={{color:"red" , display:'block'}}>{errors.name && "name required"}</small>
          <br />
          <label htmlFor="fname">Email</label>
          <br />
          <input  
            className="input"
            type="email"
            {...register("email",{required:true})}
          />
          <small style={{color:"red", display:'block'}}>{errors.email && "email must"}</small>
          <br />
          <label htmlFor="lname">Phone</label>
          <br />
          <input
            className="input"
            type="number"
            {...register("phone",{required:true})}
          />
          <small style={{color:"red", display:'block'}}>{errors.phone && "number must"}</small>
          <br />
          <label htmlFor="lname">Password</label>
          <br />
          <input
            className="input"
            type="password"
            {...register("password",{required:true})}
          />
          <small style={{color:"red", display:'block'}}>{errors.password && "need passcode"}</small>
          <br />
          <br />
          <button>Signup</button>
        </form>
        <a onClick={()=>navigate('/login')}>Login</a>
      </div>
    </div>
  );
}
