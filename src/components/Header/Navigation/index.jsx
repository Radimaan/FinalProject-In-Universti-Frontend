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
      <nav >
        <div className="container flex items-center justify-end gap-8 ">
          <div className='col-1 w-[20%] '>
            <Button className="!text-black  !font-semibold gap-2 !w-full !text-[12px] group/me" onClick={() => OpenCategoryPanel(true)}><RiMenu2Fill className='!font-bold text-[18px]' />
              Shop By Categories <LiaAngleDownSolid className='!text-[12px] ml-auto font-bold                             group-hover/me:translate-y-1 ransition-all duration-300 ease-out' /></Button>
          </div>
          <div className='col-2 w-[60%]'>

            <ul className='flex items-center  '>
              <li className='list-none '>
                <Link to="/#" className=' !font-[600] hover:text-[#ff5252] transition'>
                  <Button className="!text-[15px] !font-[500] hover:!text-[#ff5252] transition !text-black">
                    Home
                  </Button>
                </Link>
              </li>
              <li className='list-none relative  group/Fashion'>
                <Link to="/#" className='text-[16px] !font-[500] hover:text-[#ff5252] transition'>
                  <Button className="!text-[15px] !font-[500] hover:!text-[#ff5252] transition !text-black">
                    Fations
                  </Button>
                </Link>

                <div className="sub-menu absolute top-[100%] left-0 w-full min-w-[200px] !justify-start !text-left bg-white shadow-sm 
              opacity-0 invisible
                              translate-y-6
                          
                              transition-all duration-300 ease-out
                          
                              group-hover/Fashion:opacity-100
                              group-hover/Fashion:visible
                              group-hover/Fashion:translate-y-0
                              z-50
                            ">
                  <ul>
                    <li className="list-none Relative  group/Fashion-Sub1 ">
                      <Link to="/" className="w-full">
                        <Button className="!text-[15px] !font-[500] transition !text-[rgba(0,0,0,0.8)] w-full !justify-start !rounded-none">
                          Men</Button></Link>

                      <div
                        className="
                              sub-menu absolute top-[4%] left-[100%]
                              w-full min-w-[200px]
                              bg-white shadow-sm
                          
                              opacity-0 invisible
                              translate-x-6
                          
                              transition-all duration-300 ease-out
                          
                              group-hover/Fashion-Sub1:opacity-100
                              group-hover/Fashion-Sub1:visible
                              group-hover/Fashion-Sub1:translate-x-0
                              z-50
                            "
                      >

                        <ul>
                          <li className="list-none">
                            <Link to="/" className="w-full">
                              <Button className="!text-[15px] !font-[500] transition !text-[rgba(0,0,0,0.8)] w-full !justify-start !rounded-none">
                                T-shirt</Button></Link>
                          </li>
                          <li className="list-none">
                            <Link to="/" className="w-full">

                              <Button className="!text-[15px] !font-[500]  transition !text-[rgba(0,0,0,0.8)] w-full !justify-start !rounded-none">
                                Suit</Button></Link>
                          </li>
                          <li className="list-none">
                            <Link to="/" className="w-full">
                              <Button className="!text-[15px] !font-[500] !text-[rgba(0,0,0,0.8)] transition w-full !justify-start !rounded-none">
                                Shoes</Button> </Link>
                          </li>
                          <li>
                            <Link to="/" className="w-full">
                              <Button className="!text-[15px] !font-[500]  !transition !text-[rgba(0,0,0,0.8)] w-full !justify-start !rounded-none">
                                Jeans</Button> </Link>
                          </li>
                          <li>
                            <Link to="/" className="w-full">
                              <Button className="!text-[15px] !font-[500] !text-[rgba(0,0,0,0.8)] transition  w-full !justify-start !rounded-none">
                                Watchs</Button>
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </li>
                    <li className="list-non relative group/Fashion-Sub2">
                      <Link to="/" className="w-full">

                        <Button className="!text-[15px] !font-[500]  transition !text-[rgba(0,0,0,0.8)] w-full !justify-start !rounded-none">
                          Women</Button></Link>




                      <div
                        className="
                              sub-menu absolute top-[-80%] left-[100%]
                              w-full min-w-[200px]
                              bg-white shadow-sm
                          
                              opacity-0 invisible
                              translate-x-6
                          
                              transition-all duration-300 ease-out
                          
                              group-hover/Fashion-Sub2:opacity-100
                              group-hover/Fashion-Sub2:visible
                              group-hover/Fashion-Sub2:translate-x-0
                            "
                      >

                        <ul>
                          <li className="list-none">
                            <Link to="/" className="w-full">
                              <Button className="!text-[15px] !font-[500] transition !text-[rgba(0,0,0,0.8)] w-full !justify-start !rounded-none">
                                T-shirt</Button></Link>
                          </li>
                          <li className="list-none">
                            <Link to="/" className="w-full">

                              <Button className="!text-[15px] !font-[500]  transition !text-[rgba(0,0,0,0.8)] w-full !justify-start !rounded-none">
                                Dress</Button></Link>
                          </li>
                          <li className="list-none">
                            <Link to="/" className="w-full">
                              <Button className="!text-[15px] !font-[500] !text-[rgba(0,0,0,0.8)] transition w-full !justify-start !rounded-none">
                                Sneakers</Button> </Link>
                          </li>
                          <li>
                            <Link to="/" className="w-full">
                              <Button className="!text-[15px] !font-[500]  !transition !text-[rgba(0,0,0,0.8)] w-full !justify-start !rounded-none">
                                Handbag</Button> </Link>
                          </li>
                          <li>
                            <Link to="/" className="w-full">
                              <Button className="!text-[15px] !font-[500] !text-[rgba(0,0,0,0.8)] transition  w-full !justify-start !rounded-none">
                                Watchs</Button>
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </li>
                    <li className="list-none">
                      <Link to="/" className="w-full">
                        <Button className="!text-[15px] !font-[500] !text-[rgba(0,0,0,0.8)] transition w-full !justify-start !rounded-none">
                          Kids</Button> </Link>
                    </li>
                    <li>
                      <Link to="/" className="w-full">
                        <Button className="!text-[15px] !font-[500]  !transition !text-[rgba(0,0,0,0.8)] w-full !justify-start !rounded-none">
                          Girls</Button> </Link>
                    </li>
                    <li>
                      <Link to="/" className="w-full">
                        <Button className="!text-[15px] !font-[500] !text-[rgba(0,0,0,0.8)] transition  w-full !justify-start !rounded-none">
                          Boys</Button>
                      </Link>
                    </li>
                  </ul>
                </div>
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