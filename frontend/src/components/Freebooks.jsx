import React, { useEffect, useState } from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
// import list from "../../public/list.json"
import Cards from './Cards';
import axios from "axios"


function Freebooks() {

  const [book,setBook]=useState([])
    useEffect(()=>{
        const getBooks =async()=>{
            try {
              const response = await axios.get("http://localhost:4001/book")
              console.log(response.data);
              const data = response.data.filter((data)=>data.category==="Free");
              setBook(data);
            } catch (error) {
                console.log("Error",error);
            }
        };
        getBooks();
    },[]);

    // const filterData = list.filter((data)=>data.category==="Free");
    // console.log(filterData);

    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };

  return (
  <>
    <div className='max-w-screen-2xl container mx-auto md:px-20 px-4'>
       <div>
       <h1 className='font-semibold text-xl pb-2' >
            Free offered Books/Courses
        </h1>
        <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem molestiae, exercitationem quis illum harum deserunt odit? Fuga cupiditate incidunt officiis, porro ex similique, culpa quaerat eum odit minima velit reiciendis.
        </p>
       </div>
    

    <div>

    <Slider {...settings}>
        {
            book.map((item)=>(
                <Cards item={item} key={item.id}/>
            ))
        } 
      </Slider>

    </div>
    </div>
  </>
  )
}

export default Freebooks