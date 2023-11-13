"use client";

import { scrollToSection } from "@/lib/action/ScrollFunctionalities";
import React, { FormEvent, useState } from "react";
import { DropDownButton } from "./DropDown";
import { useDispatch } from "react-redux";
import { IS_SHOW_SPINNER } from "@/lib/store/Reducer/constant";

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
        "This will take long time. We will mail you after the result are processed",
    },
  ];
  const dispatch = useDispatch();
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

    dispatch({
      type: IS_SHOW_SPINNER,
      payload: false,
    });

    // fetchComments(searchPrompt);

    console.log({
      searchPrompt,
      model,
      comment,
      commentextracr: comment.match(/\d+/)![0],
    });
    dispatch({
      type: IS_SHOW_SPINNER,
      payload: true,
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
        <div className="flex items-center gap-2 mt-1 max-h-7 flex-row">
          <DropDownButton
            placeholder=" "
            className="max-w-xs max-h-12"
            label="Model Selection"
            options={modelOptions}
            setSelectedKeys={setModel}
            selectedKeys={model}
          />

          <DropDownButton
            placeholder=" "
            className="max-w-lg max-h-12"
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
