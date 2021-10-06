import React from 'react';
import './App.css';
import { ActivitiesForm } from './components/activities/ActivitiesForm';

function App() {
  return (
    <ActivitiesForm activity={{
      id: '645',
      name: 'prueba nombre',
      description:'<p>prueba descripcion</p>',
      image: "http://ongapi.alkemy.org/storage/pH49qdbKVN.jpeg"
    }}/>
  );
}

export default App;
