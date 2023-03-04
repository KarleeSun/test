import { Box, Typography } from "@mui/material";
import { MailOutline, LockOutlined } from "@mui/icons-material";
import { Link } from "react-router-dom";
import FormikField from "../../../common/forms/FormikField";
import * as yup from "yup";
import { Field, Form, Formik, FormikHelpers, FormikProps } from "formik";
import axios from "axios";
import RespButton from "../../../common/RespButton";

type LoginType = "Admin" | "Student" | "Provider";

interface LoginProps {
  type: LoginType;
  loginEndpoint: string;
}

interface FormValues {
  identifier: string;
  password: string;
}

const schema = yup.object({
  identifier: yup.string().required("Email/Mobile number is required"),
  password: yup.string().required("Please enter your password"),
});

export default function LoginBase({ type, loginEndpoint }: LoginProps) {
  return (
    <Box className="flex flex-col justify-around items-center py-20 h-full w-full">
      <Typography
        variant="h4"
        className=""
        sx={{ fontWeight: "bold", color: "#00345d" }}
      >
        {type + " Login"}
      </Typography>

      <Formik
        initialValues={{ identifier: "", password: "" }}
        onSubmit={(
          values: FormValues,
          formikHelpers: FormikHelpers<FormValues>
        ) => {
          axios.post(loginEndpoint, values);
          formikHelpers.setSubmitting(false);
        }}
        validationSchema={schema}
      >
        {(formikProps: FormikProps<FormValues>) => (
          <Form>
            <Box className="flex items-baseline gap-x-2 h-20">
              <MailOutline fontSize="medium" />
              <Field
                name="identifier"
                variant="filled"
                size="medium"
                label="Email/Telephone"
                component={FormikField}
              ></Field>
            </Box>
            <Box className="flex items-center gap-x-2 h-20">
              <LockOutlined fontSize="medium" />
              <Field
                name="password"
                variant="filled"
                size="medium"
                label="Password"
                component={FormikField}
              ></Field>
            </Box>
            <Box className="mt-12 gap-y-4 flex flex-col">
              <RespButton
                variant="contained"
                size="large"
                type="submit"
                className="w-full"
              >
                submit
              </RespButton>
              <RespButton
                component={Link}
                to="/login"
                variant="contained"
                size="large"
                className="w-full"
              >
                back
              </RespButton>
            </Box>
          </Form>
        )}
      </Formik>
    </Box>
  );
}
