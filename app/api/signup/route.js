import { NextResponse } from "next/server";
import bcryptjs from "bcryptjs";
import prisma from "@/lib/prisma";

export async function POST(requst) {
  try {
    const { name, username, password,avatar } = await requst.json();

    //check if user already exists
    const user = await prisma.User.findUnique({
      where: {
        username: username,
      },
    });
    if (user) {
      return NextResponse.json(
        {
          error:
            "มีชื่อผู้ใช้นี้หรือรหัสผ่านนี้อยู่แล่วอยู่แล้วกรุณาใช้ชื่ออื่น",
        },
        { status: 400 }
      );
    }

    //hash password
    const salt = await bcryptjs.genSalt(10);
    const hashedPassword = await bcryptjs.hash(password, salt);

    const newUser = await prisma.User.create({
      data: {
        img:avatar,
        name,
        username,
        password: hashedPassword,
      },
    });

    return NextResponse.json({ message: "สมัครสมาชิกเรียบร้อย กรุุณาเข้าสู่ระบบ",newUser})
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
