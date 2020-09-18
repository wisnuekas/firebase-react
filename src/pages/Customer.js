import React from "react";
import Navbar from "../components/Navbar";
import Content from "../components/Content";

const Customer = () => {
  return (
    <div style={{ display: "flex" }}>
      <Navbar title="Customer" />
      <Content>Customer</Content>
    </div>
  );
};

export default Customer;
