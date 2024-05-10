"use client"
import React, { useEffect, useState } from "react";

export default function Page() {
  const [amountProduct, setAmountProduct] = useState([]);
  const [amountCustomer, setAmountCustomer] = useState([]);
  const [amountAdmin, setAmountAdmin] = useState([]);
  
  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(`/api/product`); 
        const data = await response.json();
        setAmountProduct(data.length);
      } catch (error) {
        console.error("Error fetching Product data:", error);
      }
    }

    async function fetchDataCustomer() {
      try {
        const response = await fetch(`/api/customors`); 
        const data = await response.json();
        setAmountCustomer(data.length);
      } catch (error) {
        console.error("Error fetching Customer data:", error);
      }
    }

    async function fetchDataAdmin() {
      try {
        const response = await fetch(`/api/admin`); 
        const data = await response.json();
        setAmountAdmin(data.length);
      } catch (error) {
        console.error("Error fetching Admin data:", error);
      }
    }

    fetchDataAdmin();
    fetchDataCustomer();
    fetchData();
  }, []);

  return (
    <main className="w-full flex justify-center mt-4">
      <article className="max-w-7xl w-full">
        <div className="w-full grid grid-cols-3 gap-8">
          <div className="w-full h-full px-3 py-8 bg-sky-300 shadow-xl rounded-xl text-2xl font-bold flex flex-col gap-6  ">
            <span>จำนวนสินค้า</span>
            <span className="text-center text-5xl">{amountProduct} ชิ้น</span>
          </div>
          <div className="w-full h-full px-3 py-8 bg-green-300 shadow-xl rounded-xl text-2xl font-bold flex flex-col gap-6  ">
            <span>จำนวนลูกค้า</span>
            <span className="text-center text-5xl">{amountCustomer} คน</span>
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
