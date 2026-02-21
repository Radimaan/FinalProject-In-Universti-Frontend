import React from "react";
import HomeSlider from "../../components/HomeSlider/Slider";
import HomeCatSlider from "../../components/HomeCatSlider";
import { LiaShippingFastSolid } from "react-icons/lia";
import AdsPanerSlider from "../../components/AdsPanerSlider";

import Tabs, { tabsClasses } from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import ProductsSlider from "../../components/ProductSlider";


import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

import PlogItem from "../../components/PlogItem";
import Footer from "../../components/Footer";

const Home = () => {

  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };



  return (

    <>
      <HomeSlider />
      <HomeCatSlider />



      <section className="bg-white pt-8 px-10">
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

          <ProductsSlider items={6} />
        </div>
      </section>

      <section className="bg-white py-5 pt-4">
        <div className="container ">
          <div className="FreeShiping w-[80%] p-4 border-2 border-[#ff5252] flex items-center justify-between rounded-md  m-auto ">
            <div className="col1 flex items-center gap-4 " >

              <LiaShippingFastSolid className="text-[50px]" />
              <span className="text-[30px] font-[700] uppercase">Free Shipping</span>

            </div>
            <div className="col2">
              <p>Free Delevry Now On Your First Order And Over $200</p>
            </div>
            <p className="font-bold text-[25px]">- Only $200*</p>
          </div>
          <AdsPanerSlider items={4} />
        </div>
      </section>


      <section className="pb-5 bg-white ">
        <div className="container">
          <h2 className="text-[20px] font-[600]">Leatst Products</h2>
          <ProductsSlider items={6} />


          <AdsPanerSlider items={3} />

        </div>
      </section>
      <section className="pb-5 bg-white ">
        <div className="container">
          <h2 className="text-[20px] font-[600]">Feuter Products</h2>
          <ProductsSlider items={6} />
          <AdsPanerSlider items={3} />

        </div>
      </section>


      <section className="pb-5 bg-white PlogSection  ">
        <div className=" container">
          <h2 className="text-[20px] font-[600] mb-4  ">Leatst Products</h2>
          <Swiper
            slidesPerView={4}
            spaceBetween={30}

            navigation={true}
            modules={[Navigation]}

            className="mySwiper"
          >
            <SwiperSlide >

              <PlogItem />

            </SwiperSlide>
            <SwiperSlide >

              <PlogItem />

            </SwiperSlide>
            <SwiperSlide >

              <PlogItem />

            </SwiperSlide>
            <SwiperSlide >

              <PlogItem />

            </SwiperSlide>
            <SwiperSlide >

              <PlogItem />

            </SwiperSlide>
            <SwiperSlide >

              <PlogItem />

            </SwiperSlide>
            <SwiperSlide >

              <PlogItem />

            </SwiperSlide>
          </Swiper>


        </div>
      </section>


      <Footer/>

    
    </>
  );
}
export default Home;