import React from 'react';
import { Container } from "react-bootstrap";
import Noticias from "./Noticias";

//Recibo por props, de modo desestructurado "noticias"
const ListaNoticias = ({ noticias }) => {
  return (
    //proporciono un key para no clonar los elementos del map.
    <div className="row justify-content-center mx-0">
      {noticias.map((noticia, indiceNoticia) => (
        <Noticias
          noticia={noticia}
          key={indiceNoticia}
          className="col-12 col-md-4"
        />
      ))}
    </div>
  );
};

export default ListaNoticias;