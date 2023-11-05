"use client";

import React, { FormEvent, useState } from "react";

const Searchbar = () => {
  const [searchPrompt, setSetsearchPrompt] = useState("");
  const [isLoading, setIsLoading] = useState(false);

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
    !isValidLink ? alert("Invalid Link") : "";
  };
  return (
    <form className="flex flex-wrap gap-4 mt-12" onSubmit={handleSubmit}>
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
    </form>
  );
};

export default Searchbar;
