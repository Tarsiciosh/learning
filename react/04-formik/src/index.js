import React from "react";
import ReactDOM from "react-dom";
import { FormikProvider, useFormik } from "formik";
import "./styles.css";

// A Custom validation function. This must return an object
// which keys are symmetrical to our values/initialValues 
const validate = values => {
  const errors = {};

  if (!values.firstname) {
    errors.firstname = 'Required';
  } else if (values.firstname.length > 15){
    errors.firstname = 'Must be 15 characters or less';
  }

  if (!values.lastname) {
    errors.lastname = 'Required';
  } else if (values.lastname.length > 20){
    errors.lastname = 'Must be 20 characters or less';
  }

  if (!values.email) {
    errors.email = 'Required';
  } else if (! /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)){
    errors.email = 'Invalid email address';
  }

  return errors;
}

const SignupForm = () => {
   // Pass the useFormik() hook initial form values and a submit function that will
   // be called when the form is submitted
  const formik = useFormik({
    initialValues: { 
      firstname: "",
      lastname:"",
      email: "" 
    },
    validate,
    onSubmit: values => {
      alert(JSON.stringify(values, null, 2));
    }
  });
  return (
    <form onSubmit={formik.handleSubmit}>
      <label htmlFor="firstname">First Name</label>
      <input 
        id="firstname"
        name="firstname"
        type="text"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.firstname}
      />
      {formik.touched.firstname && formik.errors.firstname ? (
        <div>{formik.errors.firstname}</div> 
      ) : null}

      <label htmlFor="lastname">Last Name</label>
      <input 
        id="lastname"
        name="lastname"
        type="text"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.lastname}
      />
      {formik.touched.lastname && formik.errors.lastname ? ( 
        <div>{formik.errors.lastname}</div>
      ) : null}

      <label htmlFor="email">Email Address</label>
      <input
        id="email"
        name="email"
        type="email"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.email}
      />
      {formik.touched.email && formik.errors.email ? (
        <div>{formik.errors.email}</div>
      ) : null}

      <br/>
      <button type="submit">Submit</button>
    </form>
  );
};

function App() {
  return <SignupForm />;
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
