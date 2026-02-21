import React from "react";
import SideBar from "../../components/SideBar";

import Typography from '@mui/material/Typography';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';




const ProductLisiting = () => {
  return (
    <section className="py-5">
      <div className="container pl-2">
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

      </div>

      </div>
      
    </section>
  )
}
export default ProductLisiting;