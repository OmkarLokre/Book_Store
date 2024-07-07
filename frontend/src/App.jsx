import React from 'react'
import Home from './HomeMain/MainComponent'
import Courses from './components/CourseRoute'
// import Courses from './components/Course'
// import Course from './components/course'
import { Route, Routes } from "react-router-dom"
import CoursePage from './coursesf/CoursePage'
import SignUp from './components/signup'


function App() {
  return (
    <>
    <div className='dark:bg-slate-900 dark:text-white'> 
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/course' element={<CoursePage/>}/>
      <Route path='/signup' element={<SignUp/>}/>
    </Routes>
    </div>
    </>
  )
}

export default App