import React, { useEffect, useState } from 'react'
import "../pages/styles/Login.css";
import {useNavigate} from "react-router-dom";
import Home from './Home';

const Login = () => {
  const[count,setCount] = useState(1);
  let nav = useNavigate()
  let move=()=>{
    nav('/home')
  }
  let fun=()=>
  {
    setCount(count+1);
  }
  
  return (
    <div>
      <link href='Login.css' rel='stylesheet/text'></link>
      <h1 id='head'>Login</h1>
      <div id='box-container'>
        <input type="text"  id='i1' placeholder='username'/><br></br><br></br>
        <input type="password" id='i2' placeholder='password' />
        <button onClick={move}>Submit</button>
        {count}
      </div>
      
    </div>
  )
}

export default Login
