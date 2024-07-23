import React from 'react'
import Home from './Home/Home'

import { Route, Router, Routes } from "react-router-dom"
import Courses from './components/courses/courses'
import Signup from './components/Signup'
import Contact from './Contact'





const App = () => {
  return (
   <>
   {/* <div className='dark:bg-slate-900 dark:text-white' > */}
    <Routes>
     <Route path='/' element={<Home/>}/> 
     <Route path='/course' element={<Courses/>}/> 
     <Route path='/Signup' element={<Signup/>}/> 
     <Route path='/contact' element={<Contact/>}/> 

    </Routes>
    {/* </div> */}

   
   </>
  )
}

export default App
