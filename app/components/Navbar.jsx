"use client";
import React, { createContext } from "react";
import Image from "next/image";
import Logolight from "@/public/Images/Logo/Logolight.png";
import { FaHome } from "react-icons/fa";
import Link from "next/link";
import { IoGameControllerSharp } from "react-icons/io5";
import { BsList } from "react-icons/bs";
import { BsXLg } from "react-icons/bs";
import { ModeToggle } from "./Theme/btntoggle";
import { useEffect, useState } from "react";
import { BsBasket2, BsFillPersonFill } from "react-icons/bs";
import { useRouter } from "next/navigation";

export default function Navbar() {
  const [cart, setCart] = useState([]);
  const [LoginOpen, setLoginOpen] = useState(false);
  const [RegisOpen, setRegisOpen] = useState(false);
  const [Hamberger, setHamberger] = useState(false);
  const [theme, setTheme] = useState("");
  const [dataUser, setdataUser] = useState(null);

const router = useRouter()
  const handletheme = () => {
    setTheme(localStorage.getItem("theme"));
  };

  const getUser = async () => {
    try {
      const res = await fetch(`https://api-backend-six-zeta.vercel.app/api/getDataToken`, {
        cache: "no-store",
      });
      if (!res.ok) {
        throw new Error("Failed to fetch user data");
      }
      console.log(res);
      return res.json();
    } catch (error) {
      console.error(error);
      throw error; // Rethrow the error to handle it in the component
    }
  };





  useEffect(() => {
    if (dataUser === null) {
      getUser()
        .then((data) => setdataUser(data))
        .catch((error) => console.log(error));
    }
  }, [cart]);

  return (
    <React.Fragment>
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
            <Link
              href={"/pages/AdminPage/EditProducts"}
              className={`bg-green-600 text-white p-3 rounded-xl max-xl:hidden`}
            >
              Admin manage
            </Link>
 
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
