import React from 'react'
import axios from 'axios'
import { useState, useEffect } from 'react'

//const token = '102141048846123';

export const Hero = () => {

  const [hero, setHero] = useState({'name':'empty'})

  useEffect(() => {
    async function fetchHeroInfo () {
      console.log('before making the request')
      try {      
        const response = await axios.get('https://superheroapi.com/api/102141048846123/30/')
        setHero(response.data)
        console.log('Hero info:',response);
      } catch (error){
        console.error(error)
      }
    }
  })

  async function handleClick () {
    console.log('before making the request')
    try {      
      const response = await axios.get('https://superheroapi.com/api/102141048846123/30/')
      setHero(response.data)
      console.log('tar-response:',response);
    } catch (error){
      console.error(error)
    }
  }

  return (
    <>
      <div style={{padding: 30}}> 
        <p className = "lead">{ 'this is a hero example' }</p>
        <p className="lead"> {hero['name']} </p>
        {<button className = "btn btn-primary" onClick={handleClick}> Test </button>}
      </div>
    </>
  )
}

export default Hero



















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
      
