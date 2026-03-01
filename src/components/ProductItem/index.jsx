import React, { useContext } from "react";
import { Link } from "react-router-dom";
import Rating from '@mui/material/Rating';
import { Button } from "@mui/material";
import { FaRegHeart } from "react-icons/fa";
import { IoIosGitCompare } from "react-icons/io";
import { MdZoomOutMap } from "react-icons/md";
import { MyContext } from "../../App";

const ProductItem = () => {

  const context = useContext(MyContext)
   
  
  return (
    <div className="ProductItem rounded-2xl overflow-hidden border-[1px]  border-[rgba(0,0,0,0.1)] ">
      <div className="ImageWaper w-[100%] h-[220px] overflow-hidden relative group/min">

        <Link to="/">
      <div className="img h-[220px] overflow-hidden ">
        <img src="https://api.spicezgold.com/download/file_1734526483283_siril-poly-silk-grey-off-white-color-saree-with-blouse-piece-product-images-rvcpwdyagl-0-202304220521.webp" className="w-full" alt=" FationWomen" />


        <img src="https://api.spicezgold.com/download/file_1734526483285_siril-poly-silk-grey-off-white-color-saree-with-blouse-piece-product-images-rvcpwdyagl-1-202304220521.webp" className="w-full absolute transition-all ease-in-out duration-700 top-0 left-0 opacity-0 group-hover/min:opacity-100 group-hover/min:scale-110" alt=" FationWomen" />

        </div>
        </Link>

        <span className="Discount flex items-center absolute top-[10px] left-[10px] z-50 bg-[#ff5252] text-white rounded-2xl px-2 font-[500] text-[12px]
        ">10%</span>
        <span className="New flex items-center absolute top-[30px] left-[10px] z-50 bg-[#1969eb] text-white rounded-2xl px-2 font-[500] text-[12px] 
        opacity-0 -translate-x-11 transition-all ease-in duration-400 group-hover/min:opacity-100 group-hover/min:translate-0
        ">New</span>

        <div className=" absolute top-[10px] right-[5px] z-50 flex flex-col items-center gap-2 w-[50px]  opacity-0 invisible  -translate-y-32 ease-in-out  transition-all  duration-500  group-hover/min:translate-y-0 group-hover/min:opacity-100 group-hover/min:visible">


          <Button className="!w-[35px] !h-[35px] !min-w-[35px] !rounded-full !bg-white !text-black hover:!bg-[#ff5252]  ease-in-out hover:!text-white transition-all  group  ">
            <FaRegHeart className="text-[18px] !text-black group-hover:!text-white"/>
          </Button>
          <Button className="!w-[35px] !h-[35px] !min-w-[35px] !rounded-full !bg-white text-black hover:!bg-[#ff5252]ease-in-out hover:!text-white hover:!bg-[#ff5252]  transition-all  group  " onClick={()=>context.setOpenProductDetailsModel(true)}>
            <MdZoomOutMap className="text-[18px] !text-black group-hover:!text-white"/>
          </Button>
          <Button className="!w-[35px] !h-[35px] !min-w-[35px] !rounded-full !bg-white text-black hover:!bg-[#ff5252] ease-in-out hover:!text-white transition-all  group   ">
            <IoIosGitCompare className="text-[18px] !text-black group-hover:!text-white"/>
          </Button>
        </div>
      </div>
      <div className="info p-3 bg-[#f1f1f1]  ">
        <h6 className="text-13px"><Link className="link transition-all" to={'/'}>Soylent Green</Link></h6>
        <h3 className=" text-[13px]  mt-1 font-[550] leading-[18px] text-[#000]">
          <Link className="link transition-all" to={'/'}>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. </Link> </h3>

        <Rating name="size-small" defaultValue={4} size="small" readOnly />


        <div className="flex items-center gap-4">
          <span className="OldPrice line-through text-gray-500 text-[15px] font-[500]">$23.00</span>
          <span className="NewPrice text-[#ff5252] text-[15px] font-[600]">$20.99</span>
        </div>


      </div>
    </div>
  )
}

export default ProductItem;