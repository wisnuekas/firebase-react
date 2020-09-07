import React, { useState } from "react";
import {
  Container,
  TextField,
  Button,
  makeStyles,
  Typography,
  CssBaseline,
  Avatar,
} from "@material-ui/core";
import { Alert } from "@material-ui/lab";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import { connect } from "react-redux";
import { signIn } from "../store/actions/authActions";
import { Redirect } from "react-router-dom";

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
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

function SignIn(props) {
  const classes = useStyles();

  const [creds, setCreds] = useState({
    email: "test@ilife.test",
    password: "test123",
  });

  const handleChange = (e) => {
    setCreds({ ...creds, [e.target.id]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    props.signIn(creds);
  };

  if (!props.auth.isEmpty) return <Redirect to="/dashboard" />;

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <form onSubmit={handleSubmit}>
          <TextField
            margin="normal"
            variant="outlined"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
            onChange={handleChange}
          />
          <TextField
            margin="normal"
            fullWidth
            required
            variant="outlined"
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            onChange={handleChange}
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            size="large"
            margin="normal"
            className={classes.submit}
          >
            Sign In
          </Button>
          {props.authErr && <Alert severity="error">{props.authErr}</Alert>}
        </form>
      </div>
    </Container>
  );
}

const mapsStateToProps = (state) => {
  return {
    authErr: state.auth.authErr,
    auth: state.firebase.auth,
  };
};

const mapsDispatchToProps = (dispatch) => {
  return {
    signIn: (creds) => dispatch(signIn(creds)),
  };
};

export default connect(mapsStateToProps, mapsDispatchToProps)(SignIn);
