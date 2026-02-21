import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import PanerBoxV2 from "../PanerBoxV2/indec";

const AdsPanerSlider = ({ items = 4 }) => {
  return (
    <div className="py-5 w-full">
      <Swiper
        spaceBetween={20}
        navigation
        loop={true}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        modules={[Navigation, Autoplay]}
        breakpoints={{
          320: { slidesPerView: 1 },
          640: { slidesPerView: 2 },
          1024: { slidesPerView: items },
        }}
      >
        {[...Array(8)].map((_, index) => (
          <SwiperSlide key={index}>
            <PanerBoxV2
              info="left"
              image="https://imgs.search.brave.com/pBMdUWq3Qz6E9AEznqumNxFzLF2Nlcn-D4Yod_2f6ro/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly93d3cu/bGl2aW5nc3BhY2Vz/LmNvbS9nbG9iYWxh/c3NldHMvcHJvZHVj/dGFzc2V0cy8zMDAw/MDAtMzk5OTk5LzMw/MDAwMC0zMDk5OTkv/MzA0MDAwLTMwNDk5/OS8zMDQ2MDAtMzA0/Njk5LzMwNDYxOS8z/MDQ2MTlfZ3JlZW5f/ZmFicmljX2Rpbmlu/Z19jaGFpcl9zaWdu/YXR1cmVfNzE3MTYu/anBnP3c9MzczJmg9/MjUxJm1vZGU9cGFk"
              link="/"
            />
           
          </SwiperSlide>
          
        ))}

        <SwiperSlide>
           <PanerBoxV2
              info="left"
              image="https://api.spicezgold.com/download/file_1734772189809_op-nord-ce-3-lite-128-gb-8-gb-ram-pastel-lime-mobile-phone-digital-o493666102-p608711337-0-202404091704.webp"
              link="/"
              
            />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default AdsPanerSlider;