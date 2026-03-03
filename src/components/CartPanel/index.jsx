import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { MdOutlineDeleteOutline } from 'react-icons/md'
import Button from '@mui/material/Button'

const CartPanel = () => {
   const [cartItems, setCartItems] = useState([
    {
      id: 1,
      title:
        "Modestouze Attires Women's ",
      image:
        "https://api.spicezgold.com/download/file_1734526836569_modestouze-attires-women-s-mukaish-worked-ethnic-jacket-with-top-and-pant-set-product-images-rvziicqwq6-0-202403231855.jpg",
      qty: 2,
      price: 29.99,
    },
    {
      id: 2,
      title:
        "Men Alias-N Regular Fit Spread Collar Shirt ",
      image:
        "https://api.spicezgold.com/download/file_1734690981297_23990e6b-d01e-40fd-bb6b-98198db544c01714702040162RARERABBITMenComfortOpaqueCasualShirt2.jpg",
      qty: 4,
      price: 59.99,
    },
    {
      id: 3,
      title:
        "shahriar Men Regular Fit Spread Collar Shirt ",
      image:
        "https://api.spicezgold.com/download/file_1734529571688_zoom_2-1713900137.webp",
      qty: 1,
      price: 59.99,
    },
    {
      id: 4,
      title:
        "Khatushyam Collection Red PU for",
      image:
        "https://api.spicezgold.com/download/file_1734527074321_ksc-khatushyam-collection-red-pu-for-women-handheld-bag-product-images-rvvxdnkjfy-0-202405290001.webp",
      qty: 6,
      price: 5.99,
    },
    {
      id: 5,
      title:
        "Brand Print Backpack",
      image:
        "https://api.spicezgold.com/download/file_1734691763157_dd0559-010-brand-print-backpack-model3-469146023_black-3-202206030903.webp",
      qty: 8,
      price: 59.00,
    },
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

  return (
    <>

      <div className="scroll w-full h-[300px] overflow-y-scroll overflow-x-hidden py-3 px-4 ">
    {cartItems.map((item) => (
        <div  key={item.id} className="cartItems w-full items-center flex flex-row gap-4 shadow-md pb-2 px-2 group rounded-md relative">
          <div className="img w-[25%] overflow-hidden h-[80px] rounded-sm">
            <Link to={`/product/${item.id}`}>
              <img src={item.image} alt="" className="w-full h-full object-cover transition-all duration-300 group-hover:scale-105" />
            </Link>
          </div>
          <div className="info w-[75%] pl-4 pr-5 relative">
            <Link to={`/product/${item.id}`} className='block mb-1 link'>
              <h2 className="text-[14px] font-semibold mb-1">{item.title}</h2>
            </Link>
            <p className=" flex items-center  gap-5">
              <span>Qty: <span className='primary font-semibold' >{item.qty}</span></span>
              <span className=' f'>Price: <span className='primary font-semibold'> ${ item.price} </span></span>
            </p>
              <span>Total: <span className='primary font-semibold'> ${(item.qty * item.price).toFixed(2)}</span></span>
            <MdOutlineDeleteOutline onClick={() => removeItem(item.id)} className='text-[20px] text-gray-500 cursor-pointer link absolute top-1 -right-4' />

          </div>

        </div>     ))}

  
      </div>
    

     <div className="buttmsec absolute bottom-0 left-0 w-full bg-white">
       <div className="buttoninfo border-t flex items-center justify-between p-4         flex-col text-black shadow-md py-2 ">
        <div className="flex items-center justify-between w-full ">
          <span className='text-[14px] font-semibold  '>{cartItems.length} Item{cartItems.length > 1 ? 's' : ''}</span>
          <span className="font-semibold text-lg primary">${subtotal.toFixed(2)}</span>

        </div>
        <div className="flex items-center justify-between w-full ">
          <span className='text-[14px] font-semibold  '>Shipping</span>
          <span className="font-semibold text-lg primary">${shipping.toFixed(2)}</span>

        </div>


      </div>
      <div className="buttoninfo  flex items-center justify-between p-4 flex-col text-black shadow-md py-2">
        <div className="flex items-center justify-between w-full ">
          <span className='text-[14px] font-semibold  '>Total (tax excl.)</span>
          <span className="font-semibold text-lg primary">${total.toFixed(2)}</span>

        </div>



        <div className="flex items-center justify-between w-full mt-2 gap-4">
          
          <Link to="/cart" className=" w-[48%] text-center ">
          <Button className="btn-org  btn-lg w-full">
            View Cart
          </Button>
          </Link>
          <Link to="/CheckOut" className=" w-[48%] text-center ">
          <Button className="btn-org  btn-lg w-full">
            Checkout
          </Button>
          </Link>
        </div>


      </div>
     </div>
    </>
  )
}

export default CartPanel