import React, { useContext } from 'react'
import Button from '@mui/material/Button'
import { FaCloudUploadAlt } from 'react-icons/fa'
import { FaRegHeart, FaRegUser } from 'react-icons/fa6'
import { IoBagCheckOutline } from 'react-icons/io5'
import { IoIosLogOut } from 'react-icons/io'
import { NavLink } from 'react-router-dom'
import  TextField  from '@mui/material/TextField'
import { MyContext } from '../../App'

const MyAccount = () => {

  const context = useContext(MyContext);

  const handleUpdeteProfile = () => {
    context.OpenAleartBox("Success", "Profile Updated Successfully!")

  }
  return (
    <section className="py-10 w-full">
      <div className="container flex gap-4">
        <div className="col1 w-[20%]">
          <div className="card bg-white  rounded-md shadow-md">
            <div className="w-full p-5 flex items-center  border-b justify-center flex-col mb-4">
              <div className="img w-[110px] h-[110px] bg-gray-200 rounded-full overflow-hidden object-cover mb-4 relative group cursor-pointer">
                <img src="https://i.pinimg.com/736x/fb/31/37/fb3137e1e851320d806809d0473f446d.jpg" alt="" className='w-full h-full object-cover' />
                <div className="absolute top-0 left-0 w-full h-full bg-black/50 opacity-0 group-hover:opacity-100 transition-all flex items-center justify-center">
                  <FaCloudUploadAlt className="text-[23px] text-white" />
                  <input type="file" className="absolute top-0 left-0 w-full h-full opacity-0 cursor-pointer" />

                </div>
              </div>
              <h3 className="text-lg font-semibold capitalize">John Doe</h3>
              <span className="text-gray-500 text-[14px] ">radhassan555@gmail.com</span>

            </div>

            <ul className='list-none bg-[#f1f1f1] pb-5 myAccountMenu '>
              <li className='w-full  '>
                <NavLink to="/my-account"
                  end
                  className={({ isActive }) => isActive ? "active" : ""} >
                  <Button className='w-full text-left mx-auto flex items-center !justify-start gap-5  text-[14px] font-[600] !rounded-none !capitalize !text-[rgba(0,0,0,0.87)] overflow-hidden  '>
                    <FaRegUser className='text-[16px]' /> User Profile</Button>
                </NavLink>
              </li>
              <li className='w-full'>
                <NavLink to="/my-wishlist"
                  end
                  className={({ isActive }) => isActive ? "active" : ""} >

                  <Button className='w-full text-left mx-auto flex items-center !justify-start gap-5  text-[14px] font-[600] !rounded-none !capitalize !text-[rgba(0,0,0,0.87)]'><FaRegHeart className='text-[16px]' /> My List</Button>
                </NavLink>
              </li>
              <li className='w-full'>
                <NavLink to="/my-orders"
                  end
                  className={({ isActive }) => isActive ? "active" : ""} >
                  <Button className='w-full text-left mx-auto flex items-center !justify-start gap-5  text-[14px] font-[600] !rounded-none !capitalize !text-[rgba(0,0,0,0.87)]'><IoBagCheckOutline className='text-[16px]' /> My Orders</Button>
                </NavLink>
              </li>
              <li className='w-full'>
                <Button className='w-full text-left mx-auto flex items-center !justify-start gap-5  text-[14px] font-[600] !rounded-none !capitalize !text-[rgba(0,0,0,0.87)]' onClick={()=> context.setIsLoggedIn(false)}><IoIosLogOut className='text-[16px]' /> LogOut</Button>
              </li>

            </ul>
          </div>
        </div>
        <div className="col2 w-[50%]">
          <div className="card bg-white p-5 rounded-md shadow-md">
            <h3 className="text-[18px] font-bold mb-4 border-b">My Profile</h3>
            <form action="" className='flex flex-col gap-4 w-full'>
              <div className="flex flex-row gap-4 w-full">
                <TextField id="name" label="Name" size="small" variant="outlined" className='w-full' />
                <TextField id="phone" label="Phone" size="small" variant="outlined" className='w-full' />
              </div>
              <div className="flex flex-row gap-4 w-full">
                <TextField id="email" label="Email" size="small" variant="outlined" className='w-full' />
                
              </div>
                <div className="flex flex-row gap-4 w-full">
                <TextField id="password" label="Password" size="small" variant="outlined" className='w-full' />
                  <TextField id="confirm-password" label="Confirm Password" size="small"  variant="outlined" className='w-full' />
              </div>
              <div className="flex gap-4 justify-between">
                <Button variant='contained' className='btn-org w-[250px]' onClick={handleUpdeteProfile}>Update Profile</Button>
                <Button variant='outlined' className=' btn-border w-[200px]' >Cancel</Button>
              </div>
              </form>
              </div>
        </div>

      </div>
    </section>
  )
}

export default MyAccount