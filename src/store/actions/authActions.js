export const signIn = (creds) => {
  return (dispatch, getState, { getFirebase }) => {
    const firebase = getFirebase();

    firebase
      .auth()
      .signInWithEmailAndPassword(creds.email, creds.password)
      .then(() => {
        dispatch({ type: "LOGIN_SUCCESS" });
      })
      .catch((err) => {
        dispatch({ type: "LOGIN_FAILED", err });
      });
  };
};

export const signOut = () => {
  return (dispatch, getState, { getFirebase }) => {
    const firebase = getFirebase();

    firebase
      .auth()
      .signOut()
      .then(() => dispatch({ type: "SIGNOUT_SUCCESS" }));
  };
};

export const sendPasswordResetEmail = (email) => {
  return (dispatch, getState, { getFirebase }) => {
    const firebase = getFirebase();

    console.log(email);

    firebase
      .auth()
      .sendPasswordResetEmail(email)
      .then(function () {
        dispatch({ type: "SEND_PASSWORD_RESET_EMAIL_SUCCESS" });
      })
      .catch(function (error) {
        dispatch({ type: "SEND_PASSWORD_RESET_EMAIL_FAILED", error });
      });
  };
};
