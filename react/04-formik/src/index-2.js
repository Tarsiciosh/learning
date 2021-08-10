import React from "react";
import ReactDOM from "react-dom";
import { useFormik } from "formik";
import "./styles.css";
import * as Yup from 'yup';



const SignupForm = () => {
   // Pass the useFormik() hook initial form values and a submit function that will
   // be called when the form is submitted
  const formik = useFormik({
    initialValues: { 
      firstname: "",
      lastname:"",
      email: "" 
    },
    validationSchema: Yup.object({
      firstname: Yup.string()
        .max(15, 'Must be 15 characters or less')
        .required('Required'),
      lastname: Yup.string()
        .max(20,'Must be 20 characters or less')
        .required('Required'),
      email: Yup.string()
        .email('Invalid email address')
        .required('Required'),
    }),
    onSubmit: values => {
      alert(JSON.stringify(values, null, 2));
    }
  });
  return (
    <form onSubmit={formik.handleSubmit}>
      <label htmlFor="firstname">First Name</label>
      <input 
        id="firstname"
        type="text"
        {...formik.getFieldProps('firstname')}
      />
      {formik.touched.firstname && formik.errors.firstname ? (
        <div>{formik.errors.firstname}</div> 
      ) : null}

      <label htmlFor="lastname">Last Name</label>
      <input 
        id="lastname"
        type="text"
        {...formik.getFieldProps('lastname')}
      />
      {formik.touched.lastname && formik.errors.lastname ? ( 
        <div>{formik.errors.lastname}</div>
      ) : null}

      <label htmlFor="email">Email Address</label>
      <input
        id="email"
        type="email"
        {...formik.getFieldProps('email')}
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
