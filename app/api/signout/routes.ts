
import { connectToDB } from "@/lib/mongoose";
import credentials from "next-auth/providers/credentials";
import { useDispatch } from "react-redux";
const bcrypt = require("bcrypt");
import { signOut, getSession } from 'next-auth/react';
import { NextApiRequest, NextApiResponse } from 'next';
import { signOut, useSession } from 'next-auth/react';

export default async function logout(req: NextApiRequest, res: NextApiResponse) {
    const dispatch=useDispatch();
  if (req.method === 'POST') {
    const session = await getSession({ req });

    if (session) {
      await signOut({ callbackUrl: '/login' })
      res.status(200).end();
    } else {
      // If there is no active session, consider the user already signed out
      res.status(200).end();
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
