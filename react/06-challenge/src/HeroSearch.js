import { useState } from "react"
import { Formik, Form } from "formik"
import * as Yup from 'yup'
import axios from 'axios'
import HeroPreview from "./HeroPreview"
import HeroTextInput from "./HeroTextImput"

const HeroSearch = ({token, heros, herosId, setHerosId}) => {

  const [searchedHeros,setSearchedHeros] = useState([])

  async function getHeros (name) {   
    try {      
      const response = await axios.get(
        `https://superheroapi.com/api/${token}/search/${name}/`
      )
      setSearchedHeros(response.data.results) 
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
        })}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            getHeros(values.name)
            setSubmitting(false);
          }, 400);
        }}
      >
        <Form style={{marginTop:"2rem"}} >
          <p className="display-6">Search your hero:</p>  
          <HeroTextInput 
            label="Name"
            name="name"
            type="text"
            placeholder="Superman"   
          />
          <button className="btn btn-primary" type="submit">Search</button>  
        </Form>
      </Formik>
      <br/>
      {typeof heros !== 'undefined' ? (
        <div className="container">
          <div className ="row">
            {searchedHeros.map(searchedHero => (
              <div className ="col" key={searchedHero.id}>
                <HeroPreview hero={searchedHero} heros={heros} herosId={herosId} setHerosId={setHerosId} />
              </div>
            ))}
          </div>
        </div>
      ) : "No se encontraron resultados"}
    </> 
  )
}

export default HeroSearch