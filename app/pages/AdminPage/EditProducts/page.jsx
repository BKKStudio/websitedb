"use client";
import React from "react";
import { useEffect, useState } from "react";
import Link from "next/link";
import Swal from "sweetalert2";
import { useRouter } from "next/navigation";

export default function page() {
  const [amountProduct, setamountProduct] = useState([]);

  const router = useRouter();
  async function fetchData() {
    try {
      // Fetch data from an API endpoint or any other data source
      const response = await fetch(`https://api-backend-six-zeta.vercel.app/api/products`); // Example API endpoint
      const data = await response.json();
      setamountProduct(data);
    } catch (error) {
      console.error("Error fetching Product data:", error);
    }
  }
  const removedata = async (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "คุณต้องการลบรายชื่อหรือไม่??",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "ใช่, ลบข้อมูล!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://api-backend-six-zeta.vercel.app/api/products/${id}`, {
          method: "DELETE",
        });
        Swal.fire("ลบสินค้า!", "ลบสินค้าสำเร็จแล้ว.", "success");
        fetchData();
        router.refresh();
      }
    });
  };
  
  useEffect(() => {
  
    fetchData();
  }, []);

  return (
    <React.Fragment>
      <main className="w-full flex justify-center mt-8 ">
        <article className="max-w-7xl w-full flex flex-col gap-3">
          <div className="font-bold  w-full flex items-end justify-between">
            <div className="font-bold text-2xl">ข้อมูลสินค้่าทั้งหมด</div>
            <div className="flex gap-2 items-center">
              <Link href={"/pages/AdminPage/Addproduct"} className="p-3 bg-green-600 rounded-xl text-white">
                เพิ่มสินค้า
              </Link>
            </div>
          </div>

          <table className="w-full max-lg:w-max border max-lg:overflow-auto">
            <thead>
              <tr>
                <th className="border p-2">รูปสินค้า</th>
                <th className="border p-2">ชื่อสินค้า</th>
                <th className="border p-2">รายละเอียด</th>
                <th className="border p-2">ราคาสินค้า</th>
                <th className="border p-2">จัดการข้อมูล</th>
              </tr>
            </thead>
            <tbody className="">
              {amountProduct.length > 0 &&
                amountProduct.map((product) => (
                  <tr key={product.id} className="border">
                    <td className=" flex justify-center">
                      <img
                        src={product.img}
                        alt=""
                        srcset={product.img}
                        width={100}
                        height={100}
                      />
                    </td>
                    <td className="border text-base p-2 font-bold text-center">
                      <span>{product.title}</span>
                    </td>
                    <td className="border text-base p-2 font-bold text-center">
                      {product.detail}
                    </td>
                    <td className="border text-base p-2 font-bold text-center">
                    ฿{product.price}
                    </td>
                    <td className="border text-base p-2 font-bold text-center">
                      <Link
                        href={`/pages/AdminPage/EditProducts/${product.id}`}
                        className={
                          "flex justify-center bg-yellow-500 text-white p-2 w-full"
                        }
                      >
                        แก้ไข
                      </Link>
                      <button
                        className="flex justify-center bg-red-500 text-white p-2 w-full"
                        onClick={() => removedata(product.id)}
                      >
                        ลบ
                      </button>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </article>
      </main>
    </React.Fragment>
  );
}
