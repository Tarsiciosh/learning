import React, { useEffect, useState } from 'react'
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from 'yup';
//import axios from 'axios'
import "./styles.css"
import { CKEditor } from '@ckeditor/ckeditor5-react'
import ClassicEditor from '@ckeditor/ckeditor5-build-classic'

export const ActivitiesForm = ({ activity }) =>
{
  return (
    <Formik
      initialValues={{ name: '', description: '', image: null }}
      validationSchema={Yup.object({
        name: Yup.string()
          .required('Requerido.'),
        description: Yup.string(),
        image: Yup.string()
          .matches(/(.jpg|.png)/i,'La imagen debe ser .jpg o .png')
          .required('Requerido.')
      })} 
      onSubmit={(values, { setSubmitting }) =>{
        alert(JSON.stringify(
          {
            name: values.image.name,
          }, null, 2))
        setSubmitting(false)
        // todo - make the POST request with axios
      }}

      render={({ setFieldValue, values}) => {
        return (
          <>
            <Form>
            <label htmlFor="name">Nombre</label>
            <Field name="name" type='text' />
            <ErrorMessage name='name'/>

            <br/>

            <label htmlFor="description">Descripcion</label>
            {/*<Field name="description" type="text" />*/}
            <CKEditor
              editor={ ClassicEditor }
              data="<p>Hello from CKEditor 5!</p>"
              onReady={ editor => {
                // You can store the "editor" and use when it is needed.
                console.log('Editor is ready to use!', editor)
              }}
              onChange={(event,editor)=>{
                const data = editor.getData()
                console.log({ event, editor, data})
              }}
              onBlur={(event,editor) => {
                console.log( 'Blur', editor)
              }}
              onFocus={(event,editor)=>{
                console.log('Focus', editor)
              }}
            />

            <ErrorMessage name="description" />

            <br/>

            <label htmlFor="image">Image</label>
            <input id="image" name="image" type="file" onChange={(e) => {
              setFieldValue("image", e.currentTarget.files[0])
              console.log('image file:', e.currentTarget.files[0])  
            }} />
            <ErrorMessage name='image'/>

            <br/>

            <button type="submit">Submit</button>

            <Thumb imageFile={values.image} />

          </Form>
          </>
        )
      }}
    >
      
    </Formik>  
  )
}

const Thumb = ({ imageFile }) => {
  let reader = new FileReader()
  const [imageUrl, setImageUrl] = useState('')


  useEffect (()=>{
    if (imageFile) {
      reader.onloadend = () => {
        setImageUrl(reader.result)
      }
      reader.readAsDataURL(imageFile)
    }  
  },) 

  if (!imageFile) {return null}


  return (
    <img alt='foto' src={imageUrl} style={{
      display: "block",
      marginLeft: "auto",
      marginRight: "auto",
      border: "1px solid #ddd",
      borderRadius: "4px",
      padding: "5px",
      align: "center",
      width: "80%",
      height: "auto"
    }} />
  )
}

// let reader = FileReader()


import React, { useEffect, useState } from 'react'
import { Formik, Field, Form, ErrorMessage, useField } from "formik";
import * as Yup from 'yup';
import axios from 'axios'
import "./ActivitiesStyles.css"
import { CKEditor } from '@ckeditor/ckeditor5-react'
import ClassicEditor from '@ckeditor/ckeditor5-build-classic'


const TextInput = ({ label, ...props }) => {
  const [field, meta] = useField(props)
  return (
    <>
      <label htmlFor={props.name}>{label}</label>
      <input {...field} {...props}/>
      {meta.touched && meta.error ? (
        <span>{meta.error}</span>
      ): null}
    </>
  )
}

const CKEditorText = ({ label, props }) => {
  const [field, meta] = useField(props)
  return (
    <>
      <label htmlFor="description">Descripcion</label>
        {/*<Field name="description" type="text" />*/}
        <CKEditor
          name='description'
          editor={ ClassicEditor }
          data="<p>Ejemplo de texto</p>"
          onReady={ editor => {
            // You can store the "editor" and use when it is needed.
            console.log('Editor is ready to use!', editor)
          }}
          onChange={(event,editor)=>{
            const data = editor.getData()
            setFieldValue("description",data)
            console.log({ event, editor, data})
          }}
          onBlur={(event,editor) => {
            console.log( 'Blur', editor)
          }}
          onFocus={(event,editor)=>{
            console.log('Focus', editor)
          }}
          />
    </>
  )
}
 
