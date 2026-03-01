import React, { useContext } from "react";
import { Link } from "react-router-dom";
import SearchBox from "../Search/search";
import Badge from "@mui/material/Badge";
import { styled } from "@mui/material/styles";
import IconButton from "@mui/material/IconButton";
import { MdOutlineShoppingCart } from "react-icons/md";
import { FaRegHeart } from "react-icons/fa6";
import { IoIosGitCompare } from "react-icons/io";
import Tooltip, { tooltipClasses } from '@mui/material/Tooltip';
import Navigation from "./Navigation";
import { MyContext } from "../../App";




const StyledBadge = styled(Badge)(({ theme }) => ({
   

  "& .MuiBadge-badge": {
    right: -3,
    top: 13,
    border: `2px solid ${(theme.vars ?? theme).palette.background.paper}`,
    padding: "0 4px",
  },
}));



const Header = () => {
   
  const context = useContext(MyContext);

  return (
    <header className="mt-1 bg-white" >

      <div className="top-strip  border-t-[1px] border-b-[1px] border-gray-250">

        <div className="container ">
          <div className="flex items-center justify-between">
            <div className="col1 w-[50%]">
              <p className="text-[12px] font-[500]">Welcome to our store! Free shipping on orders over $50.</p>
            </div>
            <div className="col2 flex items-center gap-4 w-[50%] justify-end">
              <ul className="flex items-center gap-3">
                <li className="list-none">
                  <Link to="/#" className="text-[13px] font-[500] hover:text-[#ff5252]">Help Center {" "}</Link>
                </li>
                <li className="list-none">
                  <Link to="/#" className="text-[13px] font-[500px] hover:text-[#ff5252]">Order Tracking {" "}</Link>
                </li>
              </ul>
            </div>
          </div>

        </div>
      </div>

      <div className="header py-2 border-b-[1px] border-gray-250 pl-20 pr-5 ">
        <div className="conainer flex items-center justify-between">
          <div className="col1 w-[30%]">
            <Link to={"/"} ><img src="./src/assets/logo.jpg" alt="" /></Link>
          </div>
          <div className="col2 w-[40%]">
            <SearchBox />
          </div>
          <div className="col3 w-[30%] flex items-center pl-5 ">
            <ul className="flex items-center justify-end gap-3 w-fullOK. OK OK. So. ">
              <li className="list-none">
                <Link to="/#" className="text-[15px] font-[500] hover:text-[#ff5252] transition">Login {" "}</Link> <span className="text-[15px] font-[500] text-gray-300">|</span> <Link to="/#" className="text-[15px] font-[500] hover:text-[#ff5252] transition"> Register {" "}</Link>
              </li>
              <li>
                <Tooltip title="Compare" placement="top" slotProps={{
                  popper: {
                    sx: {
                      [`&.${tooltipClasses.popper}[data-popper-placement*="bottom"] .${tooltipClasses.tooltip}`]:
                      {
                        marginTop: '0px',
                      },
                      [`&.${tooltipClasses.popper}[data-popper-placement*="top"] .${tooltipClasses.tooltip}`]:
                      {
                        marginBottom: '0px',
                      },
                      [`&.${tooltipClasses.popper}[data-popper-placement*="right"] .${tooltipClasses.tooltip}`]:
                      {
                        marginLeft: '0px',
                      },
                      [`&.${tooltipClasses.popper}[data-popper-placement*="left"] .${tooltipClasses.tooltip}`]:
                      {
                        marginRight: '0px',
                      },
                    },
                  },
                }}>

                  <IconButton aria-label="cart">
                    <StyledBadge badgeContent={4} color="secondary">
                      <IoIosGitCompare className="text-2xl" />
                    </StyledBadge>
                  </IconButton>
                </Tooltip>
              </li>
              <li>
                <Tooltip title="Wishlist" placement="top" slotProps={{
                  popper: {
                    sx: {
                      [`&.${tooltipClasses.popper}[data-popper-placement*="bottom"] .${tooltipClasses.tooltip}`]:
                      {
                        marginTop: '0px',
                      },
                      [`&.${tooltipClasses.popper}[data-popper-placement*="top"] .${tooltipClasses.tooltip}`]:
                      {
                        marginBottom: '0px',
                      },
                      [`&.${tooltipClasses.popper}[data-popper-placement*="right"] .${tooltipClasses.tooltip}`]:
                      {
                        marginLeft: '0px',
                      },
                      [`&.${tooltipClasses.popper}[data-popper-placement*="left"] .${tooltipClasses.tooltip}`]:
                      {
                        marginRight: '0px',
                      },
                    },
                  },
                }}>
                  <IconButton aria-label="cart">
                    <StyledBadge badgeContent={4} color="secondary">
                      <FaRegHeart className="text-2xl" />
                    </StyledBadge>
                  </IconButton>
                </Tooltip>
              </li>
              <li>
                <Tooltip
                  title="Cart" placement="top"
                  slotProps={{
                    popper: {
                      sx: {
                        [`&.${tooltipClasses.popper}[data-popper-placement*="bottom"] .${tooltipClasses.tooltip}`]:
                        {
                          marginTop: '0px',
                        },
                        [`&.${tooltipClasses.popper}[data-popper-placement*="top"] .${tooltipClasses.tooltip}`]:
                        {
                          marginBottom: '0px',
                        },
                        [`&.${tooltipClasses.popper}[data-popper-placement*="right"] .${tooltipClasses.tooltip}`]:
                        {
                          marginLeft: '0px',
                        },
                        [`&.${tooltipClasses.popper}[data-popper-placement*="left"] .${tooltipClasses.tooltip}`]:
                        {
                          marginRight: '0px',
                        },
                      },
                    },
                  }}
                >
                  <IconButton aria-label="cart" onClick={() => context.setOpenCartPanel(true)}>
                    <StyledBadge badgeContent={4} color="secondary">
                      <MdOutlineShoppingCart className="text-2xl" />
                    </StyledBadge>
                  </IconButton>
                </Tooltip>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <Navigation />
    </header>
  );
}
export default Header;