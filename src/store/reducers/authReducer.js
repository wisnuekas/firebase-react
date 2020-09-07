const initState = { authErr: null };

const authReducer = (state = initState, action) => {
  switch (action.type) {
    case "LOGIN_SUCCESS":
      console.log("Login succesfully");
      return {
        ...state,
        authErr: null,
      };
    case "LOGIN_FAILED":
      console.log("Login failed");
      return {
        ...state,
        authErr: "Login Failed",
      };
    case "SIGNOUT_SUCCESS":
      console.log("Signout success");
      return state;
    default:
      return state;
  }
};

export default authReducer;
