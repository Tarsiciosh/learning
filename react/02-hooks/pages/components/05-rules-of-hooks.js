import React, { useEffect, useState } from 'react'

export default function () {
  const [name,setName] = useState('Mary');
  useEffect(()=> {
    localStorage.setItem('formData', name);
  });

  const [surename, setSurename] = useState('Poppins');
  useEffect(function updateTitle(){
    document.title = name + '' + surename;
  });

  if (name !== '')
  {
    useEffect(function persistForm(){
      localStorage.setItem('formData', name);
    })
  }
}