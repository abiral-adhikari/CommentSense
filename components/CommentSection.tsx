"use client";
import { useState, useEffect, useRef } from "react";
import { Pagination, Button, Divider } from "@nextui-org/react";
import { CommentData } from "@/types";
import CommentCards from "./CommentsCards";
import { motion } from "framer-motion";
import { staggerContainer } from "@/lib/utils/motion";
import { scrollToSection } from "@/lib/action/ScrollFunctionalities";
import { useDispatch, useSelector } from "react-redux";
// import { ADD_COMMENT_DATA_SUCCESS } from "@/lib/store/Reducer/constant";

const pageSize = 10; // Number of comments to display per page
type Props = {
  datassss: CommentData[];
};
const CommentSection = ({ datassss }: Props) => {
  const dispatch = useDispatch();
  const commentDatas: CommentData[] = useSelector(
    (state: any) => state.CommentDataReducer
  );
  const searchLink = useSelector((state: any) => state.YoutubeLinkReducer);
  const [currentPage, setCurrentPage] = useState(1);
  const [displayedComments, setDisplayedComments] = useState([
    {
      type: 0,
      comment: "",
      positive_score: 0,
      negative_score: 0,
      neutral_score: 0,
    },
  ]);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const startIndex = (currentPage - 1) * pageSize;
    const endIndex = startIndex + pageSize;
    const commentsToDisplay: CommentData[] = commentDatas.slice(
      startIndex,
      endIndex
    );
    setDisplayedComments(commentsToDisplay);
    console.log(commentsToDisplay);
    console.log(displayedComments);
  }, [currentPage, commentDatas]);
  if (!searchLink && commentDatas.length === 0) return;
  return (
    <motion.section
      id="CommentSection"
      ref={sectionRef}
      variants={staggerContainer()}
      viewport={{ once: true, amount: 0.25 }}
      className={`px-6 md:px-20 py-5 items-center `}
    >
      <h1 className=" mt-4 text-5xl leading-[72px] font-bold tracking-[-1.2px] text-gray-900 mb-8">
        Video
      </h1>
      <div className=" flex-1 aspect-video ">
        <iframe
          className="w-full h-full rounded-lg"
          src={`https://www.youtube.com/embed/${searchLink}`}
          // width="100%"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
      </div>

      <h1 className=" mt-4 text-5xl leading-[72px] font-bold tracking-[-1.2px] text-gray-900 mb-8">
        Comments
      </h1>
      <div className="flex flex-wrap justify-center items-center mx-auto gap-5  ">
        {displayedComments.map((comment, index) => (
          <CommentCards
            index={index}
            key={`${comment.type}-${index}`}
            comment={comment.comment}
            neutral_score={comment.neutral_score}
            positive_score={comment.positive_score}
            negative_score={comment.negative_score}
            type={comment.type}
          />
        ))}
      </div>
      <Divider className="mt-5" />
      <div className="flex flex-row  mt-5 justify-center">
        <Pagination
          showControls
          total={
            commentDatas.length % pageSize === 0
              ? commentDatas.length / pageSize
              : commentDatas.length / pageSize + 1
          }
          boundaries={1}
          color="secondary"
          page={currentPage}
          onChange={(e: number) => {
            setCurrentPage(e);
            scrollToSection("CommentSection");
          }}
        />
      </div>
      {/* <Button
        onClick={(e: any) => {
          console.log(datassss.slice(10, 20));
          dispatch({
            type: ADD_COMMENT_DATA_SUCCESS,
            payload: datassss.slice(10, 20),
          });
        }}
      >
        clickedme
      </Button> */}
    </motion.section>
  );
};

import React from "react";

export const VideoSection = () => {
  return <div>VideoSection</div>;
};

export default CommentSection;
