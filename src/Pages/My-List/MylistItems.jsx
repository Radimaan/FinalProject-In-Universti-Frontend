import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { IoCloseSharp } from "react-icons/io5";
import { Button, Rating } from "@mui/material";
import { MyContext } from "../../App";

const MylistItems = ({ item, removeItem }) => {
  const context = useContext(MyContext);

  const hadelchange = () => {
    context.OpenAleartBox("Success", "Product Added To Cart Successfully!")
    Button.disabled = false;
  }
  return (
    <div className="shadow-md rounded-md p-2 bg-white mt-2 relative">
      <div className="cartItems w-full flex items-center gap-4">

        <div className="img w-[15%] overflow-hidden rounded-sm">
          <Link to={`/product/${item.id}`} className="group">
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
            className="text-[20px] text-gray-500 cursor-pointer absolute top-2 right-2"
          />

          <span className="text-sm">{item.mininfo}</span>

          <h2 className="text-[16px] w-40 font-semibold mb-1">
            <Link to={`/product/${item.id}`} className="link">
              {item.title}
            </Link>
          </h2>

          <Rating
            value={item.rutting}
            size="small"
            readOnly
          />

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
          <Button className="btn-org btn-sm " onClick={hadelchange}>Add Cart</Button>


        </div>
      </div>
    </div>
  );
};

export default MylistItems;