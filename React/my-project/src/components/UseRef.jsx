import React,{useEffect, useRef , useState} from 'react'

const UseRef = () => {
//   const useRefValue =  useRef(initialValue);
// {
//     current:initialValue
// }
const [first, setfirst] = useState(0)
let renderCounter  =useRef(0)
useEffect(()=>{
    renderCounter.current +=1;
    console.log(`i am UseRef ${renderCounter.current} `)
});
  return (
   <>
    <div>UseRef</div>
    <button className='btn bg-black text-white px-5 py-2 ml-5 rounded-2xl' onClick={()=>setfirst(first+1)} >{first}</button>
   </>  
  )
}

export default UseRef