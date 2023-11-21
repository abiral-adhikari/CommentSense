"use client";
import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import {
  Card,
  CardBody,
  CardFooter,
  Chip,
  CircularProgress,
  Divider,
  ScrollShadow,
} from "@nextui-org/react";
import { fadeIn } from "@/lib/utils/motion";
type Props = {
  type: number;
  comment: string;
  positive_score: number;
  negative_score: number;
  neutral_score: number;
  index: number;
};
const CommentCards = ({
  comment,
  positive_score,
  negative_score,
  neutral_score,
  type,
  index,
}: Props) => {
  const ChipClassNames =
    type == 0
      ? {
          base: "border-1 border-white/6=80",
          content: "text-red-400 text-small font-semibold",
        }
      : type === 4
      ? {
          base: "border-1 border-white/6=80",
          content: "text-green-400 text-small font-semibold",
        }
      : {
          base: "border-1 border-white/6=80",
          content: "text-yellow-400 text-small font-semibold",
        };

  return (
    // <motion.div
    //   initial="hidden"
    //   whileInView={"show"}
    //   variants={fadeIn("right", "spring", 0.5, 0.75)}
    // >
    <motion.div
      // className="w-full green-pink-gradient p-[1px] rounded-[30px] shadow-card "
      variants={fadeIn("right", "spring", 0.25 * index, 0.55)}
    >
      <Card
        className={`
      w-[300px] h-[400px] border-none bg-gradient-to-br from-violet-500 to-fuchsia-500 gap-2`}
        style={{ transition: "opacity 0.05s, transform 0.5s" }}
      >
        <CardBody className="justify-center items-center pb-0">
          <div className="flex flex-row gap-3">
            <div className="justify-center items-center flex flex-col gap-2">
              <CircularProgress
                aria-label="true"
                classNames={{
                  svg: "w-16 h-16 drop-shadow-md",
                  indicator: "stroke-green-500",
                  track: "stroke-black/20",
                  value: "text-lg font-semibold text-green-500",
                }}
                value={positive_score}
                strokeWidth={4}
                showValueLabel={true}
              />
              <p className=" text-gray-300 text-xs">Positive</p>
            </div>
            <div className="justify-center items-center flex flex-col gap-2">
              <CircularProgress
                aria-label="true"
                classNames={{
                  svg: "w-16 h-16 drop-shadow-md",
                  indicator: "stroke-yellow-500",
                  track: "stroke-black/20",
                  value: "text-lg font-semibold text-yellow-500",
                }}
                value={neutral_score}
                strokeWidth={4}
                showValueLabel={true}
              />
              <p className=" text-gray-300 text-xs">Neutral</p>
            </div>
            <div className=" justify-center items-center flex flex-col gap-2">
              <CircularProgress
                aria-label="true"
                classNames={{
                  svg: "w-16 h-16 drop-shadow-md",
                  indicator: "stroke-red-500",
                  track: "stroke-black/20",
                  value: "text-lg font-semibold text-red-500",
                }}
                value={negative_score}
                strokeWidth={4}
                showValueLabel={true}
              />
              <p className="text-gray-300 text-xs">Negative</p>
            </div>
          </div>

          <Divider orientation="horizontal" className="my-2" />
          <ScrollShadow className="w-full h-full">
            <p className="ml-10 w-[60%] font-medium text-white sm:text-xl">
              {comment}
            </p>
          </ScrollShadow>
        </CardBody>
        <CardFooter className=" justify-center items-center pt-0">
          <Chip classNames={ChipClassNames} variant="bordered">
            {type == 0 ? "Negative" : type == 2 ? "Neutral" : "Postive"}
          </Chip>
        </CardFooter>
      </Card>
    </motion.div>
  );
};

export default CommentCards;
