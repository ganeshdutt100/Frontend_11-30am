import React, { useEffect, useState } from 'react'

const UseEffectCode3 = () => {
    const [user, setUser] = useState(null)

    useEffect(()=>{
        fetch("https://jsonplaceholder.typicode.com/users/10")
        .then(res=>res.json())
        .then(data => setUser(data))
    },[])
  return (
    <div>
        {/* <p>{user}</p> */}
        {user ? (<p>{user.name} <br></br> {user.email}</p> ) : (<p>Loading...</p>)}
    </div>
  )
}

export default UseEffectCode3