import { Formik, Form, useField} from "formik";
import { useState } from "react";
import * as Yup from 'yup';
import axios from 'axios'
import HeroPreview from "./HeroPreview";

const MyTextInput = ({ label, ...props }) => { 
  // useField() returns [formik. getFieldProps(), formik.getFieldMeta()]
  // which we can spread on <input>. We can use field meta to show an error 
  // message if the field is invalid and it has been touched (i.e. visited)
  const [field, meta] = useField(props); //tar - inside props we have props.name 
  return (
    <>
      <div className="mb-3">
        {/*<label className="form-label" htmlFor={props.id || props.name}>{label}</label>*/}
        <input className="form-control" {...field} {...props}/> 
        {meta.touched && meta.error ? (
          <div className="form-text">{meta.error}</div>
        ) : null }
      </div>
    </>
  ); // {...field} {...props} -> tar - in props we have the 'placeHolder' for example
};

const HeroSearch = ({token}) => {

  const [heros,setHeros] = useState([])

  async function getHeros (name) {   
    try {      
      const response = await axios.get(
        `https://superheroapi.com/api/${token}/search/${name}/`
      )
      const results = response.data.results 
      setHeros(results)      
    } catch (error){
      console.error(error)
    }
  }

  return (
    <>
      <Formik
        initialValues={{ 
          name: ''
        }}
        validationSchema={Yup.object({
          name: Yup.string()
            .max(20, 'Must be 20 characters or less')
            .required('Required')   
        })}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            //alert(JSON.stringify(values.name, null, 2));
            getHeros(values.name)
            setSubmitting(false);
          }, 400);
        }}
      >
        <Form style={{marginTop:"2rem"}} >
          <p className="display-6">Search your hero:</p>  
          <MyTextInput 
            label="Name"
            name="name"
            type="text"
            placeholder="Superman"   
          />
          <button className="btn btn-primary" type="submit">Search</button>  
        </Form>
      </Formik>
      <br/>
      <div className="container">
        <div className ="row">
        { heros.map(hero => (
            <div className ="col" key={hero.id}>
              <HeroPreview hero={hero} />
            </div>
        ))}
        </div>
      </div>
    </> 
  )
}

export default HeroSearch