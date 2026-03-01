import React, { useState } from 'react'
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField';
import { IoMdEye, IoMdEyeOff } from 'react-icons/io';
import { Link } from 'react-router-dom';
import { FcGoogle } from 'react-icons/fc';


const Login = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <section className="py-10 sectin">
      <div className="container">
        <div className="card shadow-md p-5 w-[400px] m-auto rounded-md bg-white">
          <h2 className="text-[20px] font-[500] text-center text-black">Login To Your Account</h2>
          <form action="" className="flex flex-col gap-4 mt-5 w-full px-3">
            <div className="form-group pb-3">
              <TextField
                id="Email"
                type='Emali'
                label="Email *"
                variant="outlined"
                className='w-full' />

            </div>
            <div className="form-group relative flex items-center">

              <TextField
                id="standard-password-input"
                label="Password"
                type={showPassword ? "text" : "password"}
                autoComplete="current-password"
                variant="outlined"
                className='w-full'
                
              />
              <Button onClick={() => setShowPassword(!showPassword)}
                className='!absolute top-2 right-2 !min-w-[35px] !w-[35px] !h-[35px] !rounded-full !text-black link'
              >
                {showPassword ? <IoMdEyeOff className="text-[20px] opacity-75" /> : <IoMdEye className="text-[20px] opacity-75" />}
              </Button>

            </div>

            <a href="#" className='link cursor-pointer !text-[14px] !font-[600]'>Forgot Password?</a>
            <Button className='btn-org btn-lg !w-full'>Login</Button>

          <p className="  text-center">Don't Have An Account ? <Link to="/register" className=" font-[600] cursor-pointer text-[#ff5252]">Register Now</Link></p>

          <p className="text-center font-[500]">Or continue with social account</p>
     
            <Button className='flex gap-3 w-full !bg-[#f1f1f1] btn-lg !text-black !capitalize'><FcGoogle className='text-[25px]'/> LogIn With Google</Button>


          </form>


        </div>
      </div>

    </section>
  )
}

export default Login