export const ActivitiesForm = ({ activity }) =>
{
  return (
    <Formik
      initialValues={{ name: '', description: '', image: null }}
      validationSchema={Yup.object({
        name: Yup.string()
          .required('Requerido.'),
        description: Yup.string(),
        image: Yup.mixed()
          //.matches(/(.jpg|.png)/i,'La imagen debe ser .jpg o .png')
          .required('Requerido.')
          .nullable()
      })} 
      onSubmit={async (values, { setSubmitting }) =>{
        alert(JSON.stringify(
          {
            name: values.name,
            description: values.description,
          }, null, 2))
        console.log("values.image:", values.image)
        try {
          const response = await axios.put('http://ongapi.alkemy.org/api/activities/645', {
            name: values.name,
            description: values.description,
            image: values.image
          })
          console.log(response)
        } catch (error) {
          console.log(error)
        }
        setSubmitting(false)
        // todo - make the POST request with axios
      }}
    >
      {({ setFieldValue, values}) => ( 
        <Form>
          <TextInput 
            label="Nombre"
            name="name" 
            type='text'
            placeholder="Actividad"
          />

          <br/>             
          
          <label htmlFor="description">Descripcion</label>
          {/*<Field name="description" type="text" />*/}
          <CKEditor
            name='description'
            editor={ ClassicEditor }
            data="<p>Ejemplo de texto</p>"
            onReady={ editor => {
              // You can store the "editor" and use when it is needed.
              console.log('Editor is ready to use!', editor)
            }}
            onChange={(event,editor)=>{
              const data = editor.getData()
              setFieldValue("description",data)
              console.log({ event, editor, data})
            }}
            onBlur={(event,editor) => {
              console.log( 'Blur', editor)
            }}
            onFocus={(event,editor)=>{
              console.log('Focus', editor)
            }}
          />

          <label htmlFor="image">Image</label>
          <input id="image" name="image" type="file" onChange={(e) => {
            const reader = new FileReader()
            reader.onloadend = () => {    
              setFieldValue("image", reader.result)
              console.log(reader.result)
            }
            reader.readAsDataURL(e.currentTarget.files[0])
          }} />
          <ErrorMessage name='image'/>

          <br/>
          <Thumb imageUrl={values.image} />

          <button type="submit">Submit</button>
          
        </Form>
       )}
    </Formik>  
  )
}
const Thumb = ({ imageUrl }) => {

  if (!imageUrl) {return null}

  return (
    <img alt='foto' src={imageUrl} style={{
      display: "block",
      marginLeft: "auto",
      marginRight: "auto",
      border: "1px solid #ddd",
      borderRadius: "4px",
      padding: "5px",
      align: "center",
      width: "60%",
      height: "auto"
    }} />
  )
}





////////////////////////////////////////////////////////////////

import React from 'react'
import { Formik, Field, Form, ErrorMessage, useField } from "formik";
import * as Yup from 'yup';
import axios from 'axios'
import "./ActivitiesStyles.css"
import { CKEditor } from '@ckeditor/ckeditor5-react'
import ClassicEditor from '@ckeditor/ckeditor5-build-classic'


const TextInput = ({ label, ...props }) => {
  const [field, meta] = useField(props)
  return (
    <>
      <label htmlFor={props.name}>{label}</label>
      <input {...field} {...props}/>
      {meta.touched && meta.error ? (
        <span>{meta.error}</span>
      ): null}
    </>
  )
}

const CKEditorTextInput = ({ label, ...props }) => {
  const [field, helpers] = useField(props)

  const { setValue } = helpers

  return (
    <>
      <label htmlFor={props.name}>{label}</label> 
      <CKEditor
        {...field}
        editor={ ClassicEditor }
        data="<p>Ejemplo de texto</p>"   
        onChange={(event,editor)=>{
          const data = editor.getData()
          setValue(data)
          //console.log({ event, editor, data})
        }}     
      />
    </>
  )
}
 
