import React from "react";
import HomeSlider from "../../components/HomeSlider/Slider";
import HomeCatSlider from "../../components/HomeCatSlider";
import { LiaShippingFastSolid } from "react-icons/lia";
import AdsPanerSlider from "../../components/AdsPanerSlider";

import Box from '@mui/material/Box';
import Tabs, { tabsClasses } from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import ProductsSlider from "../../components/ProductSlider";

const Home = () => {

  const [value, setValue] = React.useState(0);

  const handleChange = (event ,  newValue) => {
    setValue(newValue);
  };


 
  return (

    <>
    <HomeSlider/>
    <HomeCatSlider/>



    <section className="bg-white py-8 px-10">
      <div className="conainer-fuild">
        <div className="flex items-center justify-between">
          <div className="leftsec">
            <h3 className="text-[22px] font-[600] ">Popular Products</h3>
            <p className="text-[14px] font-[400] ">Do not miss the current offers until the end of March.</p>
          </div>
          <div className="leftsec w-[66%]">
           
      <Tabs
        value={value}
        onChange={handleChange}
        variant="scrollable"
        scrollButtons
        aria-label="visible arrows tabs example"
        sx={{
          [`& .${tabsClasses.scrollButtons}`]: {
            '&.Mui-disabled': { opacity: 0.3 },
          },
        }}
      >
        <Tab label="Fashion" />
        <Tab label="Electronics" />
        <Tab label="Bags" />
        <Tab label="FootWear" />
        <Tab label="Groceries" />
        <Tab label="Beauty" />
        <Tab label="Wallness" />
        <Tab label="jewellery" />
      </Tabs>
          </div>
        </div>

        <ProductsSlider items={4}/>
      </div>
    </section>

    <section className="bg-white py-5">
      <div className="container ">
        <div className="FreeShiping w-[80%] p-4 border-2 border-[#ff5252] flex items-center justify-between rounded-md  m-auto ">
          <div className="col1 flex items-center gap-4 " >

            <LiaShippingFastSolid className="text-[50px]"/>
            <span className="text-[30px] font-[700] uppercase">Free Shipping</span>

          </div>
          <div className="col2">
            <p>Free Delevry Now On Your First Order And Over $200</p>
          </div>
          <p className="font-bold text-[25px]">- Only $200*</p>
        </div>
        <AdsPanerSlider items={4}/>
      </div>
    </section>

    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    </>
  );
}
export default Home;