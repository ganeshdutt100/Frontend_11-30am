import React ,{useState , useEffect , useRef} from 'react'

const UseRef2 = () => {
    const [value, setValue] = useState("")
    const prevValue = useRef();
    useEffect(()=>{
        prevValue.current = value;
    },[value])
  return (
    <div>
        <input type="text" className='border m-5' value={value} onChange={(e)=>setValue(e.target.value)} placeholder='Type Something....' />
        <p>Current Value  {value}</p>
        <p>Previous Value  {prevValue.current}</p>
        </div>
  )
}

export default UseRef2