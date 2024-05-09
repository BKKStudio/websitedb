"use client";
import React, { useEffect, useState } from "react";
import Swal from "sweetalert2";
import { useRouter } from "next/navigation";

const getProductById = async (id) => {
  try {
    const res = await fetch(`/api/product/${id}`, {
      cache: "no-store",
    });
    if (!res.ok) {
      throw new Error("Failed to fetch product");
    }
    return res.json();
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export default function ProductPage({ params }) {
  const { id } = params;
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const [product, setProduct] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const { product } = await getProductById(id);
        setProduct(product);
        setLoading(false);
      } catch (error) {
        console.error(error);
        setLoading(false);
      }
    };

    fetchData();
  }, [id]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const res = await fetch(`/api/product/${id}`, {
        method: "PUT",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({ product }),
      });
      if (!res.ok) {
        throw new Error("Failed Update");
      }
      Swal.fire({
        title: "คุณต้องการบันทึกการเปลี่ยนแปลงหรือไม่?",
        showDenyButton: true,
        showCancelButton: true,
        confirmButtonText: "Save",
        denyButtonText: `Don't save`,
      }).then((result) => {
        /* Read more about isConfirmed, isDenied below */
        if (result.isConfirmed) {
          Swal.fire("แก้ไขข้อมูลสำเร็จ", "", "success");
          router.refresh();
          router.push("/pages/AdminPage/EditProducts");
        } else if (result.isDenied) {
          Swal.fire("Changes are not saved", "", "info");
        }
      });
    } catch (error) {
      console.log(error);
    }
  };

  if (loading) {
    return <div className="w-full text-center">Loading...</div>;
  }

  if (!product) {
    return <div className="w-full text-center">Product not found</div>;
  }

  return (
    <main className="w-full flex justify-center mt-8">
      <div className="max-w-7xl w-full p-3 ">
        <div className="text-3xl font-bold text-center">แก้ไขข้อมูลสินค้า</div>
        <div className="flex w-full justify-center">
          <div className="max-w-5xl w-full flex gap-12 items-center ">
            <img
              src={product.img}
              alt=""
              width={250}
              height={250}
              className="shadow-2xl"
            />
            <form
              onSubmit={handleSubmit}
              className="w-full flex flex-col gap-3"
            >
              <div className="flex">
                <label
                  htmlFor="img"
                  className="bg-black text-white w-28 text-center font-bold py-2 text-[12px] rounded-l-xl"
                >
                  Avatar
                </label>
                <input
                  type="text"
                  name="img"
                  id="img"
                  value={product.img}
                  onChange={(ev) =>
                    setProduct({ ...product, img: ev.target.value })
                  }
                  className="bg-gray-200 rounded-r-xl text-[13px] w-full  text-black pl-4"
                  placeholder="  กรอกลิงค์รูปโปรไฟล์ของคุณ"
                  required
                />
              </div>
              <div className="flex">
                <label
                  htmlFor="Title"
                  className="bg-black text-white w-28 text-center font-bold py-2 text-[12px] rounded-l-xl"
                >
                  ชื่อสินค้า
                </label>
                <input
                  type="text"
                  name="Title"
                  id="Title"
                  value={product.Title}
                  onChange={(ev) =>
                    setProduct({ ...product, Title: ev.target.value })
                  }
                  className="bg-gray-200 rounded-r-xl text-[13px] w-full  text-black pl-4"
                  placeholder="  กรอกชื่อ-นามสกุลของคุณ"
                  required
                />
              </div>
              <div className="flex">
                <label
                  htmlFor="detail"
                  className="bg-black text-white w-28 text-center font-bold py-2 text-[12px] rounded-l-xl"
                >
                  รายละเอียดสินค้า
                </label>
                <input
                  type="text"
                  name="detail"
                  id="detail"
                  value={product.detail}
                  onChange={(ev) =>
                    setProduct({ ...product, detail: ev.target.value })
                  }
                  className="bg-gray-200 rounded-r-xl text-[13px] w-full  text-black pl-4"
                  placeholder="  กรอกชื่อผู้ใช้ของคุณ"
                  required
                />
              </div>
              <div className="flex">
                <label
                  htmlFor="price"
                  className="bg-black text-white w-28 text-center font-bold py-2 text-[12px] rounded-l-xl"
                >
                  ราคาสินค้า
                </label>
                <input
                  type="number"
                  name="price"
                  id="price"
                  value={product.price}
                  onChange={(ev) =>
                    setProduct({ ...product, price: ev.target.value })
                  }
                  className="bg-gray-200 rounded-r-xl text-[13px] w-full text-black pl-4"
                  placeholder="   กรอกราคาสินค้าของคุณ"
                  required
                />
              </div>
              <button
                className="bg-yellow-500 p-2 text-white font-bold rounded-xl"
                type="submit"
              >
                แก้ไขข้อมูลสินค้า
              </button>
            </form>
          </div>
        </div>
      </div>
    </main>
  );
}
