import { useEffect, useState } from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import Formulario from "./components/Formulario";
import Titulo from "./components/Titulo";

import './App.css'

function App() {

  //Escribiré en el ejercicio las tareas a ejecutar de modo secuencial, como ayuda memoria para el desarrollo de la App.
  //Consulto a la API mediante el hook useEffect(), son su propiedad [] para carga solo en montaje.
  useEffect( ()=> {
    consultarApi();
  },[])

  //Necesitaré un state para almacenar la respuesta
  //Lo inicializo con un objeto vacio, porque la respuesta es un objeto.
  const [noticia,setNoticia] = useState({});

//   La respuesta en este caso devuelve un Objeto en Formato JSON. Luego hago una solicitud a una API mediante una funcion, consultarApi().
//Cada vez que solicite informacion fuera de mi proyecto, y que la informacion pueda fallar, lo hago mediante el uso de la estructura try catch.
//Utilizo async y awit para resolver la promesa de la respuesta que no es inmediata a la solicitud de la API.
const consultarApi = async () => {
  try {
    //Codigo que ejecutaré.
    //Para solicitar informacion a una API, la hare mediante un Fetch. (De JS nativo). Lo almaceno en una variable "respuesta"
    const respuesta = await fetch(
        "https://newsdata.io/api/1/news?apikey=pub_26952eea98f9f0a904f0f5479e75595644894&q&language=es&category=top"
      );
      //Ahora para extraer el Response del Body, creo una constante para recuperar esa informacion: dato.
      const dato = await respuesta.json();
      console.log(respuesta);
      console.log(dato.results);
      // Ahora tomare esa respuesta y la guardaré en el State noticia, diante el uso de setNoticia.
      setNoticia(dato.results)
      //Ahora quiero quiero que ese Estado se vea en el componente hijo, y se lo envio por Props.


  } catch (error) {
    console.log(error);
  };
};
  
  return (
    <>
    <Titulo></Titulo>
    <Formulario></Formulario>
    </>
  )
}

export default App
