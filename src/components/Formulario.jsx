import React from 'react';
import Form from 'react-bootstrap/Form';
import ListaNoticias from './ListaNoticias';
import { useEffect, useState } from 'react'
import { Button, Container } from 'react-bootstrap';

const Formulario = () => {

//Necesitaré un state para almacenar la respuesta de una API, por lo que creo a "noticias"
  //Lo inicializo con un objeto vacio, porque la respuesta es un objeto.
  const [categoria,setCategoria] = useState("");
  const [noticia,setNoticia] = useState([]);
  const [verNoticia,setVerNoticia] = useState(false);
  
    
  //Consulto a la API mediante el hook useEffect(), con su propiedad [] para carga solo en montaje.
  useEffect( ()=> {
    consultarApi();
  },[])

//   La respuesta en este caso devuelve un Objeto en Formato JSON. Luego hago una solicitud a una API mediante una funcion, consultarApi().
//Cada vez que solicite informacion fuera de mi proyecto, y que la informacion pueda fallar, lo hago mediante el uso de la estructura try catch.
//Utilizo async y awit para resolver la promesa de la respuesta que no es inmediata a la solicitud de la API.
const consultarApi = async () => {
  try {
    //Codigo que ejecutaré.
    //Para solicitar informacion a una API, la hare mediante un Fetch. (De JS nativo). Lo almaceno en una variable "respuesta"
    const respuesta = await fetch(
        `https://newsdata.io/api/1/news?apikey=pub_26952eea98f9f0a904f0f5479e75595644894&q&language=es&category=${categoria}`
      );
      //Ahora para extraer el Response del Body, creo una constante "dato" para recuperar esa informacion.
      const dato = await respuesta.json();
      console.log(respuesta);
      console.log(dato);
      // Ahora tomare esa respuesta y la guardaré en el State noticia, mediante el uso de setNoticia.
      setNoticia(dato);
      //Ahora quiero quiero que ese Estado se vea en el componente hijo, y se lo envio por Props.
      //Al obtener los tados de la API, cambio verNoticias a True.
      setVerNoticia(true);
      console.log(verNoticia);
      console.log(noticia)
  } catch (error) {
    console.log(error);
  };
};

const handleSubmit = (e) => {
    e.preventDefault ();
    setCategoria(e.target.value);
    console.log(categoria);
    consultarApi();
};

    return (
        <>
            <Form className="mt-2 bg-dark text-white" onSubmit={handleSubmit}>
                <Form.Group className="my-2 d-flex px-2" controlId="noticias">
                <Form.Label className="text-light col-5">Buscar por Categoria</Form.Label>
                <Form.Select onChange={
                  (e) => setCategoria(e.target.value)}
                  value={categoria}
                  > 
                    <option value="business">Negocio</option>
                    <option value="entertainment">Entretenimiento</option>
                    <option value="environment">Ambiente</option>
                    <option value="food">Alimento</option>
                    <option value="health">Salud</option>
                    <option value="politics">Política</option>
                    <option value="science">Ciencia</option>
                    <option value="sports">Deportes</option>
                    <option value="technology">Tecnología</option>
                    <option value="top">Top</option>
                    <option value="tourism">Turismo</option>
                    <option value="world">Mundo</option>
                </Form.Select>
                  <Button
                    variant="secondary"
                    type="submit"
                  >
                    Buscar
                  </Button>
                </Form.Group>
            </Form>
            <ListaNoticias propsNoticia={noticia}></ListaNoticias>
        </>
    );
};

export default Formulario;