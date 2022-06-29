import React, { useState } from 'react'
import { Link,useHistory } from 'react-router-dom';
import { auth } from './firebase';
import "./Login.css";

function Login() {
  const history=useHistory();
  const[email,setEmail]=useState('');
  const[password,setPassword]=useState('');
  const signIn=e=>{
      e.preventDefault()
      //login firebase things
      auth.signInWithEmailAndPassword(email,password)
      .then(auth=>{
        history.push('/')
      })
      .catch(error=>alert(error.message))
  }
  const register=e=>{
      e.preventDefault()
      //register firebase things
      auth.createUserWithEmailAndPassword(email,password).then((auth)=>
      {
        console.log(auth);
        if (auth){
          history.push('/')
        }
      }
      )
      .catch(error=>alert(error.emssage))
  }
  return (
    <div className='login'>
      <Link to='/'>
        <img className='login__logo' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOEWoEmyh7gJTL53KBd_iAYGYcvYZ-FZDwvw&usqp=CAU" alt="" />
        </Link>
        <div className="login__container">
          <h1>Sign-in</h1>
          <form>
            <h3>E-mail</h3>
            <input type='text'value={email} onChange=
            {e=>setEmail(e.target.value)}/>
             
            <h3>Password</h3>

            <input type='Password' value={password}
            onChange={e=>setPassword(e.target.value)}/>
          <button type='submit' onClick={signIn} 
          className='both__button'>Sign-In</button>
          </form>
          <p>By signing in you agree to amazon-clon1 conditions of user & sales
            see our terms and condition.
          </p>
        <button onClick={register}
        className='both__button'>If You don't have an account</button>
        </div>
    </div>

  )
}

export default Login