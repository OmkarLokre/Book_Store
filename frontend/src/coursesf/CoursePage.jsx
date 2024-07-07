import React from 'react'
import Navbar from '../components/navbar'
import Footer from '../components/Footer'
import Courses from '../components/CourseRoute'

function CoursePage() {
  return (
    <div>
        <>
        <Navbar/>
        <div className='min-h-screen'>
        <Courses/>
        </div>
        <Footer/>
        </>
    </div>
  )
}

export default CoursePage