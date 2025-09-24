import React, { useContext } from 'react'
import UserContext from './UserContext'

const Navbar = () => {
   const {user}  =  useContext(UserContext)
  return (
    <div className='bg-gray-900 text-white p-5 w-[300px]'>
        <p>Navbar </p>
       <h2 className='text-lg font-bold '> {user ? <p className='text-green-500'>Welcome , {user}</p>: <p className='text-red-400'>Please Login</p>}</h2>
    </div>
  )
}

export default Navbar