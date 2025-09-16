import React, { useEffect, useState } from 'react'

const UseEffectCode2 = () => {
    const [count, setCount] = useState(0);
    const [intervalValueId , setIntervalValueId] =  useState(null);

   
    const cleanup = ()=>{
        clearInterval(intervalValueId);
        console.log("Timer band hua ")
    }

    useEffect(()=>{
    console.log("component Mounted")
        
    const intervalValue = setInterval(()=>{
            console.log("Timer Chal rha hain ")
            setCount(x => x+1)
        } , 1000)

        setIntervalValueId(intervalValue)

        // cleanUp function 
        return  cleanup;
    }, [])


 
  return (
    <div>
        <p>{count}</p>
        <button onClick={cleanup} >Stop timer</button>
    </div>
  )
}

export default UseEffectCode2