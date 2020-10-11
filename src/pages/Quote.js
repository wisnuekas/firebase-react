import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import Content from "../components/Content";
import { setTitle } from "../store/actions/titleActions";

const Quote = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setTitle("Kutipan"));
  }, [dispatch]);

  return (
    <div>
      <Content>Kutipan</Content>
    </div>
  );
};

export default Quote;
