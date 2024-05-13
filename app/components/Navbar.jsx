"use client";
import React, { createContext } from "react";
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
import Swal from "sweetalert2";
import { BsBasket2, BsFillPersonFill } from "react-icons/bs";
import { useRouter } from "next/navigation";

export default function Navbar({ request }) {
  const [cart, setCart] = useState([]);
  const [LoginOpen, setLoginOpen] = useState(false);
  const [RegisOpen, setRegisOpen] = useState(false);
  const [MarketOpen, setMarketOpen] = useState(false);
  const [Hamberger, setHamberger] = useState(false);
  const [theme, setTheme] = useState("");
  const [dataUser, setdataUser] = useState(null);

const router = useRouter()
  const handletheme = () => {
    setTheme(localStorage.getItem("theme"));
  };

  const getUser = async () => {
    try {
      const res = await fetch(`/api/user`, {
        cache: "no-store",
      });
      if (!res.ok) {
        throw new Error("Failed to fetch user data");
      }
      return res.json();
    } catch (error) {
      console.error(error);
      throw error; // Rethrow the error to handle it in the component
    }
  };

  const onLogout = async () => {
    try {
      const res = await fetch(`/api/logout`, {
        cache: "no-store",
      });
      if (!res.ok) {
        throw new Error("Failed Fetch Data");
      } else {
        setdataUser(null);
        if (dataUser) {
          Swal.fire({
            title: "Log Out!",
            text: "LogOut Success",
            icon: "success",
          });
        }
        router.push("/")
      }
    } catch (error) {
      console.log(error);
    }
  };



  useEffect(() => {
    // const savedCart = localStorage.getItem("cart");
    // if (savedCart) {
    //   setCart(JSON.parse(savedCart));
    // }
    if (dataUser === null) {
      getUser()
        .then((data) => setdataUser(data))
        .catch((error) => console.log(error));
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
        theme={theme}
        setTheme={setTheme}
      />
      <nav className="flex justify-center max-xl:px-3 ">
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
          <div
            className={`${
              dataUser != null && dataUser.isAdmin === true 
                ? "hidden"
                : "flex gap-6 w-full max-xl:hidden font-bold"
            }`}
          >
            <Link href={"/"} className="flex  gap-1 items-center w-max  ">
              <div>
                <FaHome size={25} />
              </div>
              <div className="w-max">หน้าหลัก</div>
            </Link>
            <Link
              href={"/pages/Allproducts"}
              className="flex gap-1 items-center w-max"
            >
              <IoGameControllerSharp size={25} />
              <div className="w-max">บอร์ดเกมทั้งหมด</div>
            </Link>
          </div>

          {/* Admin Nav */}
          <div
            className={`${
              dataUser != null && dataUser.isAdmin === true 
                ? "flex gap-6 w-full max-xl:hidden font-bold"
                : "hidden"
            }`}
          >
            <Link
              href={"/"}
              className="flex  gap-1 items-center w-max  "
            >
              <div>
                <FaHome size={25} />
              </div>
              <div className="w-max">หน้าแรก</div>
            </Link>
            
            <Link
              href={"/pages/AdminPage/EditProducts"}
              className="flex gap-1 items-center w-max"
            >
              <BsBasket2 size={25} />
              <div className="w-max">ข้อมูลสินค้า</div>
            </Link>
            <Link
              href={"/pages/AdminPage/EditCustomor"}
              className="flex gap-1 items-center w-max"
            >
              <BsFillPersonFill size={25} />
              <div className="w-max">ข้อมูลสมาชิก</div>
            </Link>
          </div>
          <div className="flex items-center justify-end w-full gap-3">
            <ModeToggle />
            <div className="text-end max-lg:hidden">
              <p className="font-bold">
                {dataUser == null ? "กรุณาเข้าสู่ระบบ" : dataUser.username}
              </p>
              <p className="text-[12px]">
                {dataUser == null ? "กรุณาเข้าสู่ระบบ" : dataUser.name}
              </p>
            </div>
            {dataUser == null ? (
              <div className="flex items-center justify-center bg-purple-800 text-white rounded-full w-10 h-10 text-center">
                p
              </div>
            ) : (
              <img
                src={dataUser.img}
                alt=""
                className="w-10 h-10 rounded-full"
              ></img>
            )}
            <button
              className={`${
                dataUser != null && dataUser.isAdmin === true
                  ? "hidden"
                  : " flex relative items-center w-ful h-full"
              }`}
              onClick={() => {
                setMarketOpen(!MarketOpen);
                handletheme();
              }}
            >
              <SlBasket size={35} className="pr-2" />
              <div className="absolute w-full h-full flex items-center justify-end pb-5 z-0">
                <div className="w-5 h-5 text-center bg-red-500 text-white rounded-full text-[13px]">
                  {cart.length}
                </div>
              </div>
            </button>
            <button
              className={`${
                dataUser == null
                  ? "bg-green-600 text-white p-3 rounded-xl max-xl:hidden"
                  : "hidden"
              }`}
              onClick={() => setLoginOpen(!LoginOpen)}
            >
              เข้าสู่ระบบ
            </button>
            <Link
              href={"/pages/AdminPage/EditProducts"}
              className={`${
                dataUser != null &&
                dataUser.isAdmin === true 
                  ? "bg-green-600 text-white p-3 rounded-xl max-xl:hidden"
                  : "hidden"
              }`}
            >
              Admin manage
            </Link>
 
            <button
              className={`${
                dataUser != null
                  ? "bg-red-600 text-white p-3 rounded-xl max-xl:hidden"
                  : "hidden"
              }`}
              onClick={onLogout}
            >
              ออกจากระบบ
            </button>
            <button
              className={`${
                dataUser == null
                  ? "bg-yellow-500 text-white p-3 rounded-xl max-xl:hidden"
                  : "hidden"
              } `}
              onClick={() => setRegisOpen(!RegisOpen)}
            >
              สมัครสมาชิก
            </button>
            <BsList
              size={35}
              className={`xl:hidden ${
                Hamberger === false ? "block" : "hidden"
              }`}
              onClick={() => setHamberger(!Hamberger)}
            />
            <BsXLg
              size={35}
              className={`xl:hidden  ${
                Hamberger === true ? "block" : "hidden"
              }`}
              onClick={() => setHamberger(!Hamberger)}
            />
          </div>
        </div>
      </nav>
      <div
        className={`w-full xl:hidden px-5 shadow-xl overflow-hidden flex flex-col ${
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
