import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import Content from "../components/Content";
import { setTitle } from "../store/actions/titleActions";

const Customer = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setTitle("Customer"));
  }, [dispatch]);

  return (
    <div>
      <Content>Customer</Content>
    </div>
  );
};

export default Customer;
