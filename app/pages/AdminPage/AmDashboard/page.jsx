"use server";
import Calendar from "@/app/components/Calendar";
import React from "react";
import { useEffect, useState } from "react";

export default function page() {
  const [amountProduct, setamountProduct] = useState(0);
  const [amountCustomor, setamountCustomor] = useState(0);
  const [amountAdmin, setamountAdmin] = useState(0);
  
  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(`/api/product`); 
        const data = await response.json();
        setamountProduct(data.length);
      } catch (error) {
        console.error("Error fetching Product data:", error);
      }
    }
    async function fetchDataCustomor() {
      try {
        const response = await fetch(`/api/customors`); 
        const data = await response.json();
        setamountCustomor(data.length);
      } catch (error) {
        console.error("Error fetching Customor data:", error);
      }
    }

    async function fetchDataAdmin() {
      try {
        const response = await fetch(`/api/admin`); 
        const data = await response.json();
        setamountAdmin(data.length);
      } catch (error) {
        console.error("Error fetching Admin data:", error);
      }
    }
    fetchDataAdmin();
    fetchDataCustomor();
    fetchData();
  }, []);

  return (
    <main className="w-full flex justify-center mt-4">
      <article className="max-w-7xl w-full">
      <Calendar className="mt-12"/>
        <div className="w-full grid grid-cols-3 gap-8">
          <div className="w-full h-full px-3 py-8 bg-sky-300 shadow-xl rounded-xl text-2xl font-bold flex flex-col gap-6  ">
            <span>จำนวนสินค้า</span>
            <span className="text-center text-5xl">{amountProduct} ชิ้น</span>
          </div>
          <div className="w-full h-full px-3 py-8 bg-green-300 shadow-xl rounded-xl text-2xl font-bold flex flex-col gap-6  ">
            <span>จำนวนลูกค้า</span>
            <span className="text-center text-5xl">{amountCustomor} คน</span>
          </div>
          <div className="w-full h-full px-3 py-8 shadow-xl bg-orange-300 rounded-xl text-2xl font-bold flex flex-col gap-6  ">
            <span>จำนวนผู้ดูแลระบบ</span>
            <span className="text-center text-5xl">{amountAdmin} คน</span>
          </div>
        </div>
      </article>
    </main>
  );
}
