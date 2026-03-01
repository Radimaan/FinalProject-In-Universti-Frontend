import React, { useState } from 'react'
import { MdOutlineDeleteOutline } from 'react-icons/md';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import { IoCloseSharp } from 'react-icons/io5';

import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { GoTriangleDown } from 'react-icons/go';
import { Rating } from '@mui/material';
import { TbAxe } from 'react-icons/tb';
import { BsFillBagCheckFill } from 'react-icons/bs';

const CartPage = () => {
   const [sizeanchorEl, setSizeAnchorEl] = useState(null);
   const [SelectedSize, setSelectedSize] = useState("S");
  const openSize = Boolean(sizeanchorEl);
  const handleClickSize = (event) => {
    setSizeAnchorEl(event.currentTarget);
  };
  const handleCloseSize = (size) => {
    setSizeAnchorEl(null);
  };

  const [cartItems, setCartItems] = useState([

    {
      id: 1,
      title:
        "Modestouze Attires",
      image: "https://api.spicezgold.com/download/file_1734529520274_eyebogler-men-s-full-sleeves-collor-neck-regular-fit-solid-dark-red-t-shirt-product-images-rvoeivrsgi-1-202211052110.webp",
      qty: 2,
      price: 29.99,
      ordprice: 39.99,
      mininfo: "House of Chikankari",
      rutting: 4,
      beroff: "25%",
      Size: "S"
    },
    {
      id: 2,
      title:
        "Casual Wear",
      image: "https://api.spicezgold.com/download/file_1734527074321_ksc-khatushyam-collection-red-pu-for-women-handheld-bag-product-images-rvvxdnkjfy-0-202405290001.webp",
      qty: 1,
      price: 39.99,
      ordprice: 49.99,
      mininfo: "Khatushyam Collection",
      rutting: 5,
      beroff: "20%",
      Size: "M",

    },
    {
      id: 3,
      title:
        "Formal Attires",
      image: "https://api.spicezgold.com/download/file_1734529297930_fiorra-women-s-teapot-blue-pure-cotton-a-line-kurta-with-sharara-and-dupatta-product-images-rvo9n8udfg-1-202307260626.jpg",
      qty: 1,
      price: 49.99,
      ordprice: 59.99,
      mininfo: "Fiorra",
      rutting: 4,
      beroff: "15%",
      Size: "L",

    }
  ]);


  const removeItem = (id) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  const subtotal = cartItems.reduce(
    (acc, item) => acc + item.qty * item.price,
    0
  );

  const shipping = 2.99;
  const total = subtotal + shipping;
  const Counry = "United Kingdom"
  return (
    <section className=' section py-5 pb-10'>
      <div className="container flex max-w-[80%] gap-5">
        <div className="leftpart w-[70%]">
          <h2 className='text-[22px] font-bold '>Your Cart</h2>
          <p>There are <span className='primary font-bold'>{cartItems.length}</span> products in your cart</p>
          {cartItems.map((item) => (
            <div className="shadow-md rounded-md p-2 bg-white mt-2 relative ">
              <div key={item.id} className="cartItems w-full flex items-center gap-4">
                <div className="img w-[15%] overflow-hidden  rounded-sm">
                  <Link to={`/product/${item.id}`} className='group '>
                    <img src={item.image} alt={item.title} className="w-full object-cover rounded-md   transition-all 
                duration-300 group-hover:scale-105" />
                  </Link>
                </div>
                <div className="inf w-[85%] ">
                  <IoCloseSharp onClick={() => removeItem(item.id)} className='text-[20px] text-gray-500 cursor-pointer link absolute top-2 right-2 ' />
                  <span className='text-sm'>{item.mininfo}</span>
                  <h2 className="text-[16px] w-40 font-semibold mb-1 link"><Link to={`/product/${item.id}`} >{item.title}</Link></h2>
                  <Rating name="size-small" defaultValue={item.rutting} size="small" readOnly />


                  <div className="flex items-center gap-4">
                    <div className="relative">
                      <span className='flex items-center justify-center bg-[#f1f1f1] text-[12px] font-[600] p-1 rounded-sm cursor-pointer' onClick={handleClickSize}>Size: ({item.Size})
                        <GoTriangleDown className='text-[15px]' />
                      </span>

                      <Menu
                        id="Size-menu"
                        anchorEl={sizeanchorEl}
                        open={openSize}
                        onClose={handleCloseSize}
                        slotProps={{
                          list: {
                            'aria-labelledby': 'basic-button',
                          },
                        }}

                      >
                        <MenuItem  onClick={() => handleCloseSize("S")}>S</MenuItem>
                        <MenuItem  onClick={() => handleCloseSize("M")}>M</MenuItem>
                        <MenuItem  onClick={() => handleCloseSize("L")}>L</MenuItem>
                        <MenuItem  onClick={() => handleCloseSize("XL")}>XL</MenuItem>
                        <MenuItem  onClick={() => handleCloseSize("XXL")}>XXL</MenuItem>
                      </Menu>
                    </div>
                    <div className="relative">
                      <span className='flex items-center justify-center bg-[#f1f1f1] text-[12px] font-[600] p-1 rounded-sm cursor-pointer'>Qty: ({item.qty})
                        <GoTriangleDown className='text-[15px]' />
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <span className="NewPrice text-[#000] text-[14px] font-bold">${item.price}</span>
                    <span className="OldPrice line-through text-gray-500 text-[14px] font-[500]">${item.ordprice}</span>
                    <span className="NewPrice text-[#ff5252] text-[14px] font-[600] opacity-50">{item.beroff} OFF</span>
                  </div>
                </div>

              </div>
            </div>
          ))}

        </div>
        <div className="rightPart w-[30%] mt-16">
          <div className="shadow-md rounded-md p-4 bg-white sticky top-20">
            <h3 className="text-[18px] font-bold mb-2 border-b">Order Summary</h3>
            <div className="flex justify-between items-center mb-2">
              <span>Subtotal</span>
              <span>${subtotal.toFixed(2)}</span>
            </div>
            <div className="flex justify-between items-center mb-2">
              <span>Shipping</span>
              <span>${shipping.toFixed(2)}</span>
            </div>
            <div className="flex justify-between items-center mb-2">
              <span>Estimate for</span>
              <span>{Counry}</span>
            </div>
            <hr className="my-2" />
            <div className="flex justify-between items-center mb-4">
              <span className="font-bold">Total</span>
              <span className="font-bold">${total.toFixed(2)}</span>
            </div>
            <Button className="w-full btn-org btn-lg text-white py-2 rounded-md  transition-colors duration-300 flex items-center justify-center gap-8"><BsFillBagCheckFill className='text-[20px] ' /> Checkout </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CartPage