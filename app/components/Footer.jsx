import React from 'react'
import Link from 'next/link'
import { SiFacebook } from "react-icons/si";
import { FaInstagram, FaTwitterSquare} from "react-icons/fa";
import { SiGmail } from "react-icons/si";
export default function Footer() {
  return (
    <footer className={`w-full flex justify-center bg-yellow-500 mt-16 max-lg:px-3 `}>
        <div className='max-w-7xl w-full grid grid-cols-4 py-20 max-lg:grid-cols-2 max-sm:grid-cols-1  gap-3'>
            <div className='flex flex-col gap-3 '>
                <h1 className='text-2xl font-bold max-sm:text-center'>MeaowBoardGames</h1>
                <Link href={"/"} className='text-base font-bold max-sm:text-center'>ทำไมต้องซื้อเกมกับเรา</Link>
                <Link href={"/"} className='text-base font-bold max-sm:text-center'>Meaow Meaow Services</Link>
            </div>
            <div className='flex flex-col gap-3'>
                <h1 className='text-2xl font-bold max-sm:text-center'>แผนกบริการลูกค้า</h1>
                <Link href={"/"} className='text-base font-bold max-sm:text-center'>ติดต่อเรา</Link>
                <Link href={"/"} className='text-base font-bold max-sm:text-center'>สมัครสมาชิก</Link>
                <Link href={"/"} className='text-base font-bold max-sm:text-center'>ช่องทางการชำระเงิน</Link>
                <Link href={"/"} className='text-base font-bold max-sm:text-center'>ค้นหาร้านค้า</Link>
                <Link href={"/"} className='text-base font-bold max-sm:text-center'>แก้ไขข้อผิดพลาด</Link>
            </div>
            <div className='flex flex-col gap-3'>
                <h1 className='text-2xl font-bold max-sm:text-center'>บทความ</h1>
                <Link href={"/"} className='text-base font-bold max-sm:text-center'>บทความทั่วไป</Link>
                <Link href={"/"} className='text-base font-bold max-sm:text-center'>แนะนำบอร์ดเกม</Link>
                <Link href={"/"} className='text-base font-bold max-sm:text-center'>รีวิวบอร์ดเกม</Link>
                <Link href={"/"} className='text-base font-bold max-sm:text-center'>กิจกรรมสุดมันส์</Link>
            </div>
            <div className='flex flex-col gap-3'>
                <h1 className='text-2xl font-bold max-sm:text-center '>ติดต่อเรา</h1>
                <div className='flex items-center gap-3 max-sm:justify-center'>
                <Link href={"/"} className='text-base font-bold  '><SiFacebook size={40}/></Link>
                <Link href={"/"} className='text-base font-bold '><FaInstagram size={40} /></Link>
                <Link href={"/"} className='text-base font-bold  '><SiGmail  size={40}/></Link>
                <Link href={"/"} className='text-base font-bold '><FaTwitterSquare size={40}/></Link>
                </div>
            </div>
        </div>
    </footer>
  )
}
