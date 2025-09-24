import React, { useContext, useState } from 'react'
import UserContext from './UserContext';

const Login = () => {
   const {setUser} = useContext(UserContext)
    const [name,setName] = useState("");

    const handleLogin = ()=>{
        if(name.trim() !== ""){
            setUser(name)
        }
    } 
  return (
    <div className='ml-5'>
        <h2 className='text-md font-bold'>Login page </h2>
        <input className='border rounded' type="text" value={name}  onChange={(e)=> setName(e.target.value)} />
        <button onClick={handleLogin} className='bg-indigo-800 text-white px-3 py-1 rounded'>Login </button>
    </div>
  )
}

export default Login