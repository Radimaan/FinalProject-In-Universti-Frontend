import React, { useState } from 'react'
import Breadcrumbs from '@mui/material/Breadcrumbs';
import { Link } from 'react-router-dom';
import ProductZoom from '../../components/ProductZoom';
import Rating from '@mui/material/Rating';
import { Button } from '@mui/material';



const ProductDelails = () => {

  const [activeSize, setactivesize] = useState(false);

  const handleClick = (size) => {
    setActiveSize(size); // set the clicked size as active
  };

  return (
    <>
      <div className="py-5">
        <div className="container pl-2  ">
          <Breadcrumbs aria-label="breadcrumb">
            <Link underline="hover" color="inherit" href="/" className="link">
              Home
            </Link>
            <Link
              underline="hover"
              color="inherit"
              href="/" className="link"
            >
              Fation
            </Link>
          </Breadcrumbs>
        </div>


      </div>

      <section className='bg-white py-5'>
        <div className=" container flex  gap-4">
          <div className="productZoomContainer !w-[40%] ">
            <ProductZoom />
          </div>
          <div className="productcontent !w-[60%] pr-20 ">
            <h1 className='text-[25px] font-[700] !capitalize mb-3'>Chikankari Woven Kurta</h1>
            <div className="flex items-center">
              <span className='text-gray-400 text-[13px]'>Brands : <span className='font-[500] text-black capitalize opacity-75'>House of Chikankari
              </span></span>
              <Rating name="size-small" defaultValue={5} size="small" readOnly />

              <span className='text-gray-400 text-[13px] cursor-pointer'>{" "} (7) Review</span>
            </div>

            <div className="flex items-center gap-4 my-3">
              <span className="OldPrice line-through text-gray-500 text-[20px] font-[600]">$23.00</span>
              <span className="NewPrice text-[#ff5252] text-[20px] font-[700]">$20.99</span>
            </div>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
            <div className="flex items-center my-3 gap-3">
              <span>Size : </span>

              <Button
                className={`!w-8 h-8 !min-w-8 !text-lg !border !border-gray-300 ${activeSize === "S" ? "!bg-[#ff5252] !text-white" : "!text-black hover:!bg-[#f0631d10]"
                  }`}
                onClick={() => handleClick("S")}
              >
                S
              </Button>

              <Button
                className={`!w-8 h-8 !min-w-8 !text-lg !border !border-gray-300 ${activeSize === "M" ? "!bg-[#ff5252] !text-white" : "!text-black hover:!bg-[#f0631d10]"
                  }`}
                onClick={() => handleClick("M")}
              >
                M
              </Button>

              <Button
                className={`!w-8 h-8 !min-w-8 !text-lg !border !border-gray-300 ${activeSize === "L" ? "!bg-[#ff5252] !text-white" : "!text-black hover:!bg-[#f0631d10]"
                  }`}
                onClick={() => handleClick("L")}
              >
                L
              </Button>
            </div>
            
            <div className="flex items-center">

            </div>

          </div>

        </div>
      </section>
    </>
  )
}

export default ProductDelails