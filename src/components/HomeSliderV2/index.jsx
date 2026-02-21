import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';


import { EffectFade, Navigation, Pagination,Autoplay } from 'swiper/modules';
import { Button } from '@mui/material';


const HomeSliderV2 = () => {
  return (
    <>
      <Swiper
        spaceBetween={30}
        loop={true}
        effect={'fade'}
        navigation={true}
        pagination={{
          clickable: true,
        }}
         autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[EffectFade, Navigation, Pagination,Autoplay]}
        className="HomeSliderV2"
      >
        <SwiperSlide>
          <div className="items w-full rounded-md overflow-hidden relative ">
            <img src="https://imgs.search.brave.com/tzpBFbP5h3J9946MU6or2cF51Aac8VmLy36DCCMtLFw/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/ZnJlZS1waG90by9w/ZXJzb24taW5kaWFu/LW9yaWdpbi1oYXZp/bmctZnVuXzIzLTIx/NTAyODUzMDguanBn/P3NlbXQ9YWlzX2h5/YnJpZCZ3PTc0MCZx/PTgw" alt="" className='w-full h-110' />

            <div className="info absolute top-0 right-0 w-[50%] h-[100%] z-50 p-8 text-white flex flex-col items-center justify-center">
              <h4 className='text-[18px] font-[500] w-full text-start '>Big Save Days Sale</h4>
              <h2 className=' text-[30px] font-[700] '>Women Slide Round Green T-Shirt</h2>
              <h3 className='text-[18px] font-[500] w-full text-left flex items-center gap-3 '>Starting At Only <span className=' text-[35px] font-[700] text-[#ff5252]'>59.99</span></h3>
              <div className="w-full ">
                <Button className='btn-org  '>SHOP NOW !</Button>

              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="items w-full rounded-md overflow-hidden">

            <img src="https://images.pexels.com/photos/3856039/pexels-photo-3856039.jpeg" alt="" className='w-full h-110' />
            <div className="info absolute top-0 right-0 w-[50%] h-[100%] z-50 p-8 text-white flex flex-col items-center justify-center">
              <h4 className='text-[18px] font-[500] w-full text-start '>Big Save Days Sale</h4>
              <h2 className=' text-[30px] font-[700] '>bay modern cheir in Black color</h2>
              <h3 className='text-[18px] font-[500] w-full text-left flex items-center gap-3 '>Starting At Only <span className=' text-[35px] font-[700] text-[#ff5252]'>$99.99</span></h3>
              <div className="w-full ">
                <Button className='btn-org  '>SHOP NOW !</Button>

              </div>
            </div>
          </div>
        </SwiperSlide>

      </Swiper>
    </>
  )
}

export default HomeSliderV2;