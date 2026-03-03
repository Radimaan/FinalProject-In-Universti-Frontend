import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import SearchBox from "../Search/search";
import Badge from "@mui/material/Badge";
import { styled } from "@mui/material/styles";
import IconButton from "@mui/material/IconButton";
import { MdOutlineShoppingCart } from "react-icons/md";
import {  FaRegHeart, FaRegUser } from "react-icons/fa6";
import { IoIosGitCompare, IoIosLogOut } from "react-icons/io";
import Tooltip, { tooltipClasses } from '@mui/material/Tooltip';
import Navigation from "./Navigation";
import { MyContext } from "../../App";
import Button from "@mui/material/Button";



import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { IoBagCheckOutline } from "react-icons/io5";





const StyledBadge = styled(Badge)(({ theme }) => ({



  "& .MuiBadge-badge": {
    right: -3,
    top: 13,
    border: `2px solid ${(theme.vars ?? theme).palette.background.paper}`,
    padding: "0 4px",
  },
}));



const Header = () => {

  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const context = useContext(MyContext);
  console.log(context.isLoggedIn)

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
                  <Link to="/#" className="text-[13px] font-[500] hover:text-[#ff5252]">Help Center </Link>
                </li>
                <li className="list-none">
                  <Link to="/#" className="text-[13px] font-[500px] hover:text-[#ff5252]">Order Tracking </Link>
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
          <div className="col3 w-[30%] flex items-center !pl-10 ">

            <ul className="flex items-center justify-end gap-3 w-full ">
              {!context.isLoggedIn ? (
                <li className="list-none">
                  <Link to="/Login" className="text-[15px] font-[500] hover:text-[#ff5252] transition">Login {" "}</Link> <span className="text-[15px] font-[500] text-gray-300">|</span> <Link to="/Register" className="text-[15px] font-[500] hover:text-[#ff5252] transition"> Register {" "}</Link>
                </li>
              ) : (
                <>
                  <Button className="myAccounrwrap flex items-center gap-1 bg-transparent border-[1px] border-gray-300 !rounded-md !text-black !normal-case !px-8  w-[170px]  !min-w-[170px]" onClick={handleClick}>
                    <Button className="!bg-[#f1f1f1] !text-black !rounded-full !w-[40px] !min-w-[40px] h-[40px] !p-0"><FaRegUser className="!text-[18px]" /></Button>
                    <div className="info flex flex-col">
                      <h4 className="text-[14px] font-semibold capitalize text-left justify-start leading-3">John Doe</h4>
                      <span className="text-[13px] text-gray-500 cursor-pointer capitalize justify-start">r...5@gmail.com</span>
                    </div>

                  </Button>
                  <Menu
                    anchorEl={anchorEl}
                    id="my-account-menu"
                    open={open}
                    onClose={handleClose}
                    onClick={handleClose}
                    slotProps={{
                      paper: {
                        elevation: 0,
                        sx: {
                          overflow: 'visible',
                          filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                          mt: 1.5,
                          '& .MuiAvatar-root': {
                            width: 32,
                            height: 32,
                            ml: -0.5,
                            mr: 1,
                          },
                          '&::before': {
                            content: '""',
                            display: 'block',
                            position: 'absolute',
                            top: 0,
                            right: 14,
                            width: 10,
                            height: 10,
                            bgcolor: 'background.paper',
                            transform: 'translateY(-50%) rotate(45deg)',
                            zIndex: 0,
                          },
                        },
                      },
                    }}
                    transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                    anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
                  >
                    <Link to='my-account' className="w-full text-black">
                    <MenuItem onClick={handleClose} className="flex gap-2 py-3">
                      <FaRegUser className="text-[18px]" /> <span className="text-[14px]">My Account</span>
                    </MenuItem>
                    </Link>
                    <Link to='my-orders' className="w-full text-black">
                    <MenuItem onClick={handleClose} className="flex gap-2 py-3">
                      <IoBagCheckOutline className="text-[18px]" /> <span className="text-[14px]">Orders</span>
                    </MenuItem>
                    </Link>
                     <Link to='my-wishlist' className="w-full text-black">
                    <MenuItem onClick={handleClose} className="flex gap-2 py-3">
                      <FaRegHeart className="text-[18px]" />  <span className="text-[14px]">My wishList</span>
                    </MenuItem>
                    </Link>
                    <MenuItem onClose={handleClose} onClick={()=> context.setIsLoggedIn(false)} className="flex gap-2 py-3">
                      <IoIosLogOut className="text-[20px]" />  <span className="text-[14px]">LogOut</span>
                    </MenuItem>
                  
                   
                  </Menu>
                </>
              )
              }
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