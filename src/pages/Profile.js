import React from "react";
import { useSelector } from "react-redux";
import Navbar from "../components/Navbar";
import Content from "../components/Content";

function Profile() {
  const account = useSelector((state) => state);
  console.log(account);

  return (
    <div style={{ display: "flex" }}>
      <Navbar title="Profile" />
      <Content>Profile</Content>
    </div>
  );
}

export default Profile;
