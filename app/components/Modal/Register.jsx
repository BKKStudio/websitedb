"use client";
import React from "react";
import { BsXLg } from "react-icons/bs";
import Logolight from "@/public/Images/Logo/Logolight.png";
import Image from "next/image";
import { useState, useEffect } from "react";

export default function RegisterModal({ RegisOpen, setRegisOpen }) {
  const [user, setUser] = React.useState({
    name: "",
    username: "",
    password: "",
  });
  const [btnDisabled, setBtndisabled] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!user) {
      alert("กรุณากรอกข้อมูลให้ครบ");
      return;
    }
    try {
      const res = await fetch(`${process.env.DOMAIN}/api/signup`, {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(user),
      });
      if (res.ok) {
          setRegisOpen(false)
      } else {
        throw new Error("Failed to Add Admins");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleClick = (e) => {
    e.preventDefault();
    setRegisOpen(false)
  };

  //Validate
  useEffect(() => {
    if (
      user.name.length > 0 &&
      user.username.length > 0 &&
      user.password.length > 0
    ) {
      setBtndisabled(false);
    } else {
      setBtndisabled(true);
    }
  }, [user]);

  return (
    <React.Fragment>
      {/* //BackDrop */}
      <div
        className={`fixed w-full  h-screen  inset-0 z-110 flex justify-center  transition-colors z-50 ${
          RegisOpen ? "visible bg-black/60" : "invisible"
        }`}
      >
        {/* Modal */}
        <div
          className={`max-w-5xl w-full  transition-all mt-8  flex flex-col gap-8 max-lg:px-5 ${
            RegisOpen ? "scale-100 opacity-100" : "scale-125 opacity-0"
          }`}
        >
          <div className="flex justify-center">
            <div className="max-w-2xl w-full">
              <button
                className="p-3 rounded-full bg-white"
                onClick={handleClick}
              >
                <BsXLg className="text-black"/>
              </button>
            </div>
          </div>
          <div className="w-full flex justify-center">
            <div className="max-w-2xl w-full bg-white flex justify-center rounded-xl py-12">
              <div className="">
                <div className="flex justify-center">
                  <Image
                    src={Logolight}
                    alt=""
                    width={200}
                    height={200}
                    className="w-max "
                  ></Image>
                </div>
                <div className="flex flex-col gap-5">
                  <div className="text-3xl text-center font-bold">
                    สมัครสมาชิก
                  </div>
                  <form
                    className="w-full flex flex-col gap-3"
                    onSubmit={handleSubmit}
                  >
                    <div className="flex ">
                      <label
                        htmlFor="name"
                        className="bg-black text-white w-28 text-center font-bold py-2 text-[12px] rounded-l-xl"
                      >
                        Name
                      </label>
                      <input
                        type="text"
                        name="name"
                        id="name"
                        value={user.name}
                        onChange={(ev) =>
                          setUser({ ...user, name: ev.target.value })
                        }
                        className="bg-gray-200 rounded-r-xl text-[13px] w-full  text-black"
                        placeholder="  กรอกชื่อ-นามสกุลของคุณ"
                        required
                      />
                    </div>
                    <div className="flex ">
                      <label
                        htmlFor="username"
                        className="bg-black text-white w-28 text-center font-bold py-2 text-[12px] rounded-l-xl"
                      >
                        Username
                      </label>
                      <input
                        type="text"
                        name="username"
                        id="username"
                        value={user.username}
                        onChange={(ev) =>
                          setUser({ ...user, username: ev.target.value })
                        }
                        className="bg-gray-200 rounded-r-xl text-[13px] w-full  text-black"
                        placeholder="  กรอกชื่อผู้ใช้ของคุณ"
                        required
                      />
                    </div>
                    <div className="flex ">
                      <label
                        htmlFor="password"
                        className="bg-black text-white w-28 text-center font-bold py-2 text-[12px] rounded-l-xl"
                      >
                        Password
                      </label>
                      <input
                        type="password"
                        name="password"
                        id="password"
                        value={user.password}
                        onChange={(ev) =>
                          setUser({ ...user, password: ev.target.value })
                        }
                        className="bg-gray-200 rounded-r-xl text-[13px] w-full text-black"
                        placeholder="   กรอกรหัสผ่านของคุณ"
                        required
                      />
                    </div>
                    <button
                      className="bg-yellow-500 p-2 text-white font-bold rounded-xl"
                      type="submit"
                    >
                      {btnDisabled ? "กรุณากรอกข้อมูลให้ครบ" : "สมัครสมาชิก"}
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
