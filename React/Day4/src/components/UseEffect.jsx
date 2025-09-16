import React, {useEffect, useState} from 'react'

const UseEffect = () => {
const [count , setCount] =  useState(0);

    useEffect(()=>{
      console.log(`Component render ${count}`);
    },[count]);

  return (
    <div>
     <p>{count}</p>
     <button onClick={()=>setCount(count+1)}>Add</button>
    </div>
  )
}

export default UseEffect