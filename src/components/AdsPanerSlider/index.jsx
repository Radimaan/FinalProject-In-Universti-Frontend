import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

import PannerBOx from "../PannerBox";

const AdsPanerSlider = ({ items = 3 }) => {

  const banners = [
    {
      id: 1,
      img: "https://i.pinimg.com/1200x/8c/db/e1/8cdbe123010c380e20f264a8fdd57938.jpg",
      name: "Smart Tablet",
      description: "High performance tablet for daily use",
      price: "$299",
    },
    {
      id: 2,
      img: "https://i.pinimg.com/736x/ad/00/d2/ad00d21f60db667c19282685cb6ab27c.jpg",
      name: "Smart Watch",
      description: "Track your fitness and health easily",
      price: "$149",
    },
    {
      id: 3,
      img: "https://i.pinimg.com/1200x/8c/db/e1/8cdbe123010c380e20f264a8fdd57938.jpg",
      name: "Smart Phone",
      description: "Latest generation smartphone",
      price: "$699",
    },
    {
      id: 3,
      img: "https://i.pinimg.com/1200x/8c/db/e1/8cdbe123010c380e20f264a8fdd57938.jpg",
      name: "Smart Phone",
      description: "Latest generation smartphone",
      price: "$699",
    },
    {
      id: 3,
      img: "https://i.pinimg.com/1200x/8c/db/e1/8cdbe123010c380e20f264a8fdd57938.jpg",
      name: "Smart Phone",
      description: "Latest generation smartphone",
      price: "$699",
    },
    {
      id: 3,
      img: "https://i.pinimg.com/1200x/8c/db/e1/8cdbe123010c380e20f264a8fdd57938.jpg",
      name: "Smart Phone",
      description: "Latest generation smartphone",
      price: "$699",
    },
    {
      id: 3,
      img: "https://i.pinimg.com/1200x/8c/db/e1/8cdbe123010c380e20f264a8fdd57938.jpg",
      name: "Smart Phone",
      description: "Latest generation smartphone",
      price: "$699",
    },
    {
      id: 3,
      img: "https://i.pinimg.com/1200x/8c/db/e1/8cdbe123010c380e20f264a8fdd57938.jpg",
      name: "Smart Phone",
      description: "Latest generation smartphone",
      price: "$699",
    },
  ];

  return (
    <div className="py-5 w-full">
      <Swiper
        slidesPerView={items}
        spaceBetween={10}
        navigation
        modules={[Navigation]}
        breakpoints={{
          320: { slidesPerView: 1 },
          640: { slidesPerView: 2 },
          1024: { slidesPerView: items },
        }}
      >
        {banners.map((banner) => (
          <SwiperSlide key={banner.id}>
            <PannerBOx
              img={banner.img}
              productname={banner.name}
              description={banner.description}
              price={banner.price}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default AdsPanerSlider;
