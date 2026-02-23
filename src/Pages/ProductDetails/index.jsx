import React from 'react'
import Breadcrumbs from '@mui/material/Breadcrumbs';
import { Link } from 'react-router-dom';
import ProductZoom from '../../components/ProductZoom';


const ProductDelails = () => {
  return (
    <section className="py-5 pb-0">
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

      <div className=" container flex flex-wrap gap-4 overflow-hidden">
        <div className="productZoomContainer !w-[30%] !h-[30%] overflow-hidden">
          <ProductZoom />
        </div>
      </div>
    </section>)
}

export default ProductDelails