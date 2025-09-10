import React, { useState } from 'react'

const UseState = () => {
//    const [state , setState] = useState(initialValue);
   const [count , setCount] = useState(0);

  return (

    <>
    <h3>{count}</h3>
    <button className='p-2 bg-green-500 ms-4' onClick={()=> setCount(count+1)}>Increase</button>
    <button className='p-2 bg-green-500 ms-4' onClick={()=> setCount(count-1)}>Decrease</button>
    <button className='p-2 bg-green-500 ms-4' onClick={()=> setCount(0)}>Reset</button>
    
    </>
  )
}

export default UseState