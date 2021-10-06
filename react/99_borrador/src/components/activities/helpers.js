import axios from 'axios'

export const createActivity = async (values) => {
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

export const updateActivity = async (values, activity, imageUpdated) => { 
  var params = {
    name: values.name,
    description: values.description,
  }
  
  if (imageUpdated)
    params = {...params, image: values.imageData} 

  try {
    const response = await axios.put(`http://ongapi.alkemy.org/api/activities/${activity.id}`, 
     params
    )
    return response
  } catch (error) {
    console.log(error)
  }                 
}