import React, { useState, useEffect } from "react";
import { FaArrowCircleRight } from "react-icons/fa";
import Logolight from "@/public/Images/Logo/Logolight.png";
import Image from "next/image";
import { SlBasket } from "react-icons/sl";

export default function BasketModal({ MarketOpen, setMarketOpen}) {
  const [totalPrice, setTotalPrice] = useState(0);

  // State for cart items
  const [cart, setCart] = useState([]);

  // Function to remove item from cart
  const removeFromCart = (productId) => {
    const updatedCart = cart.filter(item => item.id !== productId);
    setCart(updatedCart);
    // Update local storage
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  useEffect(() => {
    // Load cart items from local storage on component mount
    const savedCart = localStorage.getItem("cart");
    if (savedCart) {
      setCart(JSON.parse(savedCart));
      
      // Calculate initial total price from the cart items
      const initialTotalPrice = JSON.parse(savedCart).reduce((total, item) => total + item.price, 0);
      setTotalPrice(initialTotalPrice);
    }
  }, [cart]);
  return (
    <React.Fragment>
      {/* Backdrop */}
      <div className={`fixed w-full h-full z-110 flex justify-end z-50 ${MarketOpen ? "visible bg-black/60" : "invisible"}`}>
        {/* Modal */}
        <div className={`${MarketOpen ? "lg:w-[584px] overflow-hidden max-lg:w-full opacity-100 duration-500" : "w-0 opacity-0 duration-500"}`}>
          <div className="w-full flex justify-end">
            <div className="w-full bg-white flex justify-center py-4 h-screen">
              <div className="w-full px-4 flex flex-col gap-3">
                <button className="rounded-full bg-white" onClick={() => setMarketOpen(false)}>
                  <FaArrowCircleRight size={35} />
                </button>

                <div className="bg-gray-200 rounded-xl w-full flex overflow-hidden justify-between p-3">
                  <div className="flex items-center gap-1 font-bold">
                    <SlBasket size={25} />
                    รถเข็น
                  </div>
                  <div className="flex items-center gap-1 font-bold">
                    <div className="text-end max-lg:hidden">
                      <p className="font-bold">Username</p>
                      <p className="text-[12px]">Name lastname</p>
                    </div>
                    <div className="flex items-center justify-center bg-purple-800 text-white rounded-full w-10 h-10 text-center">
                      p
                    </div>
                  </div>
                </div>
                <div className="bg-gray-200 rounded-xl w-full flex overflow-auto justify-between p-3">
                  <div className="w-full h-[584px] flex flex-col gap-2">
                    <div className="flex justify-between w-full font-bold">
                      <span className="px-10">ชื่อสินค้า</span>
                      <span className="pr-4">ราคา</span>
                    </div>
                    {cart.map((data) => (
                      <div className="flex justify-between gap-2 pr-4" key={data.id}>
                        <div className="flex items-center gap-2">
                          <input
                            type="checkbox"
                            name={data.Title} // Using a unique identifier for each checkbox
                            id={data.id}
                            value={data.price}
                            onChange={(e) => {
                              if (e.target.checked) {
                                setTotalPrice(totalPrice + data.price);
                              } else {
                                setTotalPrice(totalPrice - data.price);
                              }
                            }}
                          />
                          <Image src={data.img} alt="" className="w-1/5" />
                          <div className="flex flex-col w-72 overflow-hidden">
                            <span className="font-bold">{data.Title}</span>
                            <span className="">{data.detail}</span>
                          </div>
                        </div>
                        <div className="flex justify-end items-center font-medium text-xl max-lg:text-base">
                          ฿{data.price}
                        </div>
                        <button className="text-red-500" onClick={() => removeFromCart(data.id)}>ลบ</button>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="w-full pt-2">
                  <div className="flex justify-between items-center">
                    <div>
                      <input type="checkbox" name="" id="" className="" value="" />
                      <span className=""> ทั้งหมด</span>
                    </div>
                    <div className="flex items-end gap-1">
                      <span className="text-base">ราคาสินค้าทั้งหมด</span>
                      <span className="text-2xl font-bold text-yellow-500">฿{totalPrice}</span>
                    </div>
                  </div>
                </div>
                <button className="p-3 bg-yellow-500 text-white text-xl font-bold rounded-xl" type="">ชำระเงิน</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
