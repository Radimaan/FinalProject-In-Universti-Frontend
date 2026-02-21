import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation,Autoplay } from 'swiper/modules';

const HomeSlider = () => {
  return (
    <div className='homesilder py-4'>
      <div className='container'>
        <Swiper spaceBetween={10} loop={true} navigation={true}
          autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
          modules={[Navigation,Autoplay]} className="silderhome">
          <SwiperSlide>
            <div className='item rounded-4xl overflow-hidden'>
              <img src="https://api.spicezgold.com/download/file_1734524878924_1721277298204_banner.jpg" alt="" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className='item rounded-4xl overflow-hidden'>
              <img src="https://api.spicezgold.com/download/file_1734524930884_NewProject(6).jpg" alt="" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className='item rounded-4xl overflow-hidden'>

              <img src="https://api.spicezgold.com/download/file_1734524971122_NewProject(8).jpg" alt="" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className='item rounded-4xl overflow-hidden'>

              <img src="https://api.spicezgold.com/download/file_1734524985581_NewProject(11).jpg" alt="" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className='item rounded-4xl overflow-hidden'>

              <img src="https://api.spicezgold.com/download/file_1734525002307_1723967638078_slideBanner1.6bbeed1a0c8ffb494f7c.jpg" alt="" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className='item rounded-4xl overflow-hidden'>

              <img src="https://api.spicezgold.com/download/file_1734525014348_NewProject(7).jpg" alt="" />
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  )
}
export default HomeSlider;