import { Formik, Form, Field, ErrorMessage } from "formik";
import { TextField, Button } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { login, reset } from "../../features/auth/authSlice";
import { Box } from "../../utils/uiCore";
import { useStyles } from "./style";
import { signInValidation } from "../../utils/formikValidation";
import { Dispatch, useEffect } from "react";
import { paths } from "../../path/paths";
import { toast } from "react-toastify";

export const Login = () => {
  const classes = useStyles();
  const navigate = useNavigate();
  const dispatch: Dispatch<any> = useDispatch();

  const { user, isLoading, isError, isSuccess, message } = useSelector(
    (state: any) => state?.auth
  );

  const handleSubmit = async (values: any) => {
    dispatch(login(values));
  };

  useEffect(() => {
    if (user || isSuccess) {
      navigate(paths.home);
    }
    if (isError) {
      toast.error(message);
    }

    dispatch(reset())
  }, [user, isLoading, isError, isSuccess, message]);

  return (
    <Box className={classes.registerMain}>
      <Box className={classes.signupCard}>
        <Box className={classes.signupHeadding}>Login</Box>
        <Formik
          initialValues={ {email: "", password: "" }}
          validationSchema={signInValidation}
          onSubmit={handleSubmit}>
          <Form>

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
              SignIn
            </Button>
          </Form>
        </Formik>
      </Box>
    </Box>
  );
};
