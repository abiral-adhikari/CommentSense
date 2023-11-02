import UserLogin from "@/lib/model/userLogin.model";
import { connectToDB } from "@/lib/mongoose";
import { NextRequest, NextResponse } from "next/server";
const bcrypt = require("bcrypt");
const validator = require("validator");

export async function POST(request: Request) {
  try {
    await connectToDB();

    const body = await request.json();
    const { username, email, password } = body;

    //Checking if the data are empty
    if (!username || !email || !password) {
      return new NextResponse(
        JSON.stringify({ message: "Missing name, email, or password" }),
        {
          status: 400,
        }
      );
    }

    //checking if password and email are same
    if (validator.equals(email, password)) {
      console.log(3);
      new NextResponse(
        JSON.stringify({ message: "Password and email shouldn't be same" }),
        {
          status: 400,
        }
      );
    }

    // Check if the user already exists
    const isExists = await UserLogin.findOne({ email: email });

    if (isExists) {
      return new NextResponse(
        JSON.stringify({ message: "User Already exists" }),
        { status: 422 }
      );
    }

    // Hash the password
    const passwordHash = await bcrypt.hash(password, 12);

    //storing the data into database
    const createprofile = await UserLogin.create({
      username,
      email,
      password: passwordHash,
    });
    console.log(`Profile Created:${createprofile}`);

    return new NextResponse(JSON.stringify(createprofile), { status: 200 });
  } catch (error: any) {
    console.error(error.message); // Log the error for debugging purposes
    return new NextResponse(
      JSON.stringify({ message: `Failed to register User: ${error.message}` }),
      {
        status: 500,
      }
    );
  }
}
