import React, { useContext, useState } from 'react';
import Logo from '../../assets/olx-logo.png';
import './Signup.css';
import {useForm} from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { db } from '../../firebase';
import { addDoc, collection, getDocs } from 'firebase/firestore';
import AuthContext from '../../Context/AuthContext';


export default  function Signup() {
 
  const [name,setName] = useState("")
  const [email,setEmail] = useState("")
  const [phone,setPhone] = useState("")
  const [password,setPassword] = useState("")
  const {register , handleSubmit , formState:{errors}} = useForm()
  const navigate = useNavigate()

  const { user, signUp } = useContext(AuthContext);

 async function  onFormSubmit(data,e){
    setName(data.name)
    setEmail(data.email)
    setPhone(data.phone)
    setPassword(data.password)
    e.preventDefault()
   let res = await signUp(name, email, phone, password);
};
if (user) {
  navigate("/");
  return null;
}
  return (
    <div>
      <div className="signupParentDiv">
        <img width="200px" height="200px" src={Logo}></img>
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
          <button type='submit'>Signup</button>
        </form>
        <a onClick={()=>navigate('/login')}>Login</a>
      </div>
    </div>
  );
}
