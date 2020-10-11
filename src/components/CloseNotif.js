import { IconButton } from "@material-ui/core";
import React from "react";
import CloseIcon from "@material-ui/icons/Close";
import { closeSnackbar as closeSnackbarAction } from "../store/actions/appNotifActions";
import { useDispatch } from "react-redux";

const CloseNotif = (props) => {
  const dispatch = useDispatch();
  console.log(props.key);
  return (
    <IconButton
      aria-label="close"
      color="inherit"
      style={{ padding: 0.5 }}
      onClick={() => dispatch(closeSnackbarAction(props.key))}
    >
      <CloseIcon />
    </IconButton>
  );
};

export default CloseNotif;
