import React, { useState } from "react";
import { Formik, FormikHelpers, Form, FormikProps, Field } from "formik";
import * as yup from "yup";
import FormikField from "../../common/forms/FormikField";
import { Alert } from "@mui/material";
import RespButton from "../../common/RespButton";
import axios from "axios";

interface FormValues {
  name: string;
  email: string;
  subject: string;
  details: string;
}

const schema = yup.object({
  name: yup.string().required("Name is required"),
  email: yup
    .string()
    .email("Enter a valid email")
    .required("Email is required"),
  subject: yup.string().default("<no-subject>"),
  details: yup.string().required("Please provide details of your issue"),
});

export default function ContactForm() {
  const [showAlert, setShow] = useState(false);
  return (
    <Formik
      initialValues={{ name: "", email: "", subject: "", details: "" }}
      onSubmit={(
        values: FormValues,
        formikHelpers: FormikHelpers<FormValues>
      ) => {
        axios.post("/contact", values);
        setShow(true);
        formikHelpers.setSubmitting(false);
      }}
      validationSchema={schema}
    >
      {(formikProps: FormikProps<FormValues>) => (
        <Form className="w-full max-w-md flex flex-col gap-y-4 mt-20">
          <Field
            name="name"
            variant="filled"
            size="medium"
            label="Name"
            component={FormikField}
          />
          <Field
            name="email"
            variant="filled"
            size="medium"
            label="Email Address"
            component={FormikField}
          />
          <Field
            name="subject"
            variant="filled"
            size="medium"
            label="Subject"
            component={FormikField}
          />
          <Field
            name="details"
            variant="filled"
            size="medium"
            label="Details"
            multiline
            component={FormikField}
          />
          <RespButton variant="contained" size="large" type="submit">
            submit
          </RespButton>
          {showAlert && (
            <Alert variant="filled" severity="success">
              Submission successful! We'll get back to you as soon as we can
            </Alert>
          )}
        </Form>
      )}
    </Formik>
  );
}
