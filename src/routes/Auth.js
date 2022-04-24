import React, { useState } from "react";
import { authService, firebaseInstance } from 'MyfireBase';

const Auth = () => {
  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");
  const [newAccount,setNewAccount] = useState(true);
  const [err,setErr] = useState("");
  const onSocialClick=async(event)=>{
    const {target:{name}}=event;
    let provider
    if(name==="google"){
      provider = new firebaseInstance.auth.GoogleAuthProvider();
    }else if(name==="github"){
      provider = new firebaseInstance.auth.GithubAuthProvider();
    }
    const data = await authService.signInWithPopup(provider);
    console.log(data)
  }
  const onChange=(event)=>{
    const {target:{name,value}} = event;
    if(name==="email"){
      setEmail(value);
    }else if(name==="password"){
      setPassword(value)
    }
  }
  const onSubmit=async (event)=>{
    event.preventDefault();
    try {
      let data
      if(newAccount){
        data = await authService.createUserWithEmailAndPassword(
          email,password
        )
      }else{
        data = await authService.signInWithEmailAndPassword(email,password)
      }
      console.log(data)
    }catch(error){
      setErr(error.message)
    }
  }
  const toggleAccount=()=>{
    setNewAccount(prev=> !prev)
  }
  return (
      <>
        <form onSubmit={onSubmit}>
          <input onChange={onChange} name="email" type="text" placeholder="Email" required value={email}/>
          <input onChange={onChange} name="password" type="Password" placeholder="Password" required value={password}/>
          <input type="submit" value={newAccount?"Create Account":"Log in"}/>
        </form>
          {err}
        <span onClick={toggleAccount}>{newAccount?"Sign In":"Create Account"}</span>
        <div>
          <button onClick={onSocialClick} name="google">Google</button>
          <button onClick={onSocialClick} name="github">Github</button>
        </div>
      </>
    )
}

export default Auth;