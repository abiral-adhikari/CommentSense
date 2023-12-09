"use client";

import { scrollToSection } from "@/lib/action/ScrollFunctionalities";
import React, { FormEvent, useState } from "react";
import { DropDownButton } from "./DropDown";
import { useDispatch, useSelector } from "react-redux";
import {
  ADD_COMMENT_DATA_PAGINATION,
  ADD_COMMENT_DATA_SUCCESS,
  IS_SHOW_SPINNER,
  RESET_COMMENT_DATA_PAGINATION,
  RESET_COMMENT_DATA_SUCCESS,
  SEARCH_PROMPT_EDIT,
  YOUTUBE_LINK,
} from "@/lib/store/Reducer/constant";
import axios from "axios";
import { CommentData } from "@/types";


const Textbar=()=>{
    const commentDatas:CommentData[]=useSelector(
        (state:any)=>state.CommentDataReducer
    );
    const dispatch=useDispatch();
    const[text,setText]=useState("");
    const [isLoading, setIsLoading] = useState(false);


    const handleSubmit=async (event:FormEvent<HTMLFormElement>)=>{
        event.preventDefault();
        dispatch({
            type:RESET_COMMENT_DATA_SUCCESS,
            payload:[],
        });
        dispatch({
            type: IS_SHOW_SPINNER,
            payload: true,
        });

        try{
            const response=await axios.get(
                "http://localhost:3000/api/flask/predicttext",
                {
                  params: {text:text},
                }
            );
            dispatch({
                type:SEARCH_PROMPT_EDIT,
                payload:{
                    text:text
                }
            })
            console.log(response.data)
            console.log(commentDatas)
            await dispatch({
                type: ADD_COMMENT_DATA_SUCCESS,
                payload: response.data.comments,
            });
            let receivedComments=response.data.comments
        }catch(error){
            console.log("Error fetching data:",error)
        }
        dispatch({
            type: IS_SHOW_SPINNER,
            payload: false,
          });
        }
        
  return (
    <>
      <form className=" flex flex-col gap-4 mt-12" onSubmit={handleSubmit}>
        <div className="flex gap-4  flex-wrap">
          <input
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Enter the text for analyis"
            className="searchbar-input"
          ></input>
          <button
            disabled={text === ""}
            type="submit"
            className="searchbar-btn"
          >
            {isLoading ? "Searching...." : "Search"}
          </button>
        </div>
      </form>{" "}
    </>
  );      
}

export default Textbar;
