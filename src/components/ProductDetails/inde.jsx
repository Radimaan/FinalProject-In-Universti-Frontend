import React, { useState } from 'react'

import Rating from '@mui/material/Rating';
import Button from '@mui/material/Button';
import QtyBox from '../../components/QtyBox';
import { MdOutlineShoppingCart } from 'react-icons/md';
import { RiRobot3Line } from 'react-icons/ri';
import { FaRegHeart } from 'react-icons/fa';
import { GoGitCompare } from "react-icons/go";
import { FaHeart } from "react-icons/fa6";


const ProductDetailsComponent = () => {
    const [productActionIndex, SetProductActionIndex] = useState(null);
    const [heartVal, setHeartVal] = useState(false);


   const toggleHeart = () => {
    setHeartVal((heartVal) => !heartVal);
  };

  
  
  return (
    < >
      <h1 className='text-[25px] font-[700] !capitalize mb-3'>Siril Poly Silk White & Beige Color Saree With Blouse Piece | sarees for Women| saree | sarees</h1>
      <div className="flex items-center">
        <span className='text-gray-400 text-[13px]'>Brands : <span className='font-[500] text-black capitalize opacity-75'>House of Chikankari
        </span></span>
        <Rating name="size-small" defaultValue={5} size="small" readOnly />

        <span className='text-gray-400 text-[13px] cursor-pointer'>{" "} (7) Review</span>
      </div>

      <div className="flex items-center gap-4 my-3">
        <span className="OldPrice line-through text-gray-500 text-[20px] font-[600]">$23.00</span>
        <span className="NewPrice text-[#ff5252] text-[20px] font-[700]">$20.99</span>
        <span className='text-[14px] '>Available In Stock : <span className='text-[14px] font-bold text-green-600'>134 Items</span></span>
      </div>
      <p className='pr-10'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
      <div className="flex items-center my-3 gap-3">
        <span>Size : </span>

        <Button
          className={`!w-8 h-8 !min-w-8 !font-semibold !border !border-gray-300 ${productActionIndex === 0 ? "!bg-[#ff5252] !text-white" : "!text-black hover:!bg-[#f0631d10]"
            }`}
          onClick={() => SetProductActionIndex(0)}
        >
          S
        </Button>

        <Button
          className={`!w-8 h-8 !min-w-8 !font-semibold !border !border-gray-300 ${productActionIndex === 1 ? "!bg-[#ff5252] !text-white" : "!text-black hover:!bg-[#f0631d10]"
            }`}
          onClick={() => SetProductActionIndex(1)}
        >
          M
        </Button>

        <Button
          className={`!w-8 h-8 !min-w-8 !font-semibold !border !border-gray-300 ${productActionIndex === 2 ? "!bg-[#ff5252] !text-white" : "!text-black hover:!bg-[#f0631d10]"
            }`}
          onClick={() => SetProductActionIndex(2)}
        >
          L
        </Button>
        <Button
          className={`!w-8 h-8 !min-w-8 !font-semibold !border !border-gray-300 ${productActionIndex === 3 ? "!bg-[#ff5252] !text-white" : "!text-black hover:!bg-[#f0631d10]"
            }`}
          onClick={() => SetProductActionIndex(3)}
        >
          XL
        </Button>
      </div>

      <p>Free Shipping (Est. Delivery Time 1-2 Days)</p>

      <div className="flex items-center mt-2 gap-4 m-auto">
        <div className="qtyBoxWarrber w-[80px] ">
          <QtyBox />

        </div>
        <div className="flex gap-4  ">
          <Button className="btn-org gap-2 !mt-0 "><MdOutlineShoppingCart className="text-[20px]" /> Add To Cart</Button>
          <Button className="!border !border-[#ff5252] p-[5px 15px] !text-black  "> <RiRobot3Line className="text-[30px] !bg-transparent" /></Button>
        </div>

      </div>
      <div className="flex items-center gap-4  mt-3">
        <span
          onClick={toggleHeart}
          className="flex items-center gap-2 text-[14px] font-[500] cursor-pointer link"
        >
          {heartVal ? (
            <FaHeart className="text-red-500" />
          ) : (
            <FaRegHeart />
          )}
          Add To WishList
        </span>
        <span className='flex items-center gap-2 text-[14px] link  font-[500]'><GoGitCompare />Add To Compaire</span>
      </div>

    </>
  )
}

export default ProductDetailsComponent