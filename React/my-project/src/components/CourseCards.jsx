import React ,{useState}from 'react'
import { product  } from './product'

const CourseCards = () => {
    const [selectCourse, setSelectCourse] = useState('fullstack')
  return (
    <>
    
    <div className='flex gap-4 my-5 justify-center'>
<button className={`px-4 py-2 font-semibold rounded-md ${selectCourse === 'fullstack' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`} onClick={() => setSelectCourse('fullstack')} >Full Stack</button>

<button className={`px-4 rounded-md py-2 font-semibold ${selectCourse === 'digitalmarketing' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`} onClick={() => setSelectCourse('digitalmarketing')} >Digital Marketing</button>

<button className={`px-4 rounded-md py-2 font-semibold ${selectCourse === 'datascience' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`} onClick={() => setSelectCourse('datascience')} >Data Science</button>
    </div>

    {/* card */}
    <div className='flex flex-wrap gap-5 justify-center'>
    {product[selectCourse].map((item)=>(
        
            <div key = {item.id} className="w-64 border p-5 rounded-lg shadow hover:shadow-lg transition">
                <img  className="h-40 w-full object-contain mb-3" src={item.image} alt={item.title} />
                <h2 className='font-semibold text-md text-center'>{item.title}</h2>
                <p className='text-center'>${item.price}</p>
            </div>
       
    ))}
     </div>
   
    </>
  )
}

export default CourseCards