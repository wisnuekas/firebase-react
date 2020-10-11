import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Avatar,
  Button,
  Container,
  CssBaseline,
  makeStyles,
  Typography,
} from "@material-ui/core";
import { setTitle } from "../store/actions/titleActions";
import FormProfile from "../components/forms/FormProfile";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(10),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
    width: theme.spacing(7),
    height: theme.spacing(7),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

function Profile() {
  const classes = useStyles();

  const profile = useSelector((state) => state.firebase.profile);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setTitle("Profile"));
  }, [dispatch]);

  return (
    <Container component="main" maxWidth="xs">
      {profile.isLoaded && (
        <div>
          <CssBaseline />
          <div className={classes.paper}>
            <Avatar alt={profile.displayName} className={classes.avatar} />
            <Typography variant="h6" gutterBottom>
              {profile.displayName}
            </Typography>
          </div>
          <div>
            <FormProfile />
            <Button
              fullWidth
              variant="contained"
              color="primary"
              size="large"
              margin="normal"
              className={classes.submit}
              component={Link}
              to="/newpassword"
            >
              Ganti Password
            </Button>
          </div>
        </div>
      )}
    </Container>
  );
}

export default Profile;
