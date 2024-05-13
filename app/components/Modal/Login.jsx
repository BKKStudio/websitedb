"use client";
import React from "react";
import { BsXLg } from "react-icons/bs";
import Logolight from "@/public/Images/Logo/Logolight.png";
import Image from "next/image";
import { useState } from "react";

import Swal from "sweetalert2";

export default function LoginModal({ LoginOpen, setLoginOpen }) {
  const [user, setUser] = useState({
    username: "",
    password: "",
  });

  const Onlogin = async () => {
    let timerInterval;
    Swal.fire({
      title: "กำลังเข้าสู่ระบบ",
      html: "I will close in <b></b> milliseconds.",
      timer: 3000,
      timerProgressBar: true,
      didOpen: () => {
        Swal.showLoading();
        const timer = Swal.getPopup().querySelector("b");
        timerInterval = setInterval(() => {
          timer.textContent = `${Swal.getTimerLeft()}`;
        }, 100);
      },
      willClose: () => {
        clearInterval(timerInterval);
      },
    }).then((result) => {
      /* Read more about handling dismissals below */
      if (result.dismiss === Swal.DismissReason.timer) {
        console.log("I was closed by the timer");
      }
    });
    try {
      const response = await fetch(`https://api-backend-ny9iyhqu4-bkkstudios-projects.vercel.app/api/login`, {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(user),
      });
      if(response.ok ){
        console.log("success");
      }
    } catch (error) {
      console.log("Login failed", error.message);
    }
  };
  return (
    <React.Fragment>
      {/* //BackDrop */}
      <div
        className={`fixed w-full  h-screen  inset-0 z-110 flex justify-center  transition-colors z-50 ${
          LoginOpen ? "visible bg-black/60" : "invisible"
        }`}
      >
        {/* Modal */}
        <div
          className={`max-w-5xl w-full  transition-all mt-8  flex flex-col gap-8 max-lg:px-5 ${
            LoginOpen ? "scale-100 opacity-100" : "scale-125 opacity-0"
          }`}
        >
          <div className="flex justify-center">
            <div className="max-w-2xl w-full">
              <button
                className="p-3 rounded-full bg-white"
                onClick={() => {
                  setLoginOpen(false);
                }}
              >
                <BsXLg />
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
                    เข้าสู่ระบบ
                  </div>
                  <form
                    method="post"
                    className="w-full flex flex-col gap-3"
                    onSubmit={Onlogin}
                  >
                    <div className="flex ">
                      <label
                        htmlFor="Username"
                        className="bg-black text-white w-20 text-center font-bold py-2 text-[12px] rounded-l-xl"
                      >
                        Username
                      </label>
                      <input
                        type="text"
                        name="username"
                        id="username"
                        value={user.username}
                        onChange={(e) =>
                          setUser({ ...user, username: e.target.value })
                        }
                        className="bg-gray-200 rounded-r-xl"
                        placeholder="  กรอกชื่อผู้ใช้ของคุณ"
                      />
                    </div>
                    <div className="flex ">
                      <label
                        htmlFor="password"
                        className="bg-black text-white w-20 text-center font-bold py-2 text-[12px] rounded-l-xl"
                      >
                        Password
                      </label>
                      <input
                        type="password"
                        name="password"
                        id="password"
                        value={user.password}
                        onChange={(e) =>
                          setUser({ ...user, password: e.target.value })
                        }
                        className="bg-gray-200 rounded-r-xl"
                        placeholder="  กรอกรหัสผ่านของคุณ"
                      />
                    </div>
                    <div className="flex justify-center gap-3">
                      <label
                        htmlFor="forgatpssw"
                        className="text-[12px] text-center font-bold hover:text-yellow-500"
                      >
                        ลืมรหัสผ่าน?
                      </label>
                      <label
                        htmlFor="forgatpssw"
                        className="text-[12px] text-center font-bold hover:text-yellow-500 underline"
                      >
                        สมัครสมาชิก
                      </label>
                    </div>
                    <button
                      type="submit"
                      className="bg-yellow-500 p-2 text-white font-bold rounded-xl"
                      onClick={Onlogin}
                    >
                      เข้าสู่ระบบ
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
