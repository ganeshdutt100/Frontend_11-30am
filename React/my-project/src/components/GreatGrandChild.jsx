import React from 'react'

const GreatGrandChild = ({count }) => {
  return (
    <div>
        <h3 className='text-md font-bold'>GreatGrandChild Components</h3>
      <p className='ml-5 text-2xl border rounded w-[40px] text-center m-3'>{count}</p>
    </div>
  )
}

export default GreatGrandChild