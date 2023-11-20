// "use client";
import { getServerSession } from "next-auth";
import { options } from "./api/auth/[...nextauth]/options";
import { Divider } from "@nextui-org/react";

import HeroCarousel from "@/components/HeroCarousel";
import Searchbar from "@/components/Searchbar";
import Image from "next/image";
import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import { datassss } from "@/lib/CommentsData";
import Sidebar from "@/components/Sidebar";
import CommentSection from "@/components/CommentSection";
import { exec } from "child_process";
// import Sidebar from "@/components/Sidebar";
export default async function Home() {
  const value = 0.66;
  const session = await getServerSession(options);
  return (
    <>
      <Navbar />
      <section className=" max-xl:flex-col px-6 flex gap-16 md:px-20 py-32">
        <div className="flex flex-col justify-center">
          <p className="small-text">
            Smart Sentiment Analysis Start Here
            <Image
              src="/assets/icons/arrow-right.svg"
              alt="arrow-right"
              width={16}
              height={16}
            />
          </p>
          <h1 className="head-text">
            Unleash the Power of
            <span className="text-primary"> CommentSense</span>
          </h1>
          <p className="mt-6 ">
            Powerful, self-serve product and growth analytics to help you
            convert, engage, and retain more.
          </p>
          <Searchbar />
        </div>
        <HeroCarousel />
      </section>
      <Divider className="my-4" />

      <CommentSection datassss={datassss} />
    </>
  );
}
