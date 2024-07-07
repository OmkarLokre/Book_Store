import React, { useEffect, useState } from 'react'
import Cards from './Cards'
// import list from "../../public/list.json"
import {Link} from "react-router-dom"
import axios from "axios"

function Courses() {
    const [book,setBook]=useState([])
    useEffect(()=>{
        const getBooks =async()=>{
            try {
              const response = await axios.get("http://localhost:4001/book")
              console.log(response.data);
              setBook(response.data);
            } catch (error) {
                console.log("Error",error);
            }
        };
        getBooks();
    },[]);
  return (
    <>
    <div className='max-w-screen-2xl container mx-auto md:px-20 px-4'>
        <div className='mt-28 items-center justify-center text-center'>
            <h1 className='text-2xl font-semibold md:text-4xl selection: '>
                We re delighted to have you <span className='text-pink-500'>
                 Here!!
                </span>  
            </h1>
            <p className='mt-12'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis unde explicabo odio delectus optio ducimus blanditiis voluptates asperiores ratione, soluta laborum earum, doloribus autem accusantium recusandae veritatis dolorum commodi quod.
            </p>
            <Link to="/">
            <button className= ' mt-6 bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-900 duration-300'>
                Back
            </button>
            </Link>   

        </div>
        <div className='mt-12 grid grid-cols-1 md:grid-cols-4'>
            {
                book.map((item)=>(
                    <Cards key={item.id} item={item}/>                
                ))
            }
        </div>
    </div>
    </>
  )
}

export default Courses