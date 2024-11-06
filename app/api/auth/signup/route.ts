import { PrismaClient } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcryptjs";

const prisma = new PrismaClient();

export async function POST(req: NextRequest) {
  try {
    const { name, familyName, phoneNumber, email, password, confirmPassword } =
      await req.json();

    if (
      !name ||
      !familyName ||
      !phoneNumber ||
      !email ||
      !password ||
      !confirmPassword
    ) {
      return NextResponse.json(
        { message: "Missing Required Fields" },
        { status: 400 }
      );
    }

    if (password !== confirmPassword) {
      return NextResponse.json(
        { message: "Passwords must match" },
        { status: 400 }
      );
    }

    const existingUser = await prisma.user.findUnique({
      where: { email },
    });
    if (existingUser) {
      return NextResponse.json(
        { message: "User already exists with this email" },
        { status: 400 }
      );
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = await prisma.user.create({
      data: {
        name,
        familyName,
        phoneNumber,
        email,
        password: hashedPassword,
      },
    });

    return NextResponse.json(
      {
        message: "User created successfully",
        data: {
          id: newUser.id,
          name: newUser.name,
          familyName: newUser.familyName,
          phoneNumber: newUser.phoneNumber,
          email: newUser.email,
        },
      },
      { status: 201 }
    );
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { message: "Internal server error" },
      { status: 500 }
    );
  }
}
