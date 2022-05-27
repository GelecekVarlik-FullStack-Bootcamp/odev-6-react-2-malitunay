import React from 'react'
import { useState } from 'react'
import { postLogin } from '../services/endpoints'
export default function Login({setRegister,setUser}) {

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const handleLogin = () => {
       postLogin(username, password).then((response) => {
        console.log(response);
        localStorage.setItem("userId",response.data.userId)
        setUser(true);
        document.cookie = "accessToken=" + response.data.token;
      })
       
    }

    return (
        <div className='login'>
            <input placeholder='Username' onChange={(e) => { setUsername(e.target.value) }} value={username} />
            <input placeholder='Password' onChange={(e) => { setPassword(e.target.value) }} value={password} />
            <button className='btn-lgn' onClick={() => handleLogin()} >Login</button>
            <button className='btn-lgn' onClick={()=>setRegister(true)}>Register</button>
        </div>
    )
}