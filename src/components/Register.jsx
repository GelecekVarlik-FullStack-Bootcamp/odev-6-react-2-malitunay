import React from 'react'
import { useState } from 'react'
import { postRegister } from '../services/endpoints'

export default function Register({ setRegister, setUser }) {

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [passwordConfirm, setPasswordConfirm] = useState('')

    const handleRegister = () => {
        if (password == passwordConfirm) {
            postRegister(username, password, passwordConfirm).then((response) => {
                console.log(response);
                setRegister(false)
                
            })
        }
        else{
            alert("password yanlış")
        }
    }

    return (
        <div className='add-todo-div'>
            <input placeholder='Username' onChange={(e) => { setUsername(e.target.value) }} value={username} required />
            <input placeholder='Password' onChange={(e) => { setPassword(e.target.value) }} value={password} required />
            <input placeholder='Password Confirm' onChange={(e) => { setPasswordConfirm(e.target.value) }} value={passwordConfirm} required />
            <button onClick={() => handleRegister()} >Register</button>
        </div>
    )
}