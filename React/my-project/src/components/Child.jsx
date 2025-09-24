import React from 'react'
import GrandChild from './GrandChild'

const Child = ({count}) => {
  return (
    <div>
        <h1 className='text-xl font-bold'>Child Components</h1>
        <GrandChild count = {count}/>
    </div>
    
  )
}

export default Child