export const ActivitiesForm = ({ activity }) =>
{
  return (
    <Formik
      initialValues = {{ 
        name: '', 
        description: '', 
        image: null 
      }}
      validationSchema = {Yup.object({
        name: Yup.string()
          .required('Requerido.'),
        description: Yup.string(),
        image: Yup.mixed()
          //.matches(/(.jpg|.png)/i,'La imagen debe ser .jpg o .png')
          .required('Requerido.')
          .nullable()
      })} 
      onSubmit={async (values, { setSubmitting }) =>{
        alert(JSON.stringify(
          {
            name: values.name,
            description: values.description,
          }, null, 2))
        try {
          const response = await axios.put('http://ongapi.alkemy.org/api/activities/645', {
            name: values.name,
            description: values.description,
            image: values.image
          })
          console.log(response)
        } catch (error) {
          console.log(error)
        }
        setSubmitting(false)
      }}
    >
      {({ setFieldValue, values}) => ( 
        <Form>
          <TextInput 
            label="Nombre"
            name="name" 
            type='text'
            placeholder="Actividad"
          />

          <br/>             
          
          <CKEditorTextInput
            label="Descripcion"
            name='description' 
          />

          <label htmlFor="image">Image</label>
          <input id="image" name="image" type="file" onChange={(e) => {
              const reader = new FileReader()
              reader.onloadend = () => {    
                setFieldValue("image", reader.result)
                console.log(reader.result)
              }
              reader.readAsDataURL(e.currentTarget.files[0])
            }} 
          />
          <ErrorMessage name='image'/>

          <Thumb imageUrl={values.image} />

          <button type="submit">Submit</button>
          
        </Form>
       )}
    </Formik>  
  )
}

const Thumb = ({ imageUrl }) => {

  if (!imageUrl) {return null}

  return (
    <img alt='foto' src={imageUrl} style={{
      display: "block",
      marginLeft: "auto",
      marginRight: "auto",
      border: "1px solid #ddd",
      borderRadius: "4px",
      padding: "5px",
      align: "center",
      width: "60%",
      height: "auto"
    }} />
  )
}


/////////////

git commit -m "change raw CKEditor to CKEditorTextInput (formik)"


/////////////////////// 22222222222


import React from 'react'
import { Formik, Form, useField } from "formik";
import * as Yup from 'yup';
import "./ActivitiesStyles.css"
import { CKEditor } from '@ckeditor/ckeditor5-react'
import ClassicEditor from '@ckeditor/ckeditor5-build-classic'

export const ActivitiesForm = ({ activity }) =>
{
  return (
    <Formik
      initialValues = {{ 
        name: '', 
        description: '', 
        imageFile: '' 
      }}
      validationSchema = {Yup.object({
        name: Yup.string()
          .required('Requerido.'),
        description: Yup.string(),
        imageFile: Yup.string()
          .matches(/(.jpg|.png)/i,'La imagen debe ser .jpg o .png')
          .required('Requerido.')
      })} 
      onSubmit={async (values, { setSubmitting }) =>{
        alert(JSON.stringify(
          {
            name: values.name,
            description: values.description,
            imageFile: values.imageFile
          }, null, 2))
        setSubmitting(false)
      }}
    >

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

        <TextInput
          label="Imagen"
          name="imageFile"
          type="text"
        />

        <br/>

        <button type="submit">Submit</button>
        
      </Form>
       
    </Formik>  
  )
}

const TextInput = ({ label, ...props }) => {
  const [field, meta] = useField(props)
  return (
    <>
      <label htmlFor={props.name}>{label}</label>
      <input {...field} {...props}/>
      {meta.touched && meta.error ? (
        <span>{meta.error}</span>
      ): null}
    </>
  )
}

const CKEditorTextInput = ({ label, ...props }) => {
  const [field, helpers] = useField(props)

  const { setValue } = helpers

  return (
    <>
      <label htmlFor={props.name}>{label}</label> 
      <CKEditor
        {...field}
        editor={ ClassicEditor }
        data="<p>Ejemplo de texto</p>"   
        onChange={(event,editor)=>{
          const data = editor.getData()
          setValue(data)
          console.log({ event, editor, data})
        }}     
      />
    </>
  )
}

///////////////////////3333333

import React from 'react'
import { Formik, Form, useField } from "formik";
import * as Yup from 'yup';
import "./ActivitiesStyles.css"
import { CKEditor } from '@ckeditor/ckeditor5-react'
import ClassicEditor from '@ckeditor/ckeditor5-build-classic'

