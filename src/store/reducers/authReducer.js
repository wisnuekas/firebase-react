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
    case "SEND_PASSWORD_RESET_EMAIL_SUCCESS":
      console.log("Password reset email sent");
      return {
        ...state,
        authErr: null,
      };
    case "SEND_PASSWORD_RESET_EMAIL_FAILED":
      console.log("Send password reset email failed");
      return {
        ...state,
        authErr:
          "Send password reset email failed. User may have been deleted.",
      };
    default:
      return state;
  }
};

export default authReducer;
