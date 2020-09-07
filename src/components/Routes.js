import React from "react";
import { useSelector } from "react-redux";
import { Route, Switch, Redirect } from "react-router-dom";
import Orders from "./Orders";
import SignIn from "./SignIn";
import Dashboard from "./Dashboard";

const ProtectedRoute = ({
  comp: Component, // use comp prop
  children,
  ...rest
}) => {
  const auth = useSelector((state) => state.firebase.auth);
  return (
    <Route
      {...rest}
      render={(props) =>
        auth.isEmpty ? <Redirect to="/login" /> : <Component {...props} />
      }
    />
  );
};

export const Routes = () => {
  return (
    <Switch>
      <Route path="/" exact>
        <Redirect to="/dashboard" />
      </Route>
      <Route path="/login" component={SignIn} />
      <ProtectedRoute path="/orders" comp={Orders} />
      <ProtectedRoute path="/dashboard" comp={Dashboard} />
    </Switch>
  );
};

export default Routes;