export const ActivitiesForm = ({ activity }) =>
{
  return (
    <Formik
      initialValues = {{ 
        name: '', 
        description: '', 
        imageFile: '' 
      }}
      validationSchema = {Yup.object({
        name: Yup.string()
          .required('Requerido.'),
        description: Yup.string(),
        imageFile: Yup.string()
          .matches(/(.jpg|.png)/i,'La imagen debe ser .jpg o .png')
          .required('Requerido.')
      })} 
      onSubmit={async (values, { setSubmitting }) =>{
        alert(JSON.stringify(
          {
            name: values.name,
            description: values.description,
            imageFile: values.imageFile
          }, null, 2))
        setSubmitting(false)
      }}
    >

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

        <TextInput
          label="Imagen"
          name="imageFile"
          type="text"
        />

        <br/>

        <button type="submit">Submit</button>
        
      </Form>
       
    </Formik>  
  )
}

const TextInput = ({ label, ...props }) => {
  const [field, meta] = useField(props)
  return (
    <>
      <label htmlFor={props.name}>{label}</label>
      <input {...field} {...props}/>
      {meta.touched && meta.error ? (
        <span>{meta.error}</span>
      ): null}
    </>
  )
}

const CKEditorTextInput = ({ label, ...props }) => {
  const [field, helpers] = useField(props)

  const { setValue } = helpers

  return (
    <>
      <label htmlFor={props.name}>{label}</label> 
      <CKEditor
        {...field}
        editor={ ClassicEditor }
        data="<p>Ejemplo de texto</p>"
        onReady={ editor => {
          // You can store the "editor" and use when it is needed.
          //const data = editor.getData()
          //setValue(data)
          //console.log('Editor is ready to use!', editor)
        }}   
        onChange={(event,editor)=>{
          const data = editor.getData()
          setValue(data)
          //console.log({ event, editor, data})
        }}
        onBlur={(event,editor) => {
          //console.log( 'Blur', editor)
        }}
        onFocus={(event,editor)=>{
          //console.log('Focus', editor)
        }}     
      />
    </>
  )
}


/////444

const ImageFileInput = ({ label, ...props }) => {
  const [field, meta, helpers] = useField(props)

  const { setValue } = helpers

  const [fileUrl, setFileUrl] = useState()
  const [errorMessage, setErrorMessage] = useState('')

  const handleOnChange = (e) => {
    const reader = new FileReader()
    reader.onloadend = () => {
      setFileUrl(reader.result)
      setValue(file.name)
    }
    const file = e.currentTarget.files[0]
    if (validateFileExtention(file.name)) {
      reader.readAsDataURL(file)
      setErrorMessage('')
    } else {
      setErrorMessage('tiene que ser .jpg o .png')
    }
  }

  const validateFileExtention = (fileName) =>{
    if ( /(.jpg|.png)/i.test(fileName))
      return true
    return false
  }

  return (
    <>
      <label htmlFor={props.name}>{label}</label>
      <input 
        {...props}
        onChange={handleOnChange} 
      />
      {<span>{errorMessage}</span>}

      <ImagePreview url={fileUrl}/>
    </>
  )
}

const ImagePreview = ({ url }) => {

  if (!url) {return null}

  return (
    <img alt='imagen' src={url} style={{
      display: "block",
      marginLeft: "auto",
      marginRight: "auto",
      border: "1px solid #ddd",
      borderRadius: "4px",
      padding: "5px",
      align: "center",
      width: "60%",
      height: "auto"
    }} />
  )
}



else {
  try {
    const response = await axios.post(`http://ongapi.alkemy.org/api/activities`, {
    name: values.name,
    description: values.description,
    image: values.image
  })
  console.log(response)
  } catch (error) {
    console.log(error)
  }
}

activity={{
  name: 'prueba nombre',
  description:'<p>prueba descripcion</p>',
  imageUrl: "http://ongapi.alkemy.org/storage/L8USV94uSm.png"
}}



activity={{
  id: '645',
  name: 'prueba nombre',
  description:'<p>prueba descripcion</p>',
  image: "http://ongapi.alkemy.org/storage/L8USV94uSm.png"
}}



