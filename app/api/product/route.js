import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export async function  GET() {
   const products = await prisma.product.findMany();
    return NextResponse.json( products)
}


export async function DELETE(req){
    const id = req.nextUrl.searchParams.get('id')
    await prisma.product.delete({
        where: { id: id },
      })
   return NextResponse.json({message:"Deleted Success"},{status:200})
}

export async function POST(requst) {
    try {
      const { img, Title, detail,price } = await requst.json();
  
      const newProduct = await prisma.product.create({
        data: {
          img:img,
          Title:Title,
          detail:detail,
          price:parseInt(price),
        }
      });
  
      return NextResponse.json({ message: "เพิ่มสินค้าเรียบร้อย",newProduct})
    } catch (error) {
      return NextResponse.json({ error: error.message }, { status: 500 });
    }
  }
  