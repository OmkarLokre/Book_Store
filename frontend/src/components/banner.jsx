import React from 'react'
// import banner_bg from "../../public/banner_bg.png";
import banner_bg from "../../public/banner_s.png";
function Banner() {
  return (
    <>
    <div  className='max-w-screen-2xl container mx-auto md:px-20 px-4 flex flex-col md:flex-row my-10 '>
        <div className='w-full order-2 md:order-1 md:w-1/2 mt-12 md:mt-32'>
            <div className='space-y-12'>
            <h1 className='text-4xl font-bold'>
                Hello, welcome to learn something 
                <span className='text-pink-500'>
                new everyday!!!
                </span>
            </h1>
            <p className='text-xl'>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Debitis explicabo ipsa odio harum, doloremque dolorem voluptatem eligendi aut vel delectus distinctio! Aspernatur illo voluptatibus, ratione quo dolore aliquid praesentium sapiente.
            </p>

            <label className="input input-bordered flex items-center gap-2">
  <input type="text" className="grow" placeholder="Search" />
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 16 16"
    fill="currentColor"
    className="h-4 w-4 opacity-70">
    <path
      fillRule="evenodd"
      d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
      clipRule="evenodd" />
  </svg>
</label>

            </div>
            <button className="btn mt-6 btn-secondary">Secondary</button>
        </div>
        <div className='order-1 w-full md:w-1/2'>
            <img src={banner_bg} alt="" className='w-100 h-100'/>
        </div>
    </div>
    </>
  )
}

export default Banner