//////// 555555
import React , { useState } from 'react'
import { Formik, Form, useField } from "formik";
import * as Yup from 'yup';
import "./ActivitiesStyles.css"
import { CKEditor } from '@ckeditor/ckeditor5-react'
import ClassicEditor from '@ckeditor/ckeditor5-build-classic'
import axios from 'axios'

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
      onSubmit={ async (values, { setSubmitting }) =>{
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

const createActivity = async (values) => {
  try {
    const response = await axios.post(`http://ongapi.alkemy.org/api/activities`, {
      name: values.name,
      description: values.description,
      image: values.imageData
    })
    return response
  } catch (error) {
    console.log(error)
  }
}

const updateActivity = async (values, activity, imageUpdated) => {
 
  let imageData = null
  
  if (imageUpdated)
    imageData = values.imageData
  else
    imageData = await toDataUrl(values.imageData)
  
  try {
    const response = await axios.put(`http://ongapi.alkemy.org/api/activities/${activity.id}`, {
      name: values.name,
      description: values.description,
      image: imageData
    })
    return response
  } catch (error) {
  console.log(error)
  }                 
}

const toDataUrl = async (url) => {
  const xhr = new XMLHttpRequest()
  xhr.onload = () => {
    const reader = new FileReader()
    reader.onloadend = () => {
      return reader.result
    }  
    reader.readAsDataURL(xhr.response)
  }
  xhr.open('GET', url)
  xhr.responseType = 'blob'
  xhr.send()     
}

const TextInput = ({ label, ...props }) => {
  const [field, meta] = useField(props)
  return (
    <>
      <label htmlFor={props.name}>{label}</label>
      <input {...field} {...props}/>
      {meta.touched && meta.error ? (
        <span>{meta.error}</span>
      ): null}
    </>
  )
}

const CKEditorTextInput = ({ label, ...props }) => {
  const [field, meta, helpers] = useField(props)

  const { value } = meta
  const { setValue } = helpers

  return (
    <>
      <label htmlFor={props.name}>{label}</label> 
      <CKEditor
        {...field}
        editor={ ClassicEditor }
        data={ value }
        onReady={ editor => {
          // You can store the "editor" and use when it is needed.
          const data = editor.getData()
          setValue(data)
          //console.log('Editor is ready to use!', editor)
        }}   
        onChange={(event,editor)=>{
          const data = editor.getData()
          setValue(data)
          //console.log({ event, editor, data})
        }}
        onBlur={(event,editor) => {
          //console.log( 'Blur', editor)
        }}
        onFocus={(event,editor)=>{
          //console.log('Focus', editor)
        }}     
      />
    </>
  )
}

const ImageFileInput = ({ label, setImageUpdated, ...props }) => {
  const [field, meta, helpers] = useField(props)

  const { setValue } = helpers

  const [errorMessage, setErrorMessage] = useState('')

  const handleOnChange = (e) => {
    const reader = new FileReader()
    reader.onloadend = () => {
      setValue(reader.result)
      setImageUpdated(true)
    }
    const file = e.currentTarget.files[0]
    if (validateFileExtension(file.name)) {
      reader.readAsDataURL(file)
      setErrorMessage('')
    } else {
      setErrorMessage('Tiene que ser .jpg o .png')
    }
  }

  const validateFileExtension = (fileName) =>{
    if ( /(.jpg|.png)/i.test(fileName))
      return true
    return false
  }

  return (
    <>
      <label htmlFor={props.name}>{label}</label>
      <input 
        {...props}
        onChange={handleOnChange} 
      />
      {<span>{errorMessage}</span>}
    </>
  )
}

const ImagePreview = ({ url }) => {

  if (!url) {return null}

  return (
    <img alt='imagen' src={url} />
  )
}



//////
var imageData 
  
if (imageUpdated) {
  imageData = values.imageData
} else {
  console.log('value.imageData', values.imageData)
  imageData = await toDataUrl(values.imageData)
  console.log('imageData', imageData)
}


Summay

adds image field

adds text field with CKEditor

load info from activity prop if it is present

set blank field if activity prop is not present

create activity when submit pressed (when no activity prop present)

update activity when submit pressed (when activity prop present)

Evidence:




value={{
  id: '248',
  name: 'prueba nombre',
  description:'<p>prueba descripcion</p>',
  image: "http://ongapi.alkemy.org/storage/pH49qdbKVN.jpeg"
}}