import React, { useState } from 'react'
import Button from '@mui/material/Button'
import { BsFillBagCheckFill } from 'react-icons/bs'
import CartItems from './CartItems'

const CartPage = () => {

  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      title: "Modestouze Attires",
      image: "https://api.spicezgold.com/download/file_1734529520274_eyebogler-men-s-full-sleeves-collor-neck-regular-fit-solid-dark-red-t-shirt-product-images-rvoeivrsgi-1-202211052110.webp",
      qty: 2,
      price: 29.99,
      ordprice: 39.99,
      mininfo: "House of Chikankari",
      rutting: 4,
      beroff: "25%",
    },
    {
      id: 2,
      title: "Casual Wear",
      image: "https://api.spicezgold.com/download/file_1734527074321_ksc-khatushyam-collection-red-pu-for-women-handheld-bag-product-images-rvvxdnkjfy-0-202405290001.webp",
      qty: 1,
      price: 39.99,
      ordprice: 49.99,
      mininfo: "Khatushyam Collection",
      rutting: 5,
      beroff: "20%",
    }
  ])

  const removeItem = (id) => {
    setCartItems(prev => prev.filter(item => item.id !== id))
  }

   const subtotal = cartItems.reduce(
    (acc, item) => acc + item.qty * item.price,
    0
  )

  const shipping = 2.99
  const total = subtotal + shipping

const updateQty = (id, newQty) => {
    setCartItems(prev =>
      prev.map(item =>
        item.id === id ? { ...item, qty: newQty } : item
      )
    )
  }

  return (
    <section className='section py-5 pb-10'>
      <div className="container flex max-w-[80%] gap-5">

        {/* LEFT */}
        <div className="leftpart w-[70%]">
          <h2 className='text-[22px] font-bold'>Your Cart</h2>
          <p>
            There are <span className='primary font-bold'>
              {cartItems.length}
            </span> products in your cart
          </p>

          {cartItems.map(item => (
            <CartItems
              key={item.id}
              item={item}
              removeItem={removeItem}
               updateQty={updateQty} // ✅ muhiim ah in la pass gareeyo function-ka updateQty
            />
          ))}
        </div>

        {/* RIGHT */}
        <div className="rightPart w-[30%] mt-16">
          <div className="shadow-md rounded-md p-4 bg-white sticky top-20">
            <h3 className="text-[18px] font-bold mb-2 border-b">
              Order Summary
            </h3>

            <div className="flex justify-between mb-2">
              <span>Subtotal</span>
              <span>${subtotal.toFixed(2)}</span>
            </div>

            <div className="flex justify-between mb-2">
              <span>Shipping</span>
              <span>${shipping.toFixed(2)}</span>
            </div>

            <hr className="my-2" />

            <div className="flex justify-between mb-4 font-bold">
              <span>Total</span>
              <span>${total.toFixed(2)}</span>
            </div>

            <Link to="/CheckOut" className="w-full text-center">
              <Button className="btn-org btn-lg w-full">
                <BsFillBagCheckFill className='inline-block mr-2' />
                Proceed to Checkout
              </Button>
            </Link>

          </div>
        </div>

      </div>
    </section>
  )
}

export default CartPage