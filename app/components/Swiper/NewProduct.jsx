import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import Link from "next/link";
import "swiper/css";
import "swiper/css/pagination";
import Image from "next/image";
import { FreeMode, Pagination } from "swiper/modules";
import Img1 from "@/public/Images/Product/1.webp"

export default function NewProductSwiper() {
  const product = [
    {
      id: 1,
      img: Img1,
      Title: "[พร้อมส่ง] Farland (TH/EN) ฟาร์แลนด์",
      detail: "eiei",
      price: 5890,
    },
    {
      id: 2,
      img: Img1,
      Title: "[พร้อมส่ง] Farland (TH/EN) ฟาร์แลนด์",
      detail: "eiei",
      price: 2890,
    },
    {
      id: 3,
      img: Img1,
      Title: "[พร้อมส่ง] Farland (TH/EN) ฟาร์แลนด์",
      detail: "eiei",
      price: 1890,
    },
  ];

  const [cart, setCart] = useState([]);

  useEffect(() => {
    const savedCart = localStorage.getItem("cart");
    if (savedCart) {
      setCart(JSON.parse(savedCart));
    }
  }, []);

  const addToCart = (productId) => {
    setCart(prevCart => {
    
        const newItem = {
          id: productId,
          img: Img1,
          Title: "[พร้อมส่ง] Farland (TH/EN) ฟาร์แลนด์",
          detail: "eiei",
          price: 5890,
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
      {product.map((data) => (
        <SwiperSlide className=" !flex !w-[320px] gap-4" key={data.id}>
          <div href={`/product/${data.id}`} passHref>
            <div className="rounded-xl shadow-xl  hover:shadow-3xl">
              <div className="grid grid-col-3 items-center rounded-xl  duration-500 ">
                <div className="relative">
                  <Image src={Img1} alt="" className="rounded-t-xl w-full" />
                  <div className="flex  px-7  ">
                    <div className="flex flex-col  w-full h-auto">
                      <span className="text-md  font-bold pt-4">
                        {data.Title}
                      </span>
                      <span className="text-md text-gray-500  pb-4 ">
                        ฿{data.price}
                      </span>
                    </div>
                  </div>
                  <div
                    className="p-4 bg-yellow-500 text-white font-bold text-center rounded-b-xl cursor-pointer"
                    onClick={() => addToCart(data.id)}
                  >
                    หยิบใส่รถเข็น
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
