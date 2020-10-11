import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import Content from "../components/Content";
import FormNewPassword from "../components/forms/FormNewPassword";
import { setTitle } from "../store/actions/titleActions";

const NewPassword = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setTitle("New Password"));
  }, [dispatch]);
  return (
    <Content>
      <FormNewPassword />
    </Content>
  );
};

export default NewPassword;
