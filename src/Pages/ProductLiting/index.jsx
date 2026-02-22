import React, { useState } from "react";
import SideBar from "../../components/SideBar";

import Typography from '@mui/material/Typography';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import ProductItem from "../../components/ProductItem";
import ProductItemListVieu from "../../components/ProductItemListVieu";
import Button from "@mui/material/Button";
import { IoGridSharp } from "react-icons/io5";
import { LuMenu } from "react-icons/lu";

import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';




const ProductLisiting = () => {

  const [ItemView, setItemView]= useState('grid');

  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <section className="py-5">
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
      <div className="bg-white p-2 mt-2">
        <div className="container flex gap-3 ">

          <div className="sidebarwapper w-[20%] h-full bg-white ">
            <SideBar />
          </div>
          <div className="rigthcontent w-[80%] py-3">
            <div className="w-full bg-[#f1f1f1] p-2 mb-4 rounded-md flex items-center justify-between ">
              <div className="flex col1 items-center gap-3 itemactionview">
                <Button className={`!w-[40px] !h-[40px] !min-w-[40px] !rounded-full !text-black ${setItemView === 'list ' && 'active'}`} onClick={()=>setItemView('list')}><LuMenu className="!text-[rgba(0,0,0,0.7)]" /></Button>
                <Button className={`!w-[40px] !h-[40px] !min-w-[40px] !rounded-full !text-black ${setItemView === 'grid ' && 'active'}`} onClick={()=>setItemView('grid')}><IoGridSharp className="!text-[rgba(0,0,0,0.7)]" /></Button>

                <span className="text-[14px] font-[500]  text-[rgba(0,0,0,0.7)]">There Are 27 producrs.</span>
              </div>
              <div className="col2 ml-auto flex items-center justify-end gap-2 pr-4">
                <span className="text-[14px] font-[500]  text-[rgba(0,0,0,0.7)]">Sort By : </span>

                <Button
                  id="basic-button"
                  aria-controls={open ? 'basic-menu' : undefined}
                  aria-haspopup="true"
                  aria-expanded={open ? 'true' : undefined}
                  onClick={handleClick}
                  className="!bg-white !rounded-lg !text-black !text-[12px] !capitalize !border !border-black"
                >
                  Seles, highest to lowest
                </Button>
                <Menu
                  id="basic-menu"
                  anchorEl={anchorEl}
                  open={open}
                  onClose={handleClose}
                  slotProps={{
                    list: {
                      'aria-labelledby': 'basic-button',
                    },
                  }}
                >
                  <MenuItem onClick={handleClose}  className=" !rounded-lg !text-black !text-[12px] !capitalize ">Seles, highest to lowest</MenuItem>
                  <MenuItem onClick={handleClose} className=" !rounded-lg !text-black !text-[12px] !capitalize ">Relevance</MenuItem>
                  <MenuItem onClick={handleClose} className=" !rounded-lg !text-black !text-[12px] !capitalize ">Name, A to Z</MenuItem>
                  <MenuItem onClick={handleClose} className=" !rounded-lg !text-black !text-[12px] !capitalize ">Name, Z to A</MenuItem>
                  <MenuItem onClick={handleClose} className=" !rounded-lg !text-black !text-[12px] !capitalize ">Price, low to high</MenuItem>
                  <MenuItem onClick={handleClose} className=" !rounded-lg !text-black !text-[12px] !capitalize ">Price, high to low</MenuItem>
                </Menu>
              </div>
            </div>
            <div className={`grid ${ItemView === 'grid' ? 'grid-cols-4 md:grid-cols-4' : 'grid-cols-1 md:grid-cols-1'}  gap-3`}>

              {
                ItemView === "grid" ?
                <>
                              <ProductItem />
              <ProductItem />
              <ProductItem />
              <ProductItem />
              <ProductItem />
              <ProductItem />
              <ProductItem />
              <ProductItem />
              <ProductItem />
              <ProductItem />
              <ProductItem />
              <ProductItem />
              <ProductItem />
              <ProductItem />
              <ProductItem />
              <ProductItem />
                </>

                :

                <>
                <ProductItemListVieu/>
                <ProductItemListVieu/>
                <ProductItemListVieu/>
                <ProductItemListVieu/>
                <ProductItemListVieu/>
                <ProductItemListVieu/>
                <ProductItemListVieu/>
                <ProductItemListVieu/>
                <ProductItemListVieu/>
                <ProductItemListVieu/>
                <ProductItemListVieu/>
                </>
              }

            </div>

          </div>


        </div>

      </div>

    </section>
  )
}
export default ProductLisiting;