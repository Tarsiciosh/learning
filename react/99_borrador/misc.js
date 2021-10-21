

export const getToken = () => {
  const token = JSON.parse(localStorage.getItem('token'))

  const headerAuthorization = {
    "Authorization" : `Bearer ${token}`
  }

  return headerAuthorization
}


// (/services/activities.js)

export const createActivity = async (values) => {
  const body = {
    name: values.name,
    description: values.description,
    image: values.imageData
  }
  return postOngApi('activities', body)
}

export const updateActivity = async (values, imageUpdated) => {
  var body = {
    name: values.name,
    description: values.description,
  }
  
  if (imageUpdated) //only if image must be updated!
    body = {...body, image: values.imageData} 

  const auth = getToken()

  return putOngApi ('activities', values.id , body, auth)
}   
