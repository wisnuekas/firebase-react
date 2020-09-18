import React from "react";
import Navbar from "../components/Navbar";
import Content from "../components/Content";

const Quote = () => {
  return (
    <div style={{ display: "flex" }}>
      <Navbar title="Kutipan" />
      <Content>Kutipan</Content>
    </div>
  );
};

export default Quote;
