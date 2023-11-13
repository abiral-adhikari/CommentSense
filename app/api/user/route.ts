// pages/api/user.ts
import User from "@/lib/model/userDetail.model";
import { connectToDB } from "@/lib/mongoose";
import { NextApiRequest, NextApiResponse } from "next";
import { NextResponse } from "next/server";

// export default async function handler(
//   req: NextApiRequest,
//   res: NextApiResponse
// ) {
//   await connectToDB();

//   if (req.method === "POST") {
//     // Handle POST request to create a new user
//     try {
//       const newUser = await User.create(req.body);
//       res.status(201).json(newUser);
//     } catch (error) {
//       console.error(error);
//       res.status(500).json({ error: "Error creating user" });
//     }
//   } else if (req.method === "GET") {
//     // Handle GET request to retrieve user data
//     try {
//       const users = await User.find();
//       res.status(200).json(users);
//     } catch (error) {
//       console.error(error);
//       res.status(500).json({ error: "Error getting users" });
//     }
//   } else {
//     res.status(405).json({ error: "Method not allowed" });
//   }
// }
export async function POST(request: Request) {
  try {
    await connectToDB();

    const body = await request.json();
    // const { username, email, password } = body;

    const {
      image,
      firstname,
      surname,
      emailAddress,
      phoneNumber,
      address,
      country,
      dateOfBirth,
      education,
    } = body;
    console.log({
      image,
      firstname,
      surname,
      emailAddress,
      phoneNumber,
      address,
      country,
      dateOfBirth,
      education,
    });
    //Checking if the data are empty
    if (!emailAddress) {
      return new NextResponse(
        JSON.stringify({
          message: "Missing emailAddress",
        }),
        {
          status: 400,
        }
      );
    }

    const updatedProfile = await User.findOneAndUpdate(
      {
        emailAddress: emailAddress,
      },
      {
        image,
        firstname,
        surname,
        emailAddress,
        phoneNumber,
        address,
        country,
        dateOfBirth,
        education,
      },
      {
        upsert: true,
      }
    );
    console.log(updatedProfile);
    return new NextResponse(JSON.stringify(updatedProfile), { status: 200 });
  } catch (error: any) {
    console.error(error.message); // Log the error for debugging purposes
    return new NextResponse(
      JSON.stringify({
        message: `Failed to register your Profile: ${error.message}`,
      }),
      {
        status: 500,
      }
    );
  }
}

export async function GET(request: Request) {
  try {
    await connectToDB();

    const Users = await User.find();

    console.log(Users);

    return new NextResponse(JSON.stringify(Users), { status: 200 });
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
