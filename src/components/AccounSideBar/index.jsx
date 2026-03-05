import Button from '@mui/material/Button'
import { FaRegHeart, FaRegUser } from 'react-icons/fa6'
import { IoBagCheckOutline } from 'react-icons/io5'
import { IoIosLogOut } from 'react-icons/io'
import { NavLink } from 'react-router-dom'
import { FaCloudUploadAlt } from 'react-icons/fa'

const AccountSideBar = () => {
  return (
    <>
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
    </>
  )
}

export default AccountSideBar