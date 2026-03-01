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
import HomeSliderV2 from "../../components/HomeSliderV2";
import PanerBoxV2 from "../../components/PanerBoxV2/indec";
import AdsPanerSliderV2 from "../../components/AdsPanerSliderV2";

const Home = () => {

  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };



  return (

    <>
      <HomeSlider />

      <section className="py-6">
        <div className="container flex  gap-5">
          <div className="part1 w-[70%]  overflow-hidden"><HomeSliderV2/></div>
          <div className="part2 w-[30%] gap-5 flex items-center justify-between flex-col gap-">
            <PanerBoxV2 info='left' image={"https://imgs.search.brave.com/q9SRUNAcuprvNJrzjTKuOiJjVgT_4xbLpBiHN203CjY/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9pbWcu/Z2xvYmFsLm5ld3Mu/c2Ftc3VuZy5jb20v/Z2xvYmFsL3dwLWNv/bnRlbnQvdXBsb2Fk/cy8yMDE3LzAzL0lu/LURlcHRoLUdlYXIt/MzYwLWFuZC1WUl90/aHVtYjcwNC5qcGc"}/>

             
            <PanerBoxV2 info='right' image={"https://imgs.search.brave.com/pBMdUWq3Qz6E9AEznqumNxFzLF2Nlcn-D4Yod_2f6ro/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly93d3cu/bGl2aW5nc3BhY2Vz/LmNvbS9nbG9iYWxh/c3NldHMvcHJvZHVj/dGFzc2V0cy8zMDAw/MDAtMzk5OTk5LzMw/MDAwMC0zMDk5OTkv/MzA0MDAwLTMwNDk5/OS8zMDQ2MDAtMzA0/Njk5LzMwNDYxOS8z/MDQ2MTlfZ3JlZW5f/ZmFicmljX2Rpbmlu/Z19jaGFpcl9zaWdu/YXR1cmVfNzE3MTYu/anBnP3c9MzczJmg9/MjUxJm1vZGU9cGFk"}/>
            </div>
        </div>
      </section>
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
          <AdsPanerSliderV2 items={4} />
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


     

    
    </>
  );
}
export default Home;