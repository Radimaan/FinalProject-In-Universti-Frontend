import React, { useRef, useState } from "react";
import InnerImageZoom from "react-inner-image-zoom";
import "react-inner-image-zoom/lib/styles.min.css";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

const ProductZoom = () => {

  const [slideIndex, setSlideIndex] = useState(0);

  const zoomSliderBig = useRef(null);
  const zoomSliderSml = useRef(null);

  const goto = (index) => {
    setSlideIndex(index);

    if (zoomSliderSml.current?.swiper) {
      zoomSliderSml.current.swiper.slideTo(index);
    }

    if (zoomSliderBig.current?.swiper) {
      zoomSliderBig.current.swiper.slideTo(index);
    }
  };

  const ProductCatSlider = [
    {
      id: 1,
      image: "https://api.spicezgold.com/download/file_1734529362999_gosriki-women-s-pink-ethnic-motifs-printed-kurta-with-trouser-dupatta-product-images-rvpkyh5qdr-0-202310141511.webp"
    },
    {
      id: 2,
      image: "https://api.spicezgold.com/download/file_1734528862997_deel-band-women-rayon-embroidered-kurta-pant-dupatta-set-product-images-rvotwal6de-2-202404071601.jpg"
    },
    {
      id: 3,
      image: "https://api.spicezgold.com/download/file_1734528862995_deel-band-women-rayon-embroidered-kurta-pant-dupatta-set-product-images-rvotwal6de-0-202404071601.webp"
    },
    {
      id: 4,
      image: "https://api.spicezgold.com/download/file_1734529363003_gosriki-women-s-pink-ethnic-motifs-printed-kurta-with-trouser-dupatta-product-images-rvpkyh5qdr-1-202310141511.jpg"
    },
    {
      id: 5,
      image: "https://api.spicezgold.com/download/file_1734529363005_gosriki-women-s-pink-ethnic-motifs-printed-kurta-with-trouser-dupatta-product-images-rvpkyh5qdr-2-202310141511.jpg"
    },
  ];

  const Zoom = InnerImageZoom.default || InnerImageZoom;

  return (
    <div className="flex gap-3">

      {/* Thumbnail Slider */}
      <div className="w-[20%] slider">
        <Swiper
          ref={zoomSliderSml}
          slidesPerView={4}
          spaceBetween={1}
          loop={true}
          direction="vertical"
          navigation
          modules={[Navigation]}
          className="!h-[76vh] ZoomProductSliderThumbs"
        >
          {ProductCatSlider.map((item, index) => (
            <SwiperSlide key={item.id}>
              <div
                onClick={() => goto(index)}
                className={`rounded-md overflow-hidden cursor-pointer group border transition-all duration-300 
                  ${slideIndex === index ? "border-red-500 opacity-100" : "border-transparent opacity-30"}
                `}
              >
                <img
                  src={item.image}
                  alt=""
                  className="w-full transition-all duration-300 group-hover:scale-105"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Big Zoom Slider */}
      <div className="w-[80%] zoomcontainer h-[500px] overflow-hidden rounded-md">
        <Swiper
          ref={zoomSliderBig}
          slidesPerView={1}
          spaceBetween={0}
          className="ZoomProductSliderThumbs h-full"
        >
          {ProductCatSlider.map((item) => (
            <SwiperSlide key={item.id}>
              <Zoom
                src={item.image}
                zoomType="hover"
                zoomScale={1}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

    </div>
  );
};

export default ProductZoom;