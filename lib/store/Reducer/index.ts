import { combineReducers } from "redux";
import CommentDataReducer from "./commentDataReducer";
import ModalReducer from "./modalReducer";
export default combineReducers({
  CommentDataReducer,
  ModalReducer,
});
