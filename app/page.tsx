import { getServerSession } from "next-auth";
import { options } from "./api/auth/[...nextauth]/options";
import {
  Card,
  CardBody,
  CardFooter,
  Chip,
  CircularProgress,
  Divider,
  ScrollShadow,
} from "@nextui-org/react";
import UserCard from "@/components/UserCard";
import HeroCarousel from "@/components/HeroCarousel";
import Searchbar from "@/components/Searchbar";
import Image from "next/image";
import React from "react";
import Navbar from "@/components/Navbar";
import CommentCards from "@/components/CommentsCards";
import { datassss } from "@/lib/CommentsData";
import Sidebar from "@/components/Sidebar";
// import Sidebar from "@/components/Sidebar";
export default async function Home() {
  const value = 0.66;
  const session = await getServerSession(options);
  return (
    <>
      <Navbar />
      <div className="sm:flex hidden mr-10 relative">
        <Sidebar />
      </div>
      {/* <section className="px-6  md:px-20 py-24">
        <div className="flex max-xl:flex-col gap-16">
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
        </div>
      </section>
      <Divider className="my-4" />

      <section className="px-6 md:px-20 py-5 items-center">
    
        <h1 className="head-text mb-8">Comments Analysis</h1>
        <div className="flex flex-wrap justify-center items-center mx-auto gap-5 ">
          {datassss.map((comment, index) => (
            <CommentCards
              key={`${comment.type}-${index}`}
              comment={comment.comment}
              score={comment.score}
              type={comment.type}
            />
          ))}
        </div>
      </section> */}
    </>
  );
}
