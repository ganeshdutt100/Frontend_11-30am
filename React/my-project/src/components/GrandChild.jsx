import React from 'react'
import GreatGrandChild from './GreatGrandChild'

const GrandChild = ({count}) => {
  return (
    <div>
        <h3 className='text-lg font-bold'>GrandChild Components</h3>
         <GreatGrandChild count={count} />
    </div>

  )
}

export default GrandChild