"use client";

import { scrollToSection } from "@/lib/action/ScrollFunctionalities";
import { fetchComments } from "@/lib/action/YoutubeCommentFetch";
import { Dropdown } from "@nextui-org/react";
import React, { FormEvent, useState } from "react";
import DropdownButton, { AutoSelect } from "./DropDown";
import { model } from "mongoose";

const Searchbar = () => {
  const modelOptions = [
    {
      title: "LSTM",
      description: "Accuracy :90%",
    },
    {
      title: "GRU",
      description: "Accuracy :89%",
    },
    {
      title: "RNN",
      description: "Accuracy :85%",
    },
  ];
  const commentOptions = [
    {
      title: "100 comments",
      description: "",
    },
    {
      title: "500 comments",
      description: "",
    },
    {
      title: "1000 comments",
      description: "",
    },
    {
      title: "1500 comments",
      description: "",
    },
    {
      title: "2000 comments",
      description: "",
    },
    {
      title: "All comments",
      description:
        "this will take long time. We will mail you after the result are processed",
    },
  ];
  const [searchPrompt, setSetsearchPrompt] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [model, setModel] = useState(modelOptions[0].title);
  const [comment, setComment] = useState(commentOptions[0].title);

  const isValidYouTubeURL = (url: string) => {
    try {
      const parsedURL = new URL(url);
      const hostName = parsedURL.hostname;
      if (
        hostName.includes("youtube.com") ||
        hostName.includes("youtube.") ||
        hostName.endsWith("youtube")
      ) {
        return true;
      }
    } catch (error) {
      return false;
    }
    return false;
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const isValidLink = isValidYouTubeURL(searchPrompt);
    if (!isValidLink) {
      alert("Invalid Link");
      return;
    }

    // fetchComments(searchPrompt);

    console.log({
      searchPrompt,
      model,
      comment,
      commentextracr: comment.match(/\d+/)![0],
    });
    scrollToSection("CommentSection");
  };

  return (
    <>
      <form className=" flex flex-col gap-4 mt-12" onSubmit={handleSubmit}>
        <div className="flex gap-4  flex-wrap">
          <input
            type="text"
            value={searchPrompt}
            onChange={(e) => setSetsearchPrompt(e.target.value)}
            placeholder="Enter product Link"
            className="searchbar-input"
          ></input>
          <button
            disabled={searchPrompt === ""}
            type="submit"
            className="searchbar-btn"
          >
            {isLoading ? "Searching...." : "Search"}
          </button>
        </div>
        <div className="flex items-center gap-2 max-h-7 flex-row">
          <span className="text-gray-5600">Choose Model:</span>
          <DropdownButton
            options={modelOptions}
            setSelectedKeys={setModel}
            selectedKeys={model}
          />
          <span className="text-gray-600">Comment Counts:</span>
          <DropdownButton
            options={commentOptions}
            setSelectedKeys={setComment}
            selectedKeys={comment}
          />
          <AutoSelect
            placeholder=" "
            className="max-w-xs"
            label="Comment Count"
            options={commentOptions}
            setSelectedKeys={setComment}
            selectedKeys={comment}
          />
        </div>
      </form>{" "}
    </>
  );
};

export default Searchbar;
