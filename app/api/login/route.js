import { NextResponse } from "next/server";
import bcryptjs from "bcryptjs";
import jwt from "jsonwebtoken";
import prisma from "@/lib/prisma";

export async function POST(request) {
    try {
        const { username, password } = await request.json();

        // Fetch user details along with password hash
        const user = await prisma.user.findUnique({
            where: {
                username: username,
            },
        });

        // If user does not exist or password is incorrect, return error immediately
        if (!user || !(await bcryptjs.compare(password, user.password))) {
            return NextResponse.json({
                error: "ชื่อผู้ใช้หรือรหัสผ่านไม่ถูกต้อง",
            }, { status: 400 });
        }

        // Create token data
        const tokenUser = {
            id: user.id,
            username: user.username,
            isAdmin: user.isAdmin,
        };

        // Create JWT token
        const token = jwt.sign(tokenUser, process.env.TOKEN_SECRET);

        // Set token as a cookie
        const response = NextResponse.json({
            message: "เข้าสู่ระบบสำเร็จ",
            success: true,
        });
        response.cookies.set("token", token, { httpOnly: true });
                console.log({username,password});
        return response;
    } catch (error) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}
