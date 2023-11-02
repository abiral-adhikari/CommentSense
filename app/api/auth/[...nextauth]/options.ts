// https://www.youtube.com/watch?v=w2h54xz6Ndw&t=116s
import type { NextAuthOptions } from "next-auth";
import GitHubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";
import UserLogin from "@/lib/model/userLogin.model";
import { connectToDB } from "@/lib/mongoose";
const bcrypt = require("bcrypt");
import { NextResponse } from "next/server";
export const options: NextAuthOptions = {
  pages: {
    signIn: "/login",
    signOut: "/auth/signout",
    error: "/auth/error", // Error code passed in query string as ?error=
    verifyRequest: "/auth/verify-request", // (used for check email message)
    newUser: "/register",
    // newUser: "/auth/new-user",
  },
  providers: [
    GitHubProvider({
      clientId: process.env.GITHUB_ID!,
      clientSecret: process.env.GITHUB_SECRET!,
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    }),
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        username: {
          label: "Username",
          type: "text",
          placeholder: "Eemayas",
        },
        email: {
          label: "Email",
          type: "email",
          placeholder: "xyz@gmail.com",
        },
        password: {
          label: "Password",
          type: "password",
          placeholder: "your Password",
        },
      },

      async authorize(credentials, req) {
        // return Authorize(credentials, req);
        // const dispatch = useDispatch();
        try {
          connectToDB();
          if (!credentials?.password || !credentials?.email) return null;

          const user = await UserLogin.findOne({
            email: credentials?.email,
          });

          if (!user) {
            new NextResponse(JSON.stringify({ message: "Missing User" }), {
              status: 400,
            });
            return null;
          }

          const passwordMatch = await bcrypt.compare(
            credentials?.password,
            user.password
          );

          if (passwordMatch) {
            console.log(`User Login:${user}`);
            return user;
          } else {
            return null;
          }
        } catch (error) {
          console.log(error);
          return null;
        }
      },
    }),
  ],
  session: {
    strategy: "jwt",
  },
  secret: process.env.NEXTAUTH_SECRET,
  debug: process.env.NODE_ENV === "development",
};
