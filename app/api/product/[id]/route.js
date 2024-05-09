import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export async function PUT(req, { params }) {
  const { id } = params;
  const { product } = await req.json();
  const { img,Title, detail, price } = product; // Corrected the property name
  await prisma.product.update({
    where: { id: id },
    data: { img: img, Title:Title, detail: detail, price: parseInt(price) }// Corrected the property name
  });
  return NextResponse.json(
    { message: "Updated Data Success" },
    { status: 200 }
  );
}

export async function GET(req, { params }) {
  const { id } = params;
  const product = await prisma.product.findUnique({
    where: {
      id: id,
    },
  });
  return NextResponse.json({ product });
}
