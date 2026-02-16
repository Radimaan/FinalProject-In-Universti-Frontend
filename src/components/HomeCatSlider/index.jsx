import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import { Link } from "react-router-dom";
import 'swiper/css/navigation';

import "swiper/css";
import "swiper/css/pagination";
import { Navigation } from 'swiper/modules';


const HomeCatSlider = () => {

  const ProductCatSlider = [
    {
      id: 1,
      name: "Smart Tablet",
      image: "https://i.pinimg.com/736x/75/af/77/75af775c2565c429cd29cde46e253171.jpg",
    },
    {
      id: 2,
      name: "Smart Phone",
      image: "https://i.pinimg.com/736x/75/af/77/75af775c2565c429cd29cde46e253171.jpg",
    },
    {
      id: 3,
      name: "Smart Watch",
      image: "https://i.pinimg.com/736x/75/af/77/75af775c2565c429cd29cde46e253171.jpg",
    },
    {
      id: 4,
      name: "Electronics",
      image: "https://api.spicezgold.com/download/file_1734525218436_ele.png",
    },
    {
      id: 5,
      name: "Electronics",
      image: "https://api.spicezgold.com/download/file_1734525218436_ele.png",
    },
    {
      id: 6,
      name: "Electronics",
      image: "https://api.spicezgold.com/download/file_1734525218436_ele.png",
    },
    {
      id: 7,
      name: "Electronics",
      image: "https://api.spicezgold.com/download/file_1734525218436_ele.png",
    },
    {
      id: 8,
      name: "Electronics",
      image: "https://api.spicezgold.com/download/file_1734525218436_ele.png",
    },
    {
      id: 9,
      name: "Electronics",
      image: "https://api.spicezgold.com/download/file_1734525218436_ele.png",
    },
    {
      id: 10,
      name: "Electronics",
      image: "https://api.spicezgold.com/download/file_1734525218436_ele.png",
    },
  ];

  return (
    <div className="homeCatSlider">
      <div className="container">
        <Swiper
          slidesPerView={7}
          spaceBetween={10}

           navigation={true} 
           modules={[Navigation]}

          className="mySwiper"
        >
          {ProductCatSlider.map((productslide) => (
            <SwiperSlide key={productslide.id}>
              <Link to="/">
                <div className="item p-3 bg-white rounded-lg flex flex-col gap-3 text-center items-center shadow-lg group">
                  <div className="group-hover:scale-90 transition-all duration-300">
                    <img
                      src={productslide.image}
                      alt={productslide.name}
                      className="w-[100px]"
                    />
                  </div>
                  <h3 className="text-[16px] font-[500] translate-y-8 opacity-0 invisible
                  transition-all duration-300 ease-out
                          
                              group-hover:opacity-100
                              group-hover:visible
                              group-hover:translate-y-0
                  ">
                    {productslide.name}
                  </h3>
                </div>
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default HomeCatSlider;
