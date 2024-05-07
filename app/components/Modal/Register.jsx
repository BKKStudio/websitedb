import React from "react";
import { BsXLg } from "react-icons/bs";
import Logolight from "@/public/Images/Logo/Logolight.png";
import Image from "next/image";
export default function RegisterModal({ RegisOpen, setRegisOpen}) {
  return (
    <React.Fragment>
      {/* //BackDrop */}
      <div
        className={`fixed w-full  h-screen  inset-0 z-110 flex justify-center  transition-colors z-50 ${
          RegisOpen? "visible bg-black/60" : "invisible"
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
                onClick={() => {
                  setRegisOpen(false);
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
                   สมัครสมาชิก
                  </div>
                  <form method="post" className="w-full flex flex-col gap-3">
                  <div className="flex ">
                      <label
                        htmlFor="flname"
                        className="bg-black text-white w-28 text-center font-bold py-2 text-[12px] rounded-l-xl"
                      >
                        Name
                      </label>
                      <input
                        type="text"
                        name="flname"
                        id="flname"
                        className="bg-gray-200 rounded-r-xl text-[13px] w-full"
                        placeholder="  กรอกชื่อ-นามสกุลของคุณ"
                      />
                    </div>
                    <div className="flex ">
                      <label
                        htmlFor="Username"
                        className="bg-black text-white w-28 text-center font-bold py-2 text-[12px] rounded-l-xl"
                      >
                        Username
                      </label>
                      <input
                        type="text"
                        name="Username"
                        id="Username"
                        className="bg-gray-200 rounded-r-xl text-[13px] w-full"
                        placeholder="  กรอกชื่อผู้ใช้ของคุณ"
                      />
                    </div>
                    <div className="flex ">
                      <label
                        htmlFor="Username"
                        className="bg-black text-white w-28 text-center font-bold py-2 text-[12px] rounded-l-xl"
                      >
                        Password
                      </label>
                      <input
                        type="text"
                        name="Username"
                        id="Username"
                        className="bg-gray-200 rounded-r-xl text-[13px] w-full"
                        placeholder="   กรอกรหัสผ่านของคุณ"
                      />
                    </div>
                    <div className="flex ">
                      <label
                        htmlFor="Username"
                        className="bg-black text-white w-28 text-center font-bold py-2 text-[12px] rounded-l-xl"
                      >
                        Confirm
                      </label>
                      <input
                        type="text"
                        name="Username"
                        id="Username"
                        className="bg-gray-200 rounded-r-xl text-[13px] w-full"
                        placeholder="   กรอกรหัสผ่านของคุณอีกครั้ง"
                      />
                    </div>
                    <button type="submit" className="bg-yellow-500 p-2 text-white font-bold rounded-xl">สมัครสมาชิก</button>
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