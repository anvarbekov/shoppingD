"use client"
import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Autoplay, Pagination } from 'swiper/modules';

export default function Carousel() {
  return (
    <div className='my-5'>
      <Swiper
        pagination={{
          dynamicBullets: true,
          clickable: true
        }}
        grabCursor={true}
        keyboard={true}
        cssMode={true}
        navigation={true}
        autoplay={{delay: 3000}}
        modules={[Pagination, Autoplay]}
        loop={true}
        className="mySwiper"
      >
        <SwiperSlide>
            <img src="/images/banner-1.jpg" alt="" />
        </SwiperSlide>
        <SwiperSlide>
            <img src="/images/banner-2.jpg" alt="" />
        </SwiperSlide>
        <SwiperSlide>
            <img src="/images/banner-3.jpeg" alt="" />
        </SwiperSlide>
        <SwiperSlide>
            <img src="/images/apples.jpg" alt="" />
        </SwiperSlide>
        <SwiperSlide>
            <img src="/images/iPhone-12.png" alt="" />
        </SwiperSlide>
        <SwiperSlide>
            <img src="/images/iphone-13-pro.webp" alt="" />
        </SwiperSlide>
        <SwiperSlide>
            <img src="/images/iPhone-15.jpg" alt="" />
        </SwiperSlide>
        <SwiperSlide>
            <img src="/images/xiomi11lite5g.jpg" alt="" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
