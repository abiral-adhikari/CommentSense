import {
  ADD_COMMENT_DATA_SUCCESS,
  FETCH_COMMENT_DATA_SUCCESS,
  RESET_COMMENT_DATA_SUCCESS,
} from "./constant";
import { datassss } from "../../CommentsData";

const intialState = datassss.slice(0, 10);
const CommentDataReducer = (
  state = intialState,
  action: { type: any; payload: any }
) => {
  switch (action.type) {
    case FETCH_COMMENT_DATA_SUCCESS:
      // console.log(state, action);
      return action.payload;
    case ADD_COMMENT_DATA_SUCCESS:
      console.log(action.payload);
      console.log([...state, ...action.payload]);
      return [...state, ...action.payload];
    case RESET_COMMENT_DATA_SUCCESS:
      return intialState;
    default:
      return state;
  }
};

export default CommentDataReducer;
