import React, { useContext } from 'react'
import UserContext from './UserContext'

const Profile = () => {
    const {user, setUser} = useContext(UserContext)
  return (
    <div>
        <h1 className='font-bold text-2xl '>Profile Page </h1>
        <p className='text-md font-bold text-green-900'>User :  {user}</p>
        <button className='bg-indigo-800 text-white px-3 py-1 rounded'  onClick={()=>setUser(null)} > Logout </button>
    </div>
  )
}

export default Profile