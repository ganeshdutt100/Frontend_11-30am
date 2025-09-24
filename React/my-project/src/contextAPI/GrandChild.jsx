import React, { useContext } from 'react'
import GreatGrandChild from './GreatGrandChild'
import CountContext from './CountContext'

const GrandChild = () => {
    const {count} = useContext(CountContext)
  return (
    <div>
        <h1 className='text-md  font-black'>GrandChild  Components :  {count} </h1>
        <GreatGrandChild/>
    </div>
  )
}

export default GrandChild