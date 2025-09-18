import React ,{useEffect, useState}from 'react'


const Cards = () => {
    const [products, setProducts] = useState([]) // store api data 
    const [loading, setLoading] = useState(true) // loading 

    useEffect(()=>{
        fetch("https://fakestoreapi.com/Products")
        .then(res => res.json())
        .then(data =>{
            setProducts(data);
            setLoading(false);
        })
        .catch(console.error)
    }, [])
  return (
    <div>
        <div>
            <h1 className='text-3xl font-bold text-center'>Latest Products</h1>
         

    {/* first card  */}

  {loading  ? (
    <p>Loading...</p>
  ) :(
    <div className='flex flex-wrap gap-5 justify-center mt-4'>
{products.map( p => (
 <div key = {p.id} className="w-64 border p-5 rounded-lg shadow hover:shadow-lg transition">
                <img  className="h-40 w-full object-contain mb-3" src={p.image} alt={p.title} />
                <h2 className='font-semibold text-md text-center'>{p.title}</h2>
                <p className='text-center'>${p.price}</p>
            </div>
))}
    </div>
  )}

    


           </div>
        </div>
 
  )
}

export default Cards