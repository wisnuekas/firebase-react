import React from "react";
import { useSelector } from "react-redux";
import { Route, Switch, Redirect } from "react-router-dom";
import Orders from "../pages/Order";
import SignIn from "../pages/SignIn";
import Dashboard from "../pages/Dashboard";
import ResetPassword from "../pages/ResetPassword";
import Profile from "../pages/Profile";
import Mitra from "../pages/Mitra";
import Customer from "../pages/Customer";
import Quote from "../pages/Quote";
import Notifikasi from "../pages/Notifikasi";
import Admins from "../pages/Admins";
import NewPassword from "../pages/NewPassword";

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
      <Route path="/recover" component={ResetPassword} />
      <ProtectedRoute path="/order" comp={Orders} />
      <ProtectedRoute path="/dashboard" comp={Dashboard} />
      <ProtectedRoute path="/profile" comp={Profile} />
      <ProtectedRoute path="/mitra" comp={Mitra} />
      <ProtectedRoute path="/customer" comp={Customer} />

      <ProtectedRoute path="/quote" comp={Quote} />
      <ProtectedRoute path="/notifikasi" comp={Notifikasi} />

      <ProtectedRoute path="/admins" comp={Admins} />
      <ProtectedRoute path="/newpassword" comp={NewPassword} />
    </Switch>
  );
};

export default Routes;
