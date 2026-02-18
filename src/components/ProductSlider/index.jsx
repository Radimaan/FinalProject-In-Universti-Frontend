import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css/navigation';

import "swiper/css";
import "swiper/css/pagination";
import { Navigation } from 'swiper/modules';
import ProductItem from "../ProductItem";

const ProductsSlider = (props) => {
  return (
    <div className="ProductsSlider py-3">

      <Swiper
        slidesPerView={props.items}
        spaceBetween={10}

        navigation={true}
        modules={[Navigation]}

        className="mySwiper"
      >
        {/* {ProductCatSlider.map((productslide) => ( */}
        <SwiperSlide >
          <ProductItem/>

        </SwiperSlide>
        <SwiperSlide >
          <ProductItem/>
        </SwiperSlide>
        <SwiperSlide >
          <ProductItem/>
        </SwiperSlide>
        <SwiperSlide >
          <ProductItem/>
        </SwiperSlide>
        <SwiperSlide >
          <ProductItem/>
        </SwiperSlide>
        <SwiperSlide >
          <ProductItem/>

        </SwiperSlide>
        <SwiperSlide >
          <ProductItem/>

        </SwiperSlide>
        <SwiperSlide >
          <ProductItem/>

        </SwiperSlide>
        <SwiperSlide >
          <ProductItem/>

        </SwiperSlide>
        <SwiperSlide >
          <ProductItem/>

        </SwiperSlide>
        <SwiperSlide >
          <ProductItem/>

        </SwiperSlide>
        <SwiperSlide >
          <ProductItem/>

        </SwiperSlide>
      </Swiper>


    </div>
  );
}

export default ProductsSlider;