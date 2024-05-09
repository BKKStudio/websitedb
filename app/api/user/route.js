import { getDataFromToken } from "@/helpers/GetDataToken";
import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export async function GET(request){
    try {
        const userId = await getDataFromToken(request);
        const user = await prisma.user.findUnique({
            where: {
             id: userId,
            },
          })
        return NextResponse.json(user)
    } catch (error) {
        return NextResponse.json({error: error.message}, {status: 400});
    }

}

// export async function PUT(req, {}) {
//     try {
//         const userId = await getDataFromToken(req);
//         const { statususe } = req.body; // Get statususe from the request body
//         const user = await User.findByIdAndUpdate({ _id: userId }, { statususe });
//         return NextResponse.json(user);
//     } catch (error) {
//         return NextResponse.json({ error: error.message }, { status: 400 });
//     }
// }