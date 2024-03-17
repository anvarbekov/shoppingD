"use client"
import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import { Navigation } from 'swiper/modules';

// import required modules
import { Autoplay, Pagination } from 'swiper/modules';

export default function Carousel() {
  return (
    <div className='my-5'>
      <Swiper
        dir="rtl"
        navigation={true}
        pagination={{
          dynamicBullets: true,
          clickable: true,
        }}
        autoplay={{delay: 3000}}
        loop={true}
        keyboard={true}
        cssMode={true}
        grabCursor={true}
        modules={[Navigation, Pagination, Autoplay]}
        className="mySwiper"
        
      >

        <SwiperSlide>
            <img src="/images/banner-1.jpg" alt="Kiwi mevasi" />
        </SwiperSlide>
        <SwiperSlide>
            <img src="/images/banner-2.jpg" alt="Rukkola" />
        </SwiperSlide>
        <SwiperSlide>
            <img src="/images/banner-3.jpg" alt="Chandler" />
        </SwiperSlide>
        <SwiperSlide>
            <img src="/images/banner-4.webp" alt="Chandler" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
