import { SEARCH_PROMPT_EDIT } from "./constant";

const initialStates = {
  youtubeLink: "",
  model: "LSTM",
  comment: 100,
  pageNumber: "1",
};
// const initialStates = false;

const SearchPromptReducer = (
  state = initialStates,
  action: { type: any; payload: any }
) => {
  switch (action.type) {
    case SEARCH_PROMPT_EDIT:
      return action.payload;
    default:
      return state;
  }
};

export default SearchPromptReducer;
