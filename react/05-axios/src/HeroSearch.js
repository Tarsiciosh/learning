import React from "react";
import { Formik, Form, useField} from "formik";
//import "./styles.css";
import * as Yup from 'yup';

const MyTextInput = ({ label, ...props }) => { 
  // useField() returns [formik. getFieldProps(), formik.getFieldMeta()]
  // which we can spread on <input>. We can use field meta to show an error 
  // message if the field is invalid and it has been touched (i.e. visited)
  const [field, meta] = useField(props); //tar - inside props we have props.name 
  return (
    <>
      <label htmlFor={props.id || props.name}>{label}</label>
      <input {...field} {...props}/> 
      {meta.touched && meta.error ? (
        <div>{meta.error}</div>
      ) : null }
    </>
  ); // {...field} {...props} -> tar - in props we have the 'placeHolder' for example
};

const MyCheckbox = ({children, ...props}) => {
// React treats radios and checkbox inputs differently than other input types,
// Formik does it too! When you specify 'type' to useField(), it will 
// return the correct bag of props for you -- a 'checked' prop will be included
// in 'field' alongside 'name', 'value', 'onChange', and 'onBlur'
const [field, meta] = useField({...props, type:'checkbox'});
  return (
    <div>
      <label > 
        <input type="checkbox" {...field } {...props} />
        {children}
      </label>
      {meta.touched && meta.error ? (
        <div className="error"> {meta.error}</div>
      ) : null }
    </div>
  )
}

function MySelect ({ label, ...props }) { //another way to declare Components
  const [field, meta] = useField(props);
  return(
    <div>
      <label htmlFor={props.id || props.name}> {props.label} </label>  {/* this is a comment! */}  
      <select {...field} {...props} />
      {meta.touch && meta.error ? (
        <div className="error">{meta.error}</div>
      ) : null}
    </div>
  );
};

const SignupForm = () => {
  return (
    <Formik
      initialValues={{ 
        firstName: '', 
        lastName: '', 
        email: '',
        acceptedTerms: false, //added for our checkbox
        jobType: '', //added for our select
      }}
      validationSchema={Yup.object({
        firstName: Yup.string()
          .max(15, 'Must be 15 characters or less')
          .required('Required'),
        lastName: Yup.string()
          .max(20, 'Must be 20 characters or less')
          .required('Required'),
        email: Yup.string()
          .email('Invalid email address')
          .required('Required'),
        acceptedTerms: Yup.boolean()
          .required('Required')
          .oneOf([true], 'You must accept the terms and conditions.'),
        jobType: Yup.string()
          .oneOf(
            ['designer', 'developer', 'product', 'other'],
            'Invalid Job Type' 
          )
          .required('Required'),
      })}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
        }, 400);
      }}
    >
      <Form>
        <MyTextInput 
          label="First Name" 
          name="firstName"
          type="text"
          placeHolder="John"   
        />

        <MyTextInput 
          label="Last Name"
          name="lastName"
          type="text"
          placeHolder="Appleseed"   
        />

        <MyTextInput 
          label="Email Address"
          name="email"
          type="email"
          placeHolder="john@me.com"   
        />

        <MySelect label="Job Type" name="jobType">
          <option value="">Select a job type</option>
          <option value="designer">Designer</option>
          <option value="developer">Developer</option>
          <option value="product">Product Manager</option>
          <option value="other">Other</option>
        </MySelect>

        <MyCheckbox name="acceptedTerms">
          I accept the terms and conditions
        </MyCheckbox>
       
        <br/>
        <button type="submit">Submit</button>
      </Form>
    </Formik>
  );
};

export default SignupForm
