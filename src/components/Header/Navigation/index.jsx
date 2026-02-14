import React, { useState } from "react";
import { Link } from "react-router-dom";
import Button from '@mui/material/Button'; 
import { RiMenu2Fill } from "react-icons/ri";
import { LiaAngleDownSolid } from "react-icons/lia";
import { GoRocket } from "react-icons/go";
import CatagoryPanel from './CatagoryPanel';




const Navigation = () => {
  const [isOpenCatPAnel, setIsOpenCatPanel] = useState(false);

  const OpenCategoryPanel = (value) => {
  setIsOpenCatPanel(value);
};


  return (
    <>
    <nav className="navigation py-3 border-b-[1px] border-gray-250">
      <div className="container flex items-center justify-end gap-8">
        <div className='col-1 w-[25%] '>
          <Button className="!text-black  !font-semibold gap-2 !w-full" onClick={() => OpenCategoryPanel(true)}><RiMenu2Fill className='!font-bold text-[18px]' />
 SHOP By Categories <LiaAngleDownSolid className='!text-[13px] ml-auto font-bold' /></Button>
        </div>
        <div className='col-2 w-[60%]'>

          <ul className='flex items-center gap- '>
            <li className='list-none '>
              <Link to="/#" className=' !font-[600] hover:text-[#ff5252] transition'>
              <Button className="!text-[15px] !font-[500] hover:!text-[#ff5252] transition !text-black">
                Home
              </Button>
              </Link>
            </li>
            <li className='list-none '>
              <Link to="/#" className='text-[16px] !font-[500] hover:text-[#ff5252] transition'>
              <Button className="!text-[15px] !font-[500] hover:!text-[#ff5252] transition !text-black">
                Fations
              </Button>
              </Link>
            </li>
            <li className='list-none '>
              <Link to="/#" className='text-[16px] !font-[500] hover:text-[#ff5252] transition'><Button className="!text-[15px] !font-[500] hover:!text-[#ff5252] transition !text-black">Electronics</Button></Link>
            </li>
            <li className='list-none '>
              <Link to="/#" className='text-[16px] !font-[500] hover:text-[#ff5252] transition'><Button className="!text-[15px] !font-[500] hover:!text-[#ff5252] transition !text-black">Pags</Button></Link>
            </li>
            <li className='list-none '>
              <Link to="/#" className='text-[16px] !font-[500] hover:text-[#ff5252] transition'><Button className="!text-[15px] !font-[500] hover:!text-[#ff5252] transition !text-black">FootWear</Button></Link>
            </li>
            <li className='list-none '>
              <Link to="/#" className='text-[16px] !font-[500] hover:text-[#ff5252] transition'><Button className="!text-[15px] !font-[500] hover:!text-[#ff5252] transition !text-black">Groceries</Button></Link>
            </li>
            <li className='list-none '>
              <Link to="/#" className='text-[16px] !font-[500] hover:text-[#ff5252] transition'><Button className="!text-[15px] !font-[500] hover:!text-[#ff5252] transition !text-black">Beauty</Button></Link>
            </li>
            <li className='list-none '>
              <Link to="/#" className='text-[16px] !font-[500] hover:text-[#ff5252] transition'><Button className="!text-[15px] !font-[500] hover:!text-[#ff5252] transition !text-black">Wellness</Button></Link>
            </li>
            <li className='list-none '>
              <Link to="/#" className='text-[16px] !font-[500] hover:text-[#ff5252] transition'><Button className="!text-[15px] !font-[500] hover:!text-[#ff5252] transition !text-black">Jewellery</Button></Link>
            </li>
             
          </ul>
        </div>

        <div className='col-3 w-[20%] flex justify-end'>
          <p className='text-[14px] text-black font-bold flex items-center gap-3 mb-0 mt-0'> <GoRocket className='inline mr-1' />free international delivery

          </p>
        </div>
        
      </div>
    </nav>

    {/* Catagory Panel component */}
    <CatagoryPanel OpenCategoryPanel={OpenCategoryPanel} isOpenCatPAnel={isOpenCatPAnel} />
    
    </>
  );
} 
export default Navigation;