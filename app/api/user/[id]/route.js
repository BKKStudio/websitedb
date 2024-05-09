import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export async function  GET(req,{params}) {
    const { id } = params;
    const user = await prisma.user.findUnique({
  where: {
    id: id,
  },
})
    return NextResponse.json(user)
}


