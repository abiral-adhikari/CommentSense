import { combineReducers } from "redux";
import CommentDataReducer from "./commentDataReducer";
import YoutubeLinkReducer from "./youtubeLinkReducer";
import ModalReducer from "./modalReducer";
import SearchPromptReducer from "./searchPromptReducer";
import CommentDataPaginationReducer from "./commentDataPaginationReducer";
export default combineReducers({
  CommentDataReducer,
  ModalReducer,
  YoutubeLinkReducer,
  SearchPromptReducer,
  CommentDataPaginationReducer,
});
