const LoginErrorReducer = (state = "", action: { type: any; payload: any }) => {
  switch (action.type) {
    case "ERROR":
      return action.payload;
    default:
      return state;
  }
};

export default LoginErrorReducer;
