import React, { useContext } from 'react'
import Button from '@mui/material/Button'
import { FaCloudUploadAlt } from 'react-icons/fa'
import { FaRegHeart, FaRegUser } from 'react-icons/fa6'
import { IoBagCheckOutline } from 'react-icons/io5'
import { IoIosLogOut } from 'react-icons/io'
import { NavLink } from 'react-router-dom'
import  TextField  from '@mui/material/TextField'
import { MyContext } from '../../App'
import AccountSideBar from '../../components/AccounSideBar'

const MyAccount = () => {

  const context = useContext(MyContext);

  const handleUpdeteProfile = () => {
    context.OpenAleartBox("Success", "Profile Updated Successfully!")

  }
  return (
    <section className="py-10 w-full">
      <div className="container flex gap-4">
        <div className="col1 w-[20%]">
          <AccountSideBar/>
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