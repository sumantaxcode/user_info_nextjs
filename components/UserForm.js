"use client";
import React, { useState } from "react";
import { Formik, Form, Field } from "formik";
import {
  Card,
  CardContent,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  TextField,
  Button,
  Grid,
  Typography,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import * as yup from "yup";
import { ErrorMessage } from "formik";
import { useRouter } from "next/navigation";

const titles = ["Mr.", "Mrs.", "Miss.", "Dr."];
const genders = ["Male", "Female", "Other"];

const useStyles = makeStyles((theme) => ({
  cardContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    minHeight: "100vh",
  },
  card: {
    width: "80%",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
  },
  formField: {
    margin: "8px 0", // Add margin to form fields (top and bottom)
  },
}));

const validationSchema = yup.object().shape({
  name: yup.string().required("Name is required"),
  age: yup
    .number()
    .required("Age is required")
    .positive("Age must be a positive number"),
  gender: yup.string().required("Gender is required"),
  phoneNumber: yup
    .string()
    .required("Phone Number is required")
    .matches(
      /^[0-9]{10}$/, // Modify the regular expression to match your phone number format
      "Invalid phone number"
    ),
  email: yup
    .string()
    .required("Email is required")
    .email("Invalid email format"),
});
const UserForm = () => {
  const [submitting, setIsSubmitting] = useState(false);
  const router = useRouter();

  const classes = useStyles();
  const createUser = async (data) => {
    setIsSubmitting(true);

    try {
      const response = await fetch("/api/user/new", {
        method: "POST",
        body: JSON.stringify(data),
      });
      if (response.ok) {
        const responseData = await response.json();
        if (responseData?._id) {
          router.push(`/profile/${responseData?._id}`);
        }
      }
    } catch (error) {
      console.log(error);
    } finally {
      setIsSubmitting(false);
    }
  };
  return (
    <div className={classes.cardContainer}>
      <Card variant="outlined" className={classes.card}>
        <CardContent>
          <Typography variant="h6" component="div" gutterBottom>
            User Information
          </Typography>
          <Formik
            initialValues={{
              name: "",
              title: "",
              age: "",
              gender: "",
              phoneNumber: "",
              email: "",
              address: "",
            }}
            validationSchema={validationSchema}
            onSubmit={(values) => {
              // Handle form submission here
              console.log(values);
              createUser(values);
            }}
          >
            {({ errors, touched }) => (
              <Form>
                <Grid container spacing={2}>
                  <Grid item xs={12} className={classes.formField}>
                    <Field
                      as={TextField}
                      fullWidth
                      name="name"
                      label="Name"
                      error={touched.name && !!errors.name}
                      helperText={<ErrorMessage name="name" />}
                    />
                  </Grid>
                  <Grid item xs={12} className={classes.formField}>
                    <FormControl fullWidth>
                      <InputLabel htmlFor="title">Title</InputLabel>
                      <Field
                        as={Select}
                        name="title"
                        label="Title"
                        id="title"
                        fullWidth
                      >
                        {titles.map((title) => (
                          <MenuItem key={title} value={title}>
                            {title}
                          </MenuItem>
                        ))}
                      </Field>
                    </FormControl>
                  </Grid>
                  <Grid item xs={6} className={classes.formField}>
                    <Field
                      as={TextField}
                      fullWidth
                      name="age"
                      label="Age"
                      error={touched.age && !!errors.age}
                      helperText={<ErrorMessage name="age" />}
                    />
                  </Grid>
                  <Grid item xs={6} className={classes.formField}>
                    <FormControl fullWidth>
                      <InputLabel htmlFor="gender">Gender</InputLabel>
                      <Field
                        as={Select}
                        name="gender"
                        label="Gender"
                        id="gender"
                        fullWidth
                      >
                        {genders.map((gender) => (
                          <MenuItem key={gender} value={gender}>
                            {gender}
                          </MenuItem>
                        ))}
                      </Field>
                    </FormControl>
                  </Grid>
                  <Grid item xs={12} className={classes.formField}>
                    <Field
                      as={TextField}
                      fullWidth
                      name="phoneNumber"
                      label="Phone Number"
                      error={touched.phoneNumber && !!errors.phoneNumber}
                      helperText={<ErrorMessage name="phoneNumber" />}
                    />
                  </Grid>
                  <Grid item xs={12} className={classes.formField}>
                    <Field
                      as={TextField}
                      fullWidth
                      name="email"
                      label="Email"
                      error={touched.email && !!errors.email}
                      helperText={<ErrorMessage name="email" />}
                    />
                  </Grid>
                  <Grid item xs={12} className={classes.formField}>
                    <Field
                      as={TextField}
                      fullWidth
                      name="address"
                      label="Address"
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <Button type="submit" variant="contained" color="primary">
                      Submit
                    </Button>
                  </Grid>
                </Grid>
              </Form>
            )}
          </Formik>
        </CardContent>
      </Card>
    </div>
  );
};

export default UserForm;
