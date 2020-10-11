import React, { useEffect, useState } from "react";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  IconButton,
  makeStyles,
  TextField,
} from "@material-ui/core";
import { Field, Form, Formik } from "formik";
import * as Yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import { updateProfile } from "../../store/actions/authActions";
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

const ProfileSchema = Yup.object().shape({
  displayName: Yup.string()
    .min(3, "Minimal 3 karakter")
    .max(15, "Maksimal 15 karakter")
    .required("Required"),
  email: Yup.string().email("Email tidak valid").required("Required"),
});

export default function FormProfile() {
  const classes = useStyles();
  const dispatch = useDispatch();

  const profile = useSelector((state) => state.firebase.profile);
  const authError = useSelector((state) => state.auth);

  const [toogleUpdate, setToogleUpdate] = useState(true);

  useEffect(() => {
    if (authError.key) {
      dispatch(
        enqueueSnackbarAction({
          message: authError.authErr
            ? "Update profile failed"
            : "Update profile success",
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

  const handleToogleUpdate = (e) => {
    e.preventDefault();
    setToogleUpdate(!toogleUpdate);
  };

  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Formik
        validateOnChange
        initialValues={{
          displayName: profile.displayName,
          email: profile.email,
          password: "",
        }}
        onSubmit={(data, { setSubmitting, resetForm, setValues }) => {
          setSubmitting(true);
          setToogleUpdate(true);
          dispatch(updateProfile(data));
          setSubmitting(false);
          setOpen(false);
        }}
        validationSchema={ProfileSchema}
      >
        {({ errors, touched, handleSubmit, isValid }) => (
          <Form onSubmit={handleSubmit}>
            <Field
              as={TextField}
              margin="normal"
              fullWidth
              required
              disabled={toogleUpdate}
              variant="outlined"
              id="displayName"
              name="displayName"
              label="Nama"
              error={errors.displayName && touched.displayName}
              helperText={
                errors.displayName && touched.displayName && errors.displayName
              }
            />
            <Field
              as={TextField}
              margin="normal"
              variant="outlined"
              required
              fullWidth
              id="email"
              label="Email"
              name="email"
              disabled={toogleUpdate}
              error={errors.email && touched.email}
              helperText={errors.email && touched.email && errors.email}
            />

            {toogleUpdate ? (
              <Button
                fullWidth
                variant="contained"
                color="primary"
                size="large"
                margin="normal"
                className={classes.submit}
                onClick={handleToogleUpdate}
              >
                Edit
              </Button>
            ) : (
              <div>
                <Button
                  fullWidth
                  variant="contained"
                  color="primary"
                  size="large"
                  margin="normal"
                  className={classes.submit}
                  // disabled={isSubmitting}
                  onClick={handleClickOpen}
                  disabled={!isValid}
                >
                  Update
                </Button>
                <Button
                  fullWidth
                  variant="outlined"
                  color="default"
                  size="large"
                  margin="normal"
                  onClick={() => {
                    setToogleUpdate(true);
                  }}
                >
                  Batal
                </Button>
              </div>
            )}
            <Dialog
              open={open}
              onClose={handleClose}
              aria-labelledby="form-dialog-title"
            >
              <DialogContent>
                <DialogContentText>
                  Konfirmasi password untuk memperbarui profil.
                </DialogContentText>
                <Field
                  as={TextField}
                  autoFocus
                  margin="dense"
                  id="password"
                  label="Password"
                  type="password"
                  name="password"
                  fullWidth
                />
              </DialogContent>
              <DialogActions>
                <Button onClick={handleClose} color="secondary">
                  Batal
                </Button>
                <Button type="submit" color="primary" onClick={handleSubmit}>
                  Konfirmasi
                </Button>
              </DialogActions>
            </Dialog>
          </Form>
        )}
      </Formik>
    </div>
  );
}
