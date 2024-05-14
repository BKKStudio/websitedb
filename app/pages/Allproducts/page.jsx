"use client";
import Navbar from "@/app/components/Navbar";
import Image from "next/image";
import Slide from "@/app/components/Slide";
import Img1 from "@/public/Images/AllProductImg/1.webp";
import Link from "next/link";
import { useState, useEffect, useRouter } from "react";
import NewProductSwiper from "@/app/components/Swiper/NewProduct";
import React from "react";
import DetailModal from "@/app/components/Modal/DetailModal";

export default function page() {
  const [products, setProducts] = useState([]);
  const [productBYid, setProductByid] = useState(null);
  const [LoginOpen, setLoginOpen] = useState(false);

  async function fetchData() {
    try {
      // Fetch data from an API endpoint or any other data source
      const response = await fetch(
        `https://api-backend-six-zeta.vercel.app/api/products`
      ); // Example API endpoint
      const data = await response.json();
      setProducts(data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }

  
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

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <React.Fragment>
      <DetailModal
        productBYid={productBYid}
        setProductByid={setProductByid}
        LoginOpen={LoginOpen}
        setLoginOpen={setLoginOpen}
      />
      <main className="w-full flex  justify-center">
        <article className="max-w-7xl w-full">
          <Slide />
          <div className="flex justify-center">
            <span className="text-3xl text-center mt-4">สินค้าทั้งหมด</span>
          </div>
          <div className="w-full flex justify-between max-lg:justify-center flex-wrap gap-12 mt-4 ">
            {products.map((product) => {
              return (
                <div
                  className=" flex w-[220px] justify-center  !h-full gap-4"
                  key={product.id}
                >
                  <div className="w-full h-full">
                    <div className="rounded-xl shadow-xl  hover:shadow-3xl">
                      <div className="grid grid-col-3 items-center rounded-xl items-center w-full duration-500 ">
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
                              getProductById(product.id);
                              setLoginOpen(!LoginOpen);
                            }}
                          >
                            รายละเอียดสินค้าเพิ่มเติม
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
    </React.Fragment>
  );
}
