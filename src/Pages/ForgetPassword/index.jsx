import React, { useContext, useState } from 'react'
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField';
import { IoMdEye, IoMdEyeOff } from 'react-icons/io';
import { Link, useNavigate } from 'react-router-dom';
import { FcGoogle } from 'react-icons/fc';
import { MyContext } from '../../App';


const ForgetPassword = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showPassword2, setShowPassword2] = useState(false);
  
  
 
  const history = useNavigate();

  const context = useContext(MyContext);
  const ChangedPassword = () => {
    context.OpenAleartBox("Success", "Password Changed Successfully!")
    history("/Login");
  }

 

  return (
    <section className="py-10 sectin">
      <div className="container">
        <div className="card shadow-md p-5 w-[400px] m-auto rounded-md bg-white">
          <h2 className="text-[20px] font-[500] text-center text-black">Forget Password </h2>
          <form action="" className="flex flex-col gap-4 mt-5 w-full px-3">
            <div className="form-group relative flex items-center">

              <TextField
                id="standard-password-input"
                label="New Password"
                type={showPassword ? "text" : "password"}
                autoComplete="current-password"
                variant="outlined"
                className='w-full'
                name='password'
                
              />
              <Button  onClick={() => setShowPassword(!showPassword)}
                className='!absolute top-2 right-2 !min-w-[35px] !w-[35px] !h-[35px] !rounded-full !text-black link'
              >
                {showPassword ? <IoMdEyeOff className="text-[20px] opacity-75" /> : <IoMdEye className="text-[20px] opacity-75" />}
              </Button>
              

            </div>
            <div className="form-group pb-3 relative">
              <TextField
                id="standard-password-input"
                label="Confirm Password"
                type={showPassword2 ? "text" : "password"}
                autoComplete="current-password"
                variant="outlined"
                className='w-full'
                name='confirmPassword'
                
              />
              <Button  onClick={() => setShowPassword2(!showPassword2)}
                className='!absolute top-2 right-2 !min-w-[35px] !w-[35px] !h-[35px] !rounded-full !text-black link'
              >
                {showPassword2 ? <IoMdEyeOff className="text-[20px] opacity-75" /> : <IoMdEye className="text-[20px] opacity-75" />}
              </Button>

            </div>

           
            <Button className='btn-org btn-lg !w-full' onClick={ChangedPassword}>Change Password</Button>

          


          </form>


        </div>
      </div>

    </section>
  )
}

export default ForgetPassword