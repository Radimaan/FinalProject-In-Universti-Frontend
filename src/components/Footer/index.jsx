import React, { useContext } from "react";
import { LiaShippingFastSolid } from "react-icons/lia";
import { GiBackwardTime } from "react-icons/gi";
import { BsWallet2 } from "react-icons/bs";
import { CiGift } from "react-icons/ci";
import { BiSupport } from "react-icons/bi";
import { Link, Links } from "react-router-dom";
import { BotMessageSquare } from 'lucide-react';
import { Button } from "@mui/material";

import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';


import { FaFacebookF, FaPinterestP, FaInstagram } from "react-icons/fa";
import { AiOutlineYoutube } from "react-icons/ai";

import Drawer from '@mui/material/Drawer';
import { MyContext } from "../../App";
import CartPanel from "../CartPanel";
import { IoCloseSharp } from "react-icons/io5";







const Footer = () => {

  const context  = useContext(MyContext)

  return (
    <>
      <footer className="py-6 bg-white border-t border-gray-600 ">
        <div className="container ">
          <div className="flex items-center justify-center gap-2 py-8">
            <div className="col1 flex items-center  flex-col  group w-[18%] ">
              <LiaShippingFastSolid className="text-[40px] text-gray-300 transition-all duration-300 group-hover:-translate-y-2  group-hover:text-[#ff383870] " />

              <h3 className="text-[18px] font-[600] mt-2">Free Shiping</h3>
              <p className="text-[13px] font-[500]">For all Orders Over 100%</p>
            </div>
            <div className="col1 flex items-center  flex-col  group w-[18%] ">
              <GiBackwardTime className="text-[40px] text-gray-300 transition-all duration-300 group-hover:-translate-y-2  group-hover:text-[#ff383870] " />

              <h3 className="text-[18px] font-[600] mt-2">30 Days Returns</h3>
              <p className="text-[13px] font-[500]">For an Exchange Products</p>
            </div>
            <div className="col1 flex items-center  flex-col  group w-[18%] ">
              <BsWallet2 className="text-[40px] text-gray-300 transition-all duration-300 group-hover:-translate-y-2  group-hover:text-[#ff383870] " />

              <h3 className="text-[18px] font-[600] mt-2">Secured Pyments</h3>
              <p className="text-[13px] font-[500]">Payment Cards Accept</p>
            </div>
            <div className="col1 flex items-center  flex-col  group w-[18%] ">
              <CiGift className="text-[40px] text-gray-300 transition-all duration-300 group-hover:-translate-y-2  group-hover:text-[#ff383870] " />

              <h3 className="text-[18px] font-[600] mt-2">Special Gifts</h3>
              <p className="text-[13px] font-[500]">Our First Products Order</p>
            </div>
            <div className="col1 flex items-center  flex-col  group w-[18%] ">
              <BiSupport className="text-[40px] text-gray-300 transition-all duration-300 group-hover:-translate-y-2  group-hover:text-[#ff383870] " />

              <h3 className="text-[18px] font-[600] mt-2">Support 24/7</h3>
              <p className="text-[13px] font-[500]">Contact Us AniTime</p>
            </div>
          </div>


          <div className="footer flex  gap-6 ">
            <div className="part1 w-[25%] border-r border-gray-300">
              <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>

              <p className="text-sm text-gray-600 leading-relaxed mb-4">
                ClassyShop Mega Support Store <br />
                507-Union Trade Centre, France
              </p>

              {/* Email */}
              <Link
                to="mailto:radhassan@gmail.com"
                className="block font-medium link hover:underline"
              >
                radhassan@gmail.com
              </Link>

              {/* Phone */}
              <a
                href="tel:+252633234482"
                className="block text-xl font-semibold mt-3 text-[#ff5252] hover:opacity-80 transition"
              >
                (+252) 633-234-482
              </a>

              {/* AI Chat CTA */}
              <div className="flex items-center gap-4 mt-6">
                <div className="bg-orange-100 p-3 rounded-2xl">
                  <BotMessageSquare className="text-orange-500 w-10 h-10" />
                </div>

                <div className="leading-tight">
                  <h3 className="text-lg font-bold text-orange-600">
                    Online AI Chat
                  </h3>
                  <p className="text-gray-500 text-sm">
                    Get Expert Help
                  </p>
                </div>
              </div>
            </div>
            <div className="part2 w-[40%] flex ">
              <div className="part2-col1 w-[50%]">
                <h2 className="text-2xl font-semibold mb-4">Products</h2>
                <ul className="list gap-2 space-y-2">
                  <li className="group list-none">
                    <Link
                      to="/"
                      className="inline-block font-medium transition-all duration-75  transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 link"
                    >
                      Prices Drop
                    </Link>
                  </li>
                  <li className="group list-none">
                    <Link
                      to="/"
                      className="inline-block font-medium transition-all duration-75  transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 link"
                    >
                      New Products
                    </Link>
                  </li>
                  <li className="group list-none">
                    <Link
                      to="/"
                      className="inline-block font-medium transition-all duration-75  transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 link"
                    >
                      Pest Selles
                    </Link>
                  </li>
                  <li className="group list-none">
                    <Link
                      to="/"
                      className="inline-block font-medium transition-all duration-75  transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 link"
                    >
                      Contatc Us
                    </Link>
                  </li>
                  <li className="group list-none">
                    <Link
                      to="/"
                      className="inline-block font-medium transition-all duration-75  transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 link"
                    >
                      SiteMap
                    </Link>
                  </li>
                  <li className="group list-none">
                    <Link
                      to="/"
                      className="inline-block font-medium transition-all duration-75  transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 link"
                    >
                      Stors
                    </Link>
                  </li>


                </ul>

              </div>
              <div className="part2-col1 w-[50%]">
                <h2 className="text-2xl font-semibold mb-4">Our Company</h2>
                <ul className="list gap-2 space-y-2">
                  <li className="group list-none">
                    <Link
                      to="/"
                      className="inline-block font-medium transition-all duration-75  transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 link"
                    >
                      Delivery
                    </Link>
                  </li>
                  <li className="group list-none">
                    <Link
                      to="/"
                      className="inline-block font-medium transition-all duration-75  transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 link"
                    >
                      Legal Notice
                    </Link>
                  </li>
                  <li className="group list-none">
                    <Link
                      to="/"
                      className="inline-block font-medium transition-all duration-75  transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 link"
                    >
                      Terms & conditions Of Use
                    </Link>
                  </li>
                  <li className="group list-none">
                    <Link
                      to="/"
                      className="inline-block font-medium transition-all duration-75  transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 link"
                    >
                      About Us
                    </Link>
                  </li>
                  <li className="group list-none">
                    <Link
                      to="/"
                      className="inline-block font-medium transition-all duration-75  transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 link"
                    >
                      Secure Payment
                    </Link>
                  </li>
                  <li className="group list-none">
                    <Link
                      to="/"
                      className="inline-block font-medium transition-all duration-75  transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 link"
                    >
                      Login
                    </Link>
                  </li>


                </ul>

              </div>

            </div>
            <div className="part3 w-[30%] flex flex-col ">
              <h2 className="text-2xl font-semibold mb-4">Subscribe To Newsletter</h2>
              <p className="text-[13px]">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magnam velit illo quam at quod, atque explicabo quisquam aperiam debitis! </p>

              <form action="Post" className="mt-5">
                <input
                  type="email"
                  placeholder="Your Email Address"
                  className="w-full h-[45px] border border-[#ff5252] 
             px-4 rounded-2xl 
             focus:outline-none focus:ring-2 
             focus:ring-[#ff5252]/40 
             placeholder:text-gray-400
             transition-all duration-300"
                />

                <Button className="btn-org">SUBSCRIBE</Button>
                <FormControlLabel control={<Checkbox defaultChecked />} label="I Agree to the terms Conditions & the Privacy Policy" />
              </form>



            </div>
          </div>
        </div>
      </footer>

      <div className="BottomScript border-t border-gray-300 py-4 bg-white ">
        <div className="container flex items-center justify-between">

          <ul className="flex items-center gap-3">

            <li className="list-none">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-[38px] h-[38px] rounded-full border border-gray-400 
                     flex items-center justify-center 
                     transition-all duration-300 
                     hover:bg-[#ff5252] hover:border-[#ff5252] 
                     hover:scale-110 group"
              >
                <FaFacebookF className="text-[18px] text-gray-600 group-hover:text-white transition-colors duration-300" />
              </a>
            </li>

            <li className="list-none">
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-[38px] h-[38px] rounded-full border border-gray-400 
                     flex items-center justify-center 
                     transition-all duration-300 
                     hover:bg-[#ff5252] hover:border-[#ff5252] 
                     hover:scale-110 group"
              >
                <AiOutlineYoutube className="text-[20px] text-gray-600 group-hover:text-white transition-colors duration-300" />
              </a>
            </li>

            <li className="list-none">
              <a
                href="https://pinterest.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-[38px] h-[38px] rounded-full border border-gray-400 
                     flex items-center justify-center 
                     transition-all duration-300 
                     hover:bg-[#ff5252] hover:border-[#ff5252] 
                     hover:scale-110 group"
              >
                <FaPinterestP className="text-[18px] text-gray-600 group-hover:text-white transition-colors duration-300" />
              </a>
            </li>

            <li className="list-none">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-[38px] h-[38px] rounded-full border border-gray-400 
                     flex items-center justify-center 
                     transition-all duration-300 
                     hover:bg-[#ff5252] hover:border-[#ff5252] 
                     hover:scale-110 group"
              >
                <FaInstagram className="text-[18px] text-gray-600 group-hover:text-white transition-colors duration-300" />
              </a>
            </li>

          </ul>

          <p className="text-sm text-gray-500">
            © {new Date().getFullYear()} RadHassam. E-comerce - Website.
          </p>

          <div className="flex items-center gap-2 cursor-pointer">
            <img src="https://www.waafi.com/_next/static/media/logo.0d6eceaa.svg" alt="" className="w-10" />
          <div className="bg-blue-900 h-[25px]  flex items-center px-[1px] rounded-[2px]">  <img src="https://www.dahabplus.com/assets/new_dahabplus_logo-c6461d7c.png" alt=""  className="w-10"/></div>
            <img src="src/assets/credit-card_5994632.png" alt=""  className="w-10"/>
            <img src="src/assets/card_16174534.png" alt=""  className="w-10"/>
            <img src="src/assets/visa.png" alt="" className="w-10" />
            <img src="src/assets/american-express_349259.png" alt="" className="w-10" />
            <img src="src/assets/paypal.png" alt="" className="w-10" />
          </div>

        </div>
      </div>

       {/* cartPanle */}
      <Drawer open={context.openCartPanel} onClose={context.toggleCartPanel(false)} anchor="right" classes={{ paper: 'w-full sm:w-[400px] p-0' }}>
        <div className="flex items-center justify-between py-3 px-4 gap-4 border-b ">
          <h1 className="text-lg font-semibold">ShoppingCart (1)</h1>
           <IoCloseSharp className="!text-[20px] " onClick={ context.toggleCartPanel(false)}/>
        </div>
        <div className="p-4">
          <CartPanel />
        </div>
      </Drawer>
    </>

  )
}
export default Footer;