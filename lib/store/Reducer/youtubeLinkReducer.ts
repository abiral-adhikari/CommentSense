import {
  IS_SHOW_ERROR_MODAL,
  IS_SHOW_SPINNER,
  IS_SHOW_SUCESS_MODAL,
  YOUTUBE_LINK,
} from "./constant";

const initialStates = "";

const YoutubeLinkReducer = (
  state = initialStates,
  action: { type: any; payload: any }
) => {
  switch (action.type) {
    case YOUTUBE_LINK:
      console.log(action.payload);
      return action.payload;

    default:
      return state;
  }
};

export default YoutubeLinkReducer;
