import React, { useContext } from 'react'
import CountContext from './CountContext'


const GreatGrandChild = () => {
     const {count}= useContext(CountContext)
  return (

    <div>
      <h1 className='text-sm font-black'>GreatGrandChild Components </h1>
      <p>Count  :  {count}</p>
    </div>
  )
}

export default GreatGrandChild