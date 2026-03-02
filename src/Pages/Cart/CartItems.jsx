import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { IoCloseSharp } from 'react-icons/io5'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import { GoTriangleDown } from 'react-icons/go'
import { Rating } from '@mui/material'

const CartItems = ({ item, removeItem, updateQty }) => {

  const [selectedSize, setSelectedSize] = useState("S")
  const [anchorEl, setAnchorEl] = useState(null)
  const open = Boolean(anchorEl)

  const [qtyAnchorEl, setQtyAnchorEl] = useState(null)
  const openQty = Boolean(qtyAnchorEl)

  // ===== SIZE =====
  const handleClickSize = (event) => {
    setAnchorEl(event.currentTarget)
  }

  const handleCloseSize = () => {
    setAnchorEl(null)
  }

  const handleSizeChange = (value) => {
    setSelectedSize(value)
    handleCloseSize()
  }

  // ===== QTY =====
  const handleClickQty = (event) => {
    setQtyAnchorEl(event.currentTarget)
  }

  const handleQtyClose = () => {
    setQtyAnchorEl(null)
  }

  const handleQtyChange = (value) => {
    updateQty(item.id, value)   // 🔥 parent update
    handleQtyClose()
  }

  return (
    <div className="shadow-md rounded-md p-2 bg-white mt-2 relative">
      <div className="cartItems w-full flex items-center gap-4">

        <div className="img w-[15%] overflow-hidden rounded-sm">
          <Link to={`/product/${item.id}`} className='group'>
            <img
              src={item.image}
              alt={item.title}
              className="w-full object-cover rounded-md transition-all duration-300 group-hover:scale-105"
            />
          </Link>
        </div>

        <div className="inf w-[85%]">
          <IoCloseSharp
            onClick={() => removeItem(item.id)}
            className='text-[20px] text-gray-500 cursor-pointer absolute top-2 right-2'
          />

          <span className='text-sm'>{item.mininfo}</span>

          <h2 className="text-[16px] w-40 font-semibold mb-1">
            <Link to={`/product/${item.id}`} className="link">
              {item.title}
            </Link>
          </h2>

          <Rating
            name="size-small"
            value={item.rutting}
            size="small"
            readOnly
          />

          <div className="flex items-center gap-4 mt-2">

            {/* SIZE */}
            <div className="relative">
              <span
                onClick={handleClickSize}
                className='flex items-center justify-center bg-[#f1f1f1] text-[12px] font-semibold p-1 rounded-sm cursor-pointer'
              >
                Size: ({selectedSize})
                <GoTriangleDown className='text-[15px]' />
              </span>

              <Menu
                anchorEl={anchorEl}
                open={open}
                id='Size-menu'

                onClose={handleCloseSize}
              >
                {["S", "M", "L", "XL", "XXL"].map((size) => (
                  <MenuItem
                    key={size}
                    onClick={() => handleSizeChange(size)}
                  >
                    {size}
                  </MenuItem>
                ))}
              </Menu>
            </div>

            {/* QTY */}
            <div className="relative">
              <span
                onClick={handleClickQty}
                className='flex items-center justify-center bg-[#f1f1f1] text-[12px] font-semibold p-1 rounded-sm cursor-pointer'
              >
                Qty: ({item.qty})   {/* ✅ parent state */}
                <GoTriangleDown className='text-[15px]' />
              </span>

              <Menu
                anchorEl={qtyAnchorEl}
                open={openQty}
                id='Size-menu'
                onClose={handleQtyClose}
              >
                {[...Array(13)].map((_, i) => (
                  <MenuItem
                    key={i + 1}
                    onClick={() => handleQtyChange(i + 1)}
                  >
                    {i + 1}
                  </MenuItem>
                ))}
              </Menu>
            </div>

          </div>

          <div className="flex items-center gap-4 mt-2">
            <span className="text-black text-[14px] font-bold">
              ${item.price}
            </span>
            <span className="line-through text-gray-500 text-[14px]">
              ${item.ordprice}
            </span>
            <span className="text-[#ff5252] text-[14px] font-semibold opacity-60">
              {item.beroff} OFF
            </span>
          </div>

        </div>
      </div>
    </div>
  )
}

export default CartItems