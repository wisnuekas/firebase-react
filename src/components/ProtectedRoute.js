import React from "react";
import { useSelector } from "react-redux";
import { Route, Redirect } from "react-router-dom";

const ProtectedRoute = ({
  comp: Component, // use comp prop
  children,
  ...rest
}) => {
  const auth = useSelector((state) => state.firebase.auth);
  console.log("check auth");
  return (
    <Route
      {...rest}
      render={(props) =>
        auth.isEmpty ? <Redirect to="/login" /> : <Component {...props} />
      }
    />
  );
};

export default ProtectedRoute;
