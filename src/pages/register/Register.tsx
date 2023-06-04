import { Formik, Form, Field, ErrorMessage } from "formik";
import { TextField, Button } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { register, reset } from "../../features/auth/authSlice";
import { Box } from "../../utils/uiCore";
import { useStyles } from "./style";
import { signupValidation } from "../../utils/formikValidation";
import { RegisterFormData } from "./register.interface";
import { Dispatch, useEffect } from "react";
import { paths } from "../../path/paths";
import { toast } from "react-toastify";

export const Register = () => {
  const classes = useStyles();
  const navigate = useNavigate();
  const dispatch: Dispatch<any> = useDispatch();

  const { user, isLoading, isError, isSuccess, message } = useSelector(
    (state: any) => state?.auth
  );

  const handleSubmit = async (values: RegisterFormData) => {
    dispatch(register(values));
    console.log(values);
  };

  useEffect(() => {
    if (user || isSuccess) {
      navigate(paths.login);
    }
    if (isError) {
      toast.error(message);
    }
    dispatch(reset())
  }, [user, isLoading, isError, isSuccess, message]);

  return (
    <Box className={classes.registerMain}>
      <Box className={classes.signupCard}>
        <Box className={classes.signupHeadding}>Signup</Box>
        <Formik
          initialValues={{ name: "", email: "", password: "" }}
          validationSchema={signupValidation}
          onSubmit={handleSubmit}>
          <Form>
            <Box className={classes.textField}>
              <Field name="name">
                {({ field }: any) => (
                  <TextField
                    label="Name"
                    variant="outlined"
                    {...field}
                    fullWidth
                    error={Boolean(field.value && field.error)}
                    helperText={field.value && field.error ? field.error : ""}
                  />
                )}
              </Field>
              <ErrorMessage
                className={classes.errorComponent}
                name="name"
                component="Box"
              />
            </Box>

            <Box className={classes.textField}>
              <Field name="email">
                {({ field }: any) => (
                  <TextField
                    label="Email"
                    variant="outlined"
                    {...field}
                    fullWidth
                    error={Boolean(field.value && field.error)}
                    helperText={field.value && field.error ? field.error : ""}
                  />
                )}
              </Field>
              <ErrorMessage
                className={classes.errorComponent}
                name="email"
                component="Box"
              />
            </Box>

            <Box className={classes.textField}>
              <Field name="password">
                {({ field }: any) => (
                  <TextField
                    label="Password"
                    variant="outlined"
                    type="password"
                    {...field}
                    fullWidth
                    error={Boolean(field.value && field.error)}
                    helperText={field.value && field.error ? field.error : ""}
                  />
                )}
              </Field>
              <ErrorMessage
                className={classes.errorComponent}
                name="password"
                component="Box"
              />
            </Box>

            <Button
              className={classes.button}
              fullWidth
              type="submit"
              variant="contained"
              color="primary">
              Signup
            </Button>
          </Form>
        </Formik>
      </Box>
    </Box>
  );
};
