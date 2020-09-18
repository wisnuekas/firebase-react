import React, { useState } from "react";
import {
  TextField,
  Button,
  Container,
  CssBaseline,
  makeStyles,
  Typography,
} from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import { sendPasswordResetEmail } from "../store/actions/authActions";
import { Alert } from "@material-ui/lab";
import { Redirect } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(10),
    display: "flex",
    flexDirection: "column",
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

function ResetPassword() {
  const classes = useStyles();

  const dispatch = useDispatch();

  const authErr = useSelector((state) => state.auth.authErr);

  const [email, setEmail] = useState("");

  const [isSent, setIsSent] = useState(false);

  const auth = useSelector((state) => state.firebase.auth);

  console.log(auth);

  if (!auth.isEmpty) return <Redirect to="/dashboard" />;

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(authErr);
    setIsSent(true);
    dispatch(sendPasswordResetEmail(email));
  };

  const handleChange = (e) => {
    e.preventDefault();
    setEmail(e.target.value);
  };

  return (
    <div>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <div className={classes.paper}>
          <Typography component="h1" variant="h5">
            Reset Password
          </Typography>
          <Typography component="h1" variant="h5">
            Send recover link to email.
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
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              size="large"
              className={classes.submit}
            >
              Send
            </Button>
            {authErr && <Alert severity="error">{authErr}</Alert>}
            {!authErr && isSent ? (
              <Alert severity="info">
                {"Password email sent, please check your email."}
              </Alert>
            ) : null}
          </form>
        </div>
      </Container>
    </div>
  );
}

export default ResetPassword;
