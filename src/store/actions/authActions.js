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

export const updateProfile = (data) => {
  return (dispatch, getState, { getFirebase }) => {
    const firebase = getFirebase();
    const user = firebase.auth().currentUser;

    user
      .reauthenticateWithCredential(
        firebase.auth.EmailAuthProvider.credential(user.email, data.password)
      )
      .then(() => user.updateEmail(data.email))
      .then(() => {
        firebase.updateProfile({
          email: data.email,
          displayName: data.displayName,
        });
      })
      .then(() => {
        dispatch({ type: "UPDATE_PROFILE_SUCCESS" });
      })
      .catch((error) => {
        dispatch({ type: "UPDATE_PROFILE_FAILED", error });
      });
  };
};

export const updatePassword = (data) => {
  return (dispatch, getState, { getFirebase }) => {
    const firebase = getFirebase();
    const user = firebase.auth().currentUser;
    const password = data.old;
    const newPassword = data.new;

    user
      .reauthenticateWithCredential(
        firebase.auth.EmailAuthProvider.credential(user.email, password)
      )
      .then(() => {
        user.updatePassword(newPassword);
      })
      .then(() => dispatch({ type: "UPDATE_PASSWORD_SUCCESS" }))
      .catch((error) => dispatch({ type: "UPDATE_PASSWORD_FAILED", error }));
  };
};
