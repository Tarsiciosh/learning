import React from 'react'
import axios from 'axios'

//const token = '102141048846123';

const TestAxios = () => {

  async function handleClick () {
    console.log('before making the request')
    try {      
      const response = await axios.get('https://superheroapi.com/api/102141048846123/30/')
      console.log('tar-response:',response);
    } catch (error){
      console.error(error)
    }
  }

  return (
    <>
      <div style={{padding: 30}}> 
        <p className = "lead">To test axios click here:</p>
        <button className = "btn btn-primary" onClick={handleClick}> Click me </button>
      </div>
    </>
  )
}

export default TestAxios







/*
      const instance = axios.create ({
        headers: {'Access-Control-Allow-Origin' : '*'}
      });  
      */
      //const response = await instance.get('https://superheroapi.com/api/102141048846123/30/')
      /*
      axios.defaults.headers = {
        'Content-Type' : 'application/json',
        'Access-Control-Allow-Origin' : '*',
        'responseType': 'json'
      }*/

      /*
      const response = await axios({
        method: 'get',
        url: 'https://superheroapi.com/api/102141048846123/30/',
        headers: {'Access-Control-Allow-Origin' : '*'}
      })
      */
      
