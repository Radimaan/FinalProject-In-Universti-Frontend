import React from 'react'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import { BsFillBagCheckFill } from 'react-icons/bs';

const CheckOut = () => {
  return (
    <section className="checkout-page py-10">
      <div className="container  gap-5">
        <h2 className="text-[24px] font-bold mb-5">Checkout</h2>
        <p className="mb-10">Please review your order and proceed to payment.</p>
        <div className="checkout-content flex gap-10 relative">
          <div className="billing-info w-[70%] bg-white p-5 rounded-md shadow-md">
            <h3 className="text-[18px] font-bold mb-4">Billing Information</h3>
            <form className="flex flex-col gap-4">
              <div className="flex gap-4">
                <div className="w-full">
                  <TextField label="Full Name *" variant="outlined" size="small" fullWidth />
                </div>
                <TextField label="Country *" variant="outlined" size="small" fullWidth className="ml-4" />
              </div>
              <div className="w-full">
                <h3 className="mb-2 text-[16px] font-[600]">Street address *</h3>
                <TextField label="House Number & Street Name" variant="outlined" size="small" fullWidth />
              </div>
              <div className="flex gap-4 w-full">
                <TextField label="Apartment, suite, etc. (optional)" variant="outlined" size="small" fullWidth />
              </div>
              <div className="flex">
                  <div className="w-full">
                <TextField label="City *" variant="outlined" size="small" fullWidth />
              </div>
              <div className="w-full ">
                <TextField label="State / County *" variant="outlined" size="small" fullWidth />
              </div>
              </div>
            
              <div className="w-full  flex flex-col">
                <h3 className="mb-2 text-[16px] font-[600]">ZIP / Postal Code **</h3>
                <TextField label="ZIP / Postal Code *" variant="outlined" size="small" fullWidth />
              </div>

              <div className="flex w-full gap-4 mt-3 ">
                <div className="w-full">
                  <TextField label="Phone *" variant="outlined" size="small" fullWidth />
                </div>
                <div className="w-full">
                <TextField label="Email *" variant="outlined" size="small" fullWidth className="ml-4" />
              </div>
              </div>
                
            </form>
          </div>
          <div className="order-summary w-[28%] bg-white p-5 rounded-md shadow-md absolute top-0 right-0 ml-3">
            <h3 className="text-[20px] font-bold mb-4 border-b">Order Summary</h3>
              <div className="flex text-[14px] font-bold mb-2 border-b pb-2">
              <span>Products</span>
              <span className="ml-auto">Suptotal</span>
            </div>
            <div className=" mb-2 scroll max-h-[250px] overflow-y-scroll overflow-x-hidden pr-2">
            <div className="flex items-center justify-between py-3 shadow-lg pr-2">
              <div className="part1 flex items-center gap-3">
              <div className="img w-[50px] h-[50px] object-cover overflow-hidden  rounded-md group cursor-pointer">
                <img src="https://api.spicezgold.com/download/file_1734528821890_siril-georgette-brown-color-saree-with-blouse-piece-product-images-rvegeptjtj-0-202308161431.webp" alt="Product" className="w-full transition-all group-hover:scale-105
                " />
              </div>
              <div className="info">
                <h4 className="text-[14px] font-semibold">EYEBOGLER Teal Tshir...</h4>
                <span className="text-[13px] text-gray-500">Qty: 1</span>
              </div>
              </div>
              <span className="font-semibold text-[16px] primary">$39.99</span>
            </div>
            <div className="flex items-center justify-between py-3 shadow-lg pr-2">
              <div className="part1 flex items-center gap-3">
              <div className="img w-[50px] h-[50px] object-cover overflow-hidden  rounded-md group cursor-pointer">
                <img src="https://api.spicezgold.com/download/file_1734528821890_siril-georgette-brown-color-saree-with-blouse-piece-product-images-rvegeptjtj-0-202308161431.webp" alt="Product" className="w-full transition-all group-hover:scale-105
                " />
              </div>
              <div className="info">
                <h4 className="text-[14px] font-semibold">EYEBOGLER Teal Tshir...</h4>
                <span className="text-[13px] text-gray-500">Qty: 1</span>
              </div>
              </div>
              <span className="font-semibold text-[16px] primary">$39.99</span>
            </div>
            <div className="flex items-center justify-between py-3 shadow-lg pr-2">
              <div className="part1 flex items-center gap-3">
              <div className="img w-[50px] h-[50px] object-cover overflow-hidden  rounded-md group cursor-pointer">
                <img src="https://api.spicezgold.com/download/file_1734528821890_siril-georgette-brown-color-saree-with-blouse-piece-product-images-rvegeptjtj-0-202308161431.webp" alt="Product" className="w-full transition-all group-hover:scale-105
                " />
              </div>
              <div className="info">
                <h4 className="text-[14px] font-semibold">EYEBOGLER Teal Tshir...</h4>
                <span className="text-[13px] text-gray-500">Qty: 1</span>
              </div>
              </div>
              <span className="font-semibold text-[16px] primary">$39.99</span>
            </div>
            <div className="flex items-center justify-between py-3 shadow-lg pr-2">
              <div className="part1 flex items-center gap-3">
              <div className="img w-[50px] h-[50px] object-cover overflow-hidden  rounded-md group cursor-pointer">
                <img src="https://api.spicezgold.com/download/file_1734528821890_siril-georgette-brown-color-saree-with-blouse-piece-product-images-rvegeptjtj-0-202308161431.webp" alt="Product" className="w-full transition-all group-hover:scale-105
                " />
              </div>
              <div className="info">
                <h4 className="text-[14px] font-semibold">EYEBOGLER Teal Tshir...</h4>
                <span className="text-[13px] text-gray-500">Qty: 1</span>
              </div>
              </div>
              <span className="font-semibold text-[16px] primary">$39.99</span>
            </div>
           
           </div>
            <div className="flex items-center justify-between text-[16px] font-bold border-t pt-3">
              <span>Total</span>
              <span className="primary">$159.96</span>
           </div>
           <Button className="btn-org btn-lg w-full mt-5 gap-2 flex items-center justify-center">
              <BsFillBagCheckFill className='inline-block ml-2' />
              CheckOut
           </Button>
             
           
          </div>
        </div>
      </div>
    </section>

  )
}

export default CheckOut