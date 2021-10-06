import React , { useState } from 'react'
import "./ActivitiesStyles.css"
import { Formik, Form, } from "formik"
import * as Yup from 'yup';
import { createActivity, updateActivity } from './helpers'

import { TextInput } from '../utils/TextInput'
import { CKEditorTextInput }  from '../utils/CKEditorTextInput'
import { ImageFileInput } from '../utils/ImageFileInput'
import { ImagePreview } from '../utils/ImagePreview'

export const ActivitiesForm = ({ activity }) =>
{
  let initialValues = {
    name: '',
    description: '',
    imageData: null
  }

  if (activity) {
    initialValues.name = activity.name
    initialValues.description = activity.description
    initialValues.imageData = activity.image 
  }

  const [imageUpdated, setImageUpdated] = useState(false)

  return (
    <Formik
      initialValues = {initialValues}
      validationSchema = {Yup.object({
        name: Yup.string()
          .required('Requerido.'),
        description: Yup.string(),
        imageData: Yup.mixed()
      })} 
      onSubmit = { async (values, { setSubmitting }) => {
        if (activity) {
          const response = await updateActivity(values, activity, imageUpdated)
          console.log(response)
          setSubmitting(false)
        } else {
          const response = await createActivity(values)
          console.log(response)
          setSubmitting(false)
        }                  
      }}
    >
      {({ values }) => (
        <Form>
          <TextInput 
            label="Nombre"
            name="name" 
            type="text"
            placeholder="Natacion para todos"
          />            
          
          <br/>

          <CKEditorTextInput
            label="Descripcion"
            name='description'
          />
        
          <br/> 

          <ImageFileInput
            label="Imagen" 
            name="imageData"
            type="file"
            setImageUpdated={setImageUpdated}
          />
          <ImagePreview url={values.imageData}/>

          <br/>

          <button type="submit">Enviar</button>
          
        </Form>
      )}
    </Formik>  
  )
}