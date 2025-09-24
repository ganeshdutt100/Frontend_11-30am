import { useState } from 'react'
import Cards from './components/Cards'
// import Child from './components/Child'
import CourseCards from './components/CourseCards'
// import Navbar from './components/Navbar'
import UseRef from './components/UseRef'
import UseRef1 from './components/UseRef1'
import UseRef2 from './components/UseRef2'
import Hero from './components/heroSection'
import './style.css'
import CountContext from './contextAPI/CountContext'
import Child from './contextAPI/Child'
import UserContext from './LogIn/UserContext'
import Profile from './LogIn/Profile'
import Navbar from './LogIn/Navbar'
import Login from './LogIn/Login'

function App() {
 const [count, setCount] = useState(0)
 const [user, setUser] = useState(null)

  return (
    <>
     {/* <Navbar/> */}
     {/* <Hero/> */}
     {/* <Cards/> */}
     {/* <CourseCards/> */}
     {/* <UseRef/> */}
    {/* <UseRef1/> */}
    {/* <UseRef2/> */}
 {/* <h1 className='text-2xl font-bold'>Main File  </h1>
 <p className='ml-5 text-2xl border rounded w-[40px] text-center m-3'>{count}</p>
 <button className='bg-indigo-800 text-white  p-2 rounded-xl ' onClick={() => setCount(count + 1)}>Increment </button>
    <Child count={count} /> */}
     
{/* <CountContext.Provider value={{count}}>
  <div>
    <h2 className='text-2xl font-bold' >With Context API  </h2>
<p className='ml-5 text-2xl border rounded w-[40px] text-center m-3'>{count}</p>
 <button className='bg-indigo-800 text-white  p-2 rounded-xl ' onClick={() => setCount(count + 1)}>Increment </button>
    
    <Child/>
  </div>
</CountContext.Provider> */}

<UserContext.Provider  value={{user, setUser}} >
  <h1 className='text-2xl font-bold'>Login Page </h1>
  
  <Navbar/>

  {user ? <Profile/>:<Login/>}


</UserContext.Provider>



    </>
  )
}

export default App
