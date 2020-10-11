import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import Content from "../components/Content";
import { setTitle } from "../store/actions/titleActions";

const Mitra = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setTitle("Mitra"));
  }, [dispatch]);

  return (
    <div>
      <Content>Mitra</Content>
    </div>
  );
};

export default Mitra;
