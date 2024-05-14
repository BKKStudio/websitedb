"use client";
import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import Link from "next/link";
import "swiper/css";
import "swiper/css/pagination";
import Image from "next/image";
import { FreeMode, Pagination } from "swiper/modules";
import Img1 from "@/public/Images/Product/1.webp";
import Img2 from "@/public/Images/Product/2.png";
import Img3 from "@/public/Images/Product/3.png";


export default function NewProductSwiper({
  products,
  setLoginOpen,
  LoginOpen,
  productBYid, setProductByid
}) {

  const getProductById = async (id) => {
  try {
    const response = await fetch(
      `https://api-backend-six-zeta.vercel.app/api/products/${id}`
    );
    if (!response.ok) {
      throw new Error("Failed to fetch data");
    }
    const data = await response.json();
    setProductByid(data[0]);
  } catch (error) {
    console.error("Error fetching data:", error);
    // Handle error (e.g., display an error message to the user)
  }
};

  return (
    <Swiper
      slidesPerView={"auto"}
      spaceBetween={20}
      freeMode={true}
      modules={[FreeMode, Pagination]}
      className={`mySwiper !z-0   !pt-5 !pb-10  `}
    >
      {products.map((product) => {
        return (
          <SwiperSlide
            className=" !flex !w-[320px]  !h-[380px] gap-4"
            key={product.id}
          >
            <div className="w-full h-full">
              <div className="rounded-xl shadow-xl  hover:shadow-3xl">
                <div className="grid grid-col-3 items-center rounded-xl  duration-500 ">
                  <div className="relative">
                    <img
                      src={product.img}
                      alt=""
                      className="rounded-t-xl w-full h-full"
                    />
                    <div className="flex  w-full pl-3">
                      <div className="flex flex-col  w-full h-auto ">
                        <span className="text-md  font-bold pt-4">
                          {product.title}
                        </span>
                        <span className="text-md text-gray-500  pb-4 ">
                          ฿{product.price}
                        </span>
                      </div>
                    </div>
                    <div
                      className="p-4 bg-yellow-500 text-white font-bold text-center rounded-b-xl cursor-pointer"
                      onClick={() => {
                        setLoginOpen(!LoginOpen);
                        getProductById(product.id);
                      }}
                    >
                      รายละเอียดเพิ่มเติม
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
}
