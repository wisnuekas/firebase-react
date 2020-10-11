import React, { useState } from "react";
import {
  MenuItem,
  Menu,
  Divider,
  Typography,
  Button,
  IconButton,
} from "@material-ui/core";

import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import { useDispatch, useSelector } from "react-redux";
import { signOut } from "../store/actions/authActions";
import { Link } from "react-router-dom";
import { enqueueSnackbar as enqueueSnackbarAction } from "../store/actions/appNotifActions";
import CloseIcon from "@material-ui/icons/Close";
import { closeSnackbar as closeSnackbarAction } from "../store/actions/appNotifActions";

function AccountMenu(props) {
  const dispatch = useDispatch();
  const [anchorEl, setAnchorEl] = useState(null);
  const profile = useSelector((state) => state.firebase.profile);

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    dispatch(signOut());

    setTimeout(() => {
      dispatch(
        enqueueSnackbarAction({
          message: "Logout Berhasil",
          options: {
            key: new Date().getTime() + Math.random(),
            variant: "info",
            anchorOrigin: {
              vertical: "top",
              horizontal: "right",
            },
            action: (key) => {
              return (
                <IconButton
                  aria-label="close"
                  color="inherit"
                  style={{ padding: 0.5 }}
                  onClick={() => dispatch(closeSnackbarAction(key))}
                >
                  <CloseIcon />
                </IconButton>
              );
            },
          },
        })
      );
    }, 2000);
  };

  const open = Boolean(anchorEl);

  return (
    <div>
      <Button
        onClick={handleMenu}
        color="inherit"
        size="large"
        endIcon={<AccountCircleIcon style={{ height: 25, width: 25 }} />}
      >
        {profile.displayName}
      </Button>
      <Menu
        id="menu-appbar"
        anchorEl={anchorEl}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        keepMounted
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        open={open}
        onClose={handleClose}
      >
        <MenuItem component={Link} to="/profile" onClick={handleClose}>
          <Typography variant="subtitle1" gutterBottom>
            Profile
          </Typography>
        </MenuItem>
        <Divider />
        <MenuItem onClick={handleLogout}>Logout</MenuItem>
      </Menu>
    </div>
  );
}

export default AccountMenu;
