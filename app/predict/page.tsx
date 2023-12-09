"use client";
import { getServerSession } from "next-auth";
import { options } from "../api/auth/[...nextauth]/options";
import { Divider } from "@nextui-org/react";
import Image from "next/image";
import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Textbar from "@/components/Textbar"
import { CommentData } from "@/types";




export default async function Text(){
    const value=0.66
    const session=await getServerSession(options)
    const commentData = {
  "GRU": {
    "negative_score": 0,
    "neutral_score": 99.98,
    "positive_score": 0.01,
    "type": 2
  },
  "LSTM": {
    "negative_score": 2.57,
    "neutral_score": 95.55,
    "positive_score": 1.88,
    "type": 2
  },
  "RNN": {
    "negative_score": 8.24,
    "neutral_score": 70.32,
    "positive_score": 17.05,
    "type": 2
  },
  "Roberta": {
    "negative_score": 78.52,
    "neutral_score": 19.82,
    "positive_score": 1.65,
    "type": 0
  },
  "comment": "i think i hate you"
};


    return(
        <>
        <Navbar />
        <section className=" max-xl:flex-col px-6 flex gap-5 md:px-5 py-8">
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
          <Textbar />
          </div>
          </section>
          <Divider className="my-4" />
          <div>

          </div>
        </>
    );
}