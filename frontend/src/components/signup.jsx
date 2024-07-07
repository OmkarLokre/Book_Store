import React from 'react'
import { Form, Link } from 'react-router-dom'
import Login from './Login'
import { useForm } from "react-hook-form";
import axios from 'axios';
import toast from 'react-hot-toast';

function SignUp() {

    const {
        register,
        handleSubmit,   
        formState: { errors },
      } = useForm();
    
      const onSubmit = async (data) => {
        const userInfo={
          username:data.username,
          email:data.email,
          password:data.password,
        }

       await axios.post("http://localhost:4001/user/signup",userInfo).then((res)=>{
          console.log(data)
          if(res.data){
            toast.success("SignUP Successfully");
            // alert ("SignUP Successfully");
            localStorage.setItem("Users",JSON.stringify(res.data.user));
          }

        }).catch((err)=>{
          if(err.response){
            console.log(err);
            toast.error("Error: "+err.response.data.message);
            // alert("Error: "+err.response.data.message);
          }
        })
      };
    

  return (
    <>
    <div className='flex h-screen items-center justify-center'>
        <div className=" w-[400px]">
        <div className="modal-box">
            
        <form form onSubmit={handleSubmit(onSubmit)} method="dialog">
            {/* if there is a button in form, it will close the modal */}{" "}
            <Link
              to="/"
              className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
              onClick={() => document.getElementById("my_modal_3").close()}
            >
              ✕
            </Link>

          <h3 className="font-bold text-lg">Login</h3>

          
          <div className="mt-4 space-y-2">
            <span>
                Username
            </span><br />
            <input type="text" placeholder="Enter a username" className="w-80 px-3 py-2 border rounded-md outline-none"
            input {...register("username", { required: true })} 
            />
            {errors.username && <span className="text-red-500 text-sm">This field is required</span>}
            
          </div>
          
          <div className="mt-4 space-y-2">
            <span>
                Email
            </span><br />
            <input type="email" placeholder="Enter your email" className="w-80 px-3 py-2 border rounded-md outline-none"
            input {...register("email", { required: true })} 
            />
            {errors.email && <span className="text-red-500 text-sm">This field is required</span>}
            
          </div>
          <div className="mt-4 space-y-2">
            <span>
                Password
            </span><br />
            <input type="text" placeholder="Enter your password" className="w-80 px-3 py-2 border rounded-md outline-none"
            input {...register("password", { required: true })} 
            />
            {errors.password && <span className="text-red-500 text-sm">This field is required</span>}
          </div>

          <div className="flex justify-between mt-4">
            <button className="bg-pink-500 text-white rounded-md px-3 py-1 hover:bg-pink-900">
                SignUp
            </button>
            <p className="mt-2">
                Have an account?,
                <button className=" px-2 underline text-blue-400 cursor-pointer"
                onClick={()=>
                    document.getElementById("my_modal_2").showModal()
                }>
                    Login
                </button>
                <Login/>  
            </p>
          </div>
          </form>
        </div>
        {/* <form method="dialog" className="modal-backdrop">
          <button>close</button>
        </form> */}
      </div>
    </div>
    </>
  )
}

export default SignUp