import { getDataFromToken } from "@/helpers/GetDataToken";
import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export async function GET(request){
    try {
        const user = await prisma.user.findMany({
            where: {
             isAdmin: false,
            },
          })
        
        return NextResponse.json(user)
    } catch (error) {
        return NextResponse.json({error: error.message}, {status: 400});
    }


    
}