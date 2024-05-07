"use client";
import React from "react";
import Image from "next/image";
import Logolight from "@/public/Images/Logo/Logolight.png";
import { FaHome } from "react-icons/fa";
import Link from "next/link";
import { SlBasket } from "react-icons/sl";
import { IoGameControllerSharp } from "react-icons/io5";
import { FaMoneyCheckDollar } from "react-icons/fa6";
import LoginModal from "./Modal/Login";
import RegisterModal from "./Modal/Register";
import { BsList } from "react-icons/bs";
import { BsXLg } from "react-icons/bs";
import BasketModal from "./Modal/Basket";
import { ModeToggle } from "./Theme/btntoggle";
import { useEffect, useState } from "react";

export default function Navbar() {
  const [cart, setCart] = useState([]);
  const [LoginOpen, setLoginOpen] = useState(false);
  const [RegisOpen, setRegisOpen] = useState(false);
  const [MarketOpen, setMarketOpen] = useState(false);
  const [Hamberger, setHamberger] = useState(false);
  useEffect(() => {
    const savedCart = localStorage.getItem("cart");
    if (savedCart) {
      setCart(JSON.parse(savedCart));
    }
  }, [cart]);

  return (
    <React.Fragment>
      <LoginModal LoginOpen={LoginOpen} setLoginOpen={setLoginOpen} />
      <RegisterModal RegisOpen={RegisOpen} setRegisOpen={setRegisOpen} />
      <BasketModal
        MarketOpen={MarketOpen}
        setMarketOpen={setMarketOpen}
        cart={cart}
        setCart={setCart}
      />
      <nav className="flex justify-center max-lg:px-3 shadow-xl">
        <div className="max-w-7xl w-full h-full flex  gap-3 justify-center">
          <Image
            src={Logolight}
            alt=""
            width={100}
            height={100}
            className="max-lg:hidden"
          ></Image>
          <Image
            src={Logolight}
            alt=""
            width={100}
            height={100}
            className="lg:hidden"
          ></Image>
          <div className="flex gap-6 w-full max-lg:hidden font-bold ">
            <Link href={""} className="flex  gap-1 items-center w-max  ">
              <div>
                <FaHome size={15} />
              </div>
              <div className="w-max">หน้าหลัก</div>
            </Link>
            <Link href={""} className="flex gap-1 items-center w-max">
              <IoGameControllerSharp size={15} />
              <div className="w-max">บอร์ดเกมทั้งหมด</div>
            </Link>
            <Link href={""} className="flex gap-1 items-center w-max">
              <FaMoneyCheckDollar size={15} />
              <div className="w-max">บอร์ดเกมแนะนำ</div>
            </Link>
          </div>
          <div className="flex items-center justify-end w-full gap-3">
            <ModeToggle />
            <div className="text-end max-lg:hidden">
              <p className="font-bold">Username</p>
              <p className="text-[12px]">Name lastname</p>
            </div>
            <div className="flex items-center justify-center bg-purple-800 text-white rounded-full w-10 h-10 text-center">
              p
            </div>
            <button
              className="flex relative items-center w-ful h-full"
              onClick={() => setMarketOpen(!MarketOpen)}
            >
              <SlBasket size={35} className="pr-2" />
              <div className="absolute w-full h-full flex items-center justify-end pb-5 z-0">
                <div className="w-5 h-5 text-center bg-red-500 text-white rounded-full text-[13px]">
                  {cart.length}
                </div>
              </div>
            </button>
            <button
              className="bg-green-600 text-white p-3 rounded-xl max-lg:hidden"
              onClick={() => setLoginOpen(!LoginOpen)}
            >
              เข้าสู่ระบบ
            </button>
            <button
              className="bg-yellow-500 text-white p-3 rounded-xl max-lg:hidden"
              onClick={() => setRegisOpen(!RegisOpen)}
            >
              สมัครสมาชิก
            </button>
            <BsList
              size={35}
              className={`lg:hidden ${
                Hamberger === false ? "block" : "hidden"
              }`}
              onClick={() => setHamberger(!Hamberger)}
            />
            <BsXLg
              size={35}
              className={`lg:hidden  ${
                Hamberger === true ? "block" : "hidden"
              }`}
              onClick={() => setHamberger(!Hamberger)}
            />
          </div>
        </div>
      </nav>
      <div
        className={`w-full lg:hidden px-5 shadow-xl overflow-hidden flex flex-col ${
          Hamberger === false ? " h-0 duration-500" : "h-44 duration-500"
        }`}
      >
        <Link
          href={""}
          className="text-center py-2 "
          onClick={() => setLoginOpen(!LoginOpen)}
        >
          เข้าสู่ระบบ
        </Link>
        <Link
          href={""}
          className="text-center py-2"
          onClick={() => setRegisOpen(!RegisOpen)}
        >
          สมัครสมาชิก
        </Link>
        <Link href={""} className="text-center py-2">
          ไอดีเกม
        </Link>
        <Link href={""} className="text-center py-2">
          เติมเกม
        </Link>
      </div>
    </React.Fragment>
  );
}
