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

export default function NewProductSwiper({ products }) {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const savedCart = localStorage.getItem("cart");
    if (savedCart) {
      setCart(JSON.parse(savedCart));
    }
  }, []);

  const addToCart = (
    productId,
    productimg,
    productTitle,
    productdetail,
    productPrice
  ) => {
    setCart((prevCart) => {
      const newItem = {
        id: productId,
        img: productimg,
        Title: productTitle,
        detail: productdetail,
        price: productPrice,
      };
      const updatedCart = [...prevCart, newItem];
      localStorage.setItem("cart", JSON.stringify(updatedCart));
      return updatedCart;
    });
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
            className=" !flex !w-[320px]  !h-full gap-4"
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
                          {product.Title}
                        </span>
                        <span className="text-md text-gray-500  pb-4 ">
                          ฿{product.price}
                        </span>
                      </div>
                    </div>
                    <div
                      className="p-4 bg-yellow-500 text-white font-bold text-center rounded-b-xl cursor-pointer"
                      onClick={() =>
                        addToCart(
                          product.id,
                          product.img,
                          product.Title,
                          product.detail,
                          product.price
                        )
                      }
                    >
                      หยิบใส่รถเข็น
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
