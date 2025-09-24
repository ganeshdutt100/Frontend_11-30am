import React from 'react'
import SubChild from './SubChild'

const child = () => {
  return (
    <div>
        <h1 className='text-xl font-bold'>Child Components </h1>
        <SubChild/>
    </div>
  )
}

export default child