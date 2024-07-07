import React from 'react'
// import Navbar from './components/Navbar'
import Navbar from '../components/navbar'
import Banner from '../components/banner'
import Footer from '../components/Footer'
import Freebooks from '../components/Freebooks'

function Home() {
  return (
    <>
    <Navbar/>
    <Banner/>
    <Freebooks/>
    <Footer/>
    </>
  )
}

export default Home