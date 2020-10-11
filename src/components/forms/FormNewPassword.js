import React, { useEffect } from "react";
import {
  Button,
  Container,
  IconButton,
  makeStyles,
  TextField,
} from "@material-ui/core";
import { Field, Form, Formik } from "formik";
import * as Yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import { updatePassword } from "../../store/actions/authActions";
import {
  enqueueSnackbar as enqueueSnackbarAction,
  closeSnackbar as closeSnackbarAction,
} from "../../store/actions/appNotifActions";
import CloseIcon from "@material-ui/icons/Close";

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(10),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

const NewPasswordSchema = Yup.object().shape({
  old: Yup.string().required("Required"),
  new: Yup.string().min(8, "Minimal 8 Karakter").required("Required"),
  c_new: Yup.string()
    .required("Required")
    .oneOf([Yup.ref("new"), null], "Password harus sama"),
});

export default function FormNewPassword() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const authError = useSelector((state) => state.auth);

  useEffect(() => {
    if (authError.key) {
      dispatch(
        enqueueSnackbarAction({
          message: authError.authErr
            ? "Update password failed"
            : "Update password success",
          options: {
            key: new Date().getTime() + Math.random(),
            variant: authError.authErr ? "error" : "success",
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
    }
  }, [authError, dispatch]);

  return (
    <Container component="main" maxWidth="xs">
      <Formik
        validateOnChange
        initialValues={{ old: "", new: "", c_new: "" }}
        onSubmit={(data, { resetForm }) => {
          console.log(data);
          dispatch(updatePassword(data));
          resetForm();
        }}
        validationSchema={NewPasswordSchema}
      >
        {({ errors, touched, isValid }) => (
          <Form>
            <Field
              as={TextField}
              margin="normal"
              fullWidth
              required
              variant="outlined"
              id="old"
              name="old"
              label="Password Lama"
              type="password"
              error={errors.old && touched.old}
              helperText={errors.old && touched.old && errors.old}
            />
            <Field
              as={TextField}
              margin="normal"
              fullWidth
              required
              variant="outlined"
              id="new"
              name="new"
              label="Password Baru"
              type="password"
              error={errors.new && touched.new}
              helperText={errors.new && touched.new && errors.new}
            />
            <Field
              as={TextField}
              margin="normal"
              fullWidth
              required
              variant="outlined"
              id="c_new"
              name="c_new"
              label="Konfirmasi Password baru"
              type="password"
              error={errors.c_new && touched.c_new}
              helperText={errors.c_new && touched.c_new && errors.c_new}
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              size="large"
              margin="normal"
              className={classes.submit}
              disabled={!isValid}
            >
              Ganti Password
            </Button>
          </Form>
        )}
      </Formik>
    </Container>
  );
}
