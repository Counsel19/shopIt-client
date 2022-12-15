import React,{useState} from 'react'
import "./Login.css"
import { BsArrowLeft } from 'react-icons/bs'
import {Link} from "react-router-dom"


const Login = () => {
    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")

    const handleSubmit = (e)=>{
        e.preventDefault
        console.log(email,password)
        setEmail("");
        setPassword("");
    }


  return (
    <div className="
     w-[35%]
      h-[75%]
       flex
        flex-col
         m-auto
          mt-[4rem] main-div">
            <Link to="/" className="flex text-blue-900 gap-4 items-center"><BsArrowLeft/> Back to Home</Link>
        <h2 className="mb-[1.5rem]  font-bold text-xl mt-[2rem] brand text-center">Welcome to the Test<span>Commerce</span></h2>
        <div className="form">
           <input type="text" value={email} onChange={(e)=>setEmail(e.target.value)} placeholder="Enter your Email Address" />
           <input type="text" value={password} onChange={(e)=>setPassword(e.target.value)} placeholder="Password" min={8} max={14} />
        </div>
        <button onClick={handleSubmit} className="login-btn mb-[2rem]">Login</button>
        
    </div>
  )
}

export default Login
