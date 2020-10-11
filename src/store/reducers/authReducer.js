const initState = { key: null, authErr: null };

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
      console.log("Send password reset email failed", action.err);
      return {
        ...state,
        authErr:
          "Send password reset email failed. User may have been deleted.",
      };
    case "UPDATE_PROFILE_SUCCESS":
      console.log("Update profile success");
      return {
        ...state,
        authErr: null,
        key: new Date().getTime() + Math.random(),
      };
    case "UPDATE_PROFILE_FAILED":
      console.log("Update profile failed");
      return {
        ...state,
        authErr: "Update profile failed",
        key: new Date().getTime() + Math.random(),
      };
    case "UPDATE_PASSWORD_SUCCESS":
      console.log("Update password success");
      return {
        ...state,
        authErr: null,
        key: new Date().getTime() + Math.random(),
      };
    case "UPDATE_PASSWORD_FAILED":
      console.log("Update password failed", action.error);
      return {
        ...state,
        authErr: "Update password failed",
        key: new Date().getTime() + Math.random(),
      };
    default:
      return state;
  }
};

export default authReducer;
