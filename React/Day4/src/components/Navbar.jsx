import React from 'react'

const Navbar = (props) => {
  return (
    <div>
        <nav className='flex justify-around bg-black text-white p-5 m-5 rounded-full'>
      <div className="logo text-xl">{props.name}</div>
      <ul className='flex gap-4'>
        <li className='hover:text-red-500'><a href="#">Home</a></li>
        <li className='hover:text-red-500'><a href="#">About</a></li>
        <li className='hover:text-red-500'><a href="#">Contact</a></li>
        <li className='hover:text-red-500'><a href="#">Services</a></li>
      </ul>
     </nav>
    </div>
  )
}

export default Navbar