import { combineReducers } from "redux";
import CommentDataReducer from "./commentDataReducer";
import YoutubeLinkReducer from "./youtubeLinkReducer";
import ModalReducer from "./modalReducer";
export default combineReducers({
  CommentDataReducer,
  ModalReducer,
  YoutubeLinkReducer,
});
