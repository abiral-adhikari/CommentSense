import {
  ADD_COMMENT_DATA_PAGINATION,
  FETCH_COMMENT_DATA_PAGINATION,
  RESET_COMMENT_DATA_PAGINATION,
} from "./constant";
import { CommentDataPaginationState } from "@/types";

// Define the type for the state

const intialState = {
  1: [],
};
// const intialState: never[] = [];
const CommentDataPaginationReducer = (
  state: CommentDataPaginationState = intialState,
  action: { type: any; payload: any }
) => {
  switch (action.type) {
    case FETCH_COMMENT_DATA_PAGINATION:
      // console.log(state, action);
      return action.payload;
    case ADD_COMMENT_DATA_PAGINATION:
      console.log(action.payload);
      const { key, value } = action.payload;
      const existingData = Array.isArray(state[key]) ? state[key] : [];
      const newDatas = {
        ...state,
        [key]: [...existingData, ...value],
      };
      console.log(newDatas);
      return newDatas;
    case RESET_COMMENT_DATA_PAGINATION:
      return intialState;
    default:
      return state;
  }
};

export default CommentDataPaginationReducer;
