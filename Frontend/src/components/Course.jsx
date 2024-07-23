import React from 'react'
import Cards from './Card'
import list from "../../public/public.json"
import {Link} from "react-router-dom"

function Course() {
  console.log(list.item  )
  return (
    <>
    <div className='bg-base-100 max-w-screen-2xl container mx-auto md:px-20 px-4'>
      <div className='mt-28 items-center justify-center text-center'>
        <h1 className=' text-2xl  md:text-4xl'>
          we are delighted to have you <span className='text-pink-500'>here!!:-)</span>
        </h1>
        <p className='mt-12'>
          
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsam, eos natus harum qui iure quasi culpa incidunt, tempore nesciunt aperiam maxime deleniti esse illum. Facere placeat neque fugiat dolorem libero.
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsam, eos natus harum qui iure quasi culpa incidunt, tempore nesciunt aperiam maxime deleniti esse illum. Facere placeat neque fugiat dolorem libero.
        </p>
       <Link to="/"><button  className=' mt-6 bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-700 duration-300'>Back</button></Link>
      </div>
      <div className=' mt-12 grid grid-col-1 md:grid-cols-3'>
      {list.map((item)=>(
          <Cards key={item.id} item={item}/>
        ))} 
      </div>
    </div>
    </>
  )
}

export default Course
