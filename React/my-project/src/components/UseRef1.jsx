import React, { useRef } from 'react'

const UseRef1 = () => {
    const inputRef = useRef(null)
    const handleClick =()=> {
        inputRef.current.focus();
        inputRef.current.style.background="lightgreen"
    
    }
  return (
    <div className='m-5'>
        <input type="text" ref={inputRef} className='border' />
        <button onClick={handleClick} className='btn bg-red-400 px-5 mt-5 py-2 rounded-4xl' >Focus Input </button>
        
    </div>
  )
}

export default UseRef1