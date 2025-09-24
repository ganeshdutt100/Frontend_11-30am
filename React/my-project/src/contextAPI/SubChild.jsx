import React from 'react'
import GrandChild from './GrandChild'

const SubChild = () => {
  return (
    <div>
        <div>
                <h1 className='text-lg font-bold'>SubChild Components </h1>
                <GrandChild/>
            </div>
    </div>
  )
}

export default SubChild