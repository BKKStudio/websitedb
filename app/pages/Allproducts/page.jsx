"use client";
import Navbar from "@/app/components/Navbar";
import Image from "next/image";
import Slide from "@/app/components/Slide";
import Img1 from "@/public/Images/AllProductImg/1.webp";
import Link from "next/link";
import { useState, useEffect, useRouter } from "react";
import NewProductSwiper from "@/app/components/Swiper/NewProduct";

export default function page() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        // Fetch data from an API endpoint or any other data source
        const response = await fetch("/api/product"); // Example API endpoint
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }

    fetchData();
  }, []);

  return (
    <>
      <Navbar />
      <main className="w-full flex  justify-center">
        <article className="max-w-7xl w-full">
          <Image src={Img1} alt="" className="w-full"></Image>
          <div className="flex justify-center">
            <span className="text-3xl text-center mt-4">สินค้าทั้งหมด</span>
          </div>
          <div className="w-full grid grid-cols-3 max-lg:grid-cols-2 max-sm:grid-cols-1 items-center  gap-24">
            {products.map((product) => {
              return (
                <div
                  className=" !flex !w-[320px] !justify-center  !h-full gap-4"
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
                </div>
              );
            })}
          </div>
        </article>
      </main>
    </>
  );
}

