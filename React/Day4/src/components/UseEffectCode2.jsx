import React, { useEffect, useState } from 'react'

const UseEffectCode2 = () => {
    const [count, setCount] = useState(0);
    useEffect(()=>{
    console.log("component Mounted")
        
    const intervalValue = setInterval(()=>{
            console.log("Timer Chal rha hain ")
            setCount(x => x+1)
        } , 1000)

        // cleanUp function 
        return ()=>{
            clearInterval(intervalValue);
            console.log("Timer band hua ")
        }
    }, [])
  return (
    <div>
        <p>{count}</p>
    </div>
  )
}

export default UseEffectCode2