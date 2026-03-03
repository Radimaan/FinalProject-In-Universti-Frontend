import React, { useState } from "react";
import Button from "@mui/material/Button";
import { BsFillBagCheckFill } from "react-icons/bs";
import MylistItems from "./MylistItems";
import { Link } from "react-router-dom";

const MyList = () => {

  const [listItems, setListItems] = useState([
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
  ]);

  const removeItem = (id) => {
    setListItems(prev => prev.filter(item => item.id !== id));
  };

  const subtotal = listItems.reduce(
    (acc, item) => acc + item.qty * item.price,
    0
  );

  const shipping = 2.99;
  const total = subtotal + shipping;

  return (
    <section className="section py-5 pb-10">
      <div className="container flex max-w-6xl gap-5 flex-col">

        {/* LEFT */}
        <div className=" w-2/3">
          <h2 className="text-[22px] font-bold">My Wishlist</h2>
          <p>
            There are{" "}
            <span className="primary font-bold">
              {listItems.length}
            </span>{" "}
            products in your wishlist
          </p>

          {listItems.map(item => (
            <MylistItems
              key={item.id}
              item={item}
              removeItem={removeItem}
            />
          ))}
          
        </div>

       

      </div>
    </section>
  );
};

export default MyList;