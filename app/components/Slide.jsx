"use client"
import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


// import required modules
import {Autoplay, Pagination, Navigation } from 'swiper/modules';
import Image from 'next/image';
import Img1 from "@/public/Images/Slide/1.webp"
import Img2 from "@/public/Images/Slide/2.webp"
import Img3 from "@/public/Images/Slide/3.webp"
import Img4 from "@/public/Images/Slide/4.webp"
import Img5 from "@/public/Images/Slide/5.webp"
import Img6 from "@/public/Images/Slide/6.png"
import Img7 from "@/public/Images/Slide/7.webp"

export default function Slide() {
    return (
        <>
          <Swiper
            slidesPerView={1}
            spaceBetween={30}
            loop={true}
            pagination={{
              clickable: true,
            }}
            autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
            navigation={true}
            modules={[Autoplay,Pagination, Navigation]}
            className="mySwiper "
          >
            <SwiperSlide><Image src={Img1} className='w-full' alt=''></Image></SwiperSlide>
            <SwiperSlide><Image src={Img2} alt=''></Image></SwiperSlide>
            <SwiperSlide><Image src={Img3} alt=''></Image></SwiperSlide>
            <SwiperSlide><Image src={Img4} alt=''></Image></SwiperSlide>
            <SwiperSlide><Image src={Img5} alt=''></Image></SwiperSlide>
            <SwiperSlide><Image src={Img6} alt=''></Image></SwiperSlide>
            <SwiperSlide><Image src={Img7} alt=''></Image></SwiperSlide>
          </Swiper>
        </>
      );
}
