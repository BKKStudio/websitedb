"use client"
import Image from "next/image";
import { ModeToggle } from "./components/Theme/btntoggle";
import Slide from "./components/Slide";
import Link from "next/link";
import NewProductSwiper from "./components/Swiper/NewProduct";
import Navbar from "./components/Navbar";
import Img1 from "@/public/Images/Counsel/1.webp"
import Img2 from "@/public/Images/Counsel/2.webp"
import Img3 from "@/public/Images/Counsel/3.webp"
import Img4 from "@/public/Images/Counsel/4.webp"
import { useEffect ,useState} from "react";

export default function Home() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    async function fetchData() {
      try {
        // Fetch data from an API endpoint or any other data source
        const response = await fetch("https://api-backend-six-zeta.vercel.app/api/products"); // Example API endpoint
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }

    fetchData();
  }, []);

 return (
    <div>
      <main className="flex justify-center">
        <article className="max-w-7xl w-full ">
          <Slide />
          <figure className="max-w-7xl w-full mt-8 max-lg:px-3 ">
            <div className="flex justify-between items-center">
              <span className="text-2xl font-bold">สินค้าออกใหม่</span>
              <Link
                href={"/pages/Allproducts"}
                className="text-base p-3 bg-yellow-500 text-white font-bold rounded-xl"
              >
                สินค้าทั้งหมด
              </Link>
            </div>
            <NewProductSwiper products={products}/>
            <div className="flex justify-between items-center mb-8">
              <Link
                href={"/pages/Allproducts"}
                className="text-base p-3 bg-yellow-500 text-white font-bold rounded-xl"
              >
                สินค้าทั้งหมด
              </Link>
              <span className="text-2xl font-bold">สินค้าสุดคุ้ม !</span>
            </div>
            <Image src={Img1} alt=""/>
            <Image src={Img2} alt=""/>
            <Image src={Img3} alt=""/>
            <Image src={Img4} alt=""/>
          </figure>
        </article>
      </main>
    </div>
  );
}
