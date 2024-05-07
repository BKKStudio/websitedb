"use client"
import prisma from "@/lib/prisma";
import Image from "next/image";
import { ModeToggle } from "./components/Theme/btntoggle";
import Slide from "./components/Slide";
import Link from "next/link";
import NewProductSwiper from "./components/Swiper/NewProduct";
import Navbar from "./components/Navbar";
import { useState } from "react";

export default  function Home() {
 return (
    <div>
      <Navbar />
      <main className="flex justify-center">
        <article className="max-w-7xl w-full ">
          <Slide />
          <figure className="max-w-7xl w-full mt-8 max-lg:px-3 ">
            <div className="flex justify-between items-center">
              <span className="text-2xl font-bold">สินค้าออกใหม่</span>
              <Link
                href={""}
                className="text-base p-3 bg-yellow-500 text-white font-bold rounded-xl"
              >
                สินค้าทั้งหมด
              </Link>
            </div>
            <NewProductSwiper/>
          </figure>
        </article>
      </main>
    </div>
  );
}
