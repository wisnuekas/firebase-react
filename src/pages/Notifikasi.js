import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import Content from "../components/Content";
import { setTitle } from "../store/actions/titleActions";

const Notifikasi = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setTitle("Notifikasi"));
  }, [dispatch]);

  return (
    <div>
      <Content>Notifikasi</Content>
    </div>
  );
};

export default Notifikasi;
