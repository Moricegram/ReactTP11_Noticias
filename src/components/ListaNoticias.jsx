import React from 'react';
import { Container } from "react-bootstrap";
import Noticias from "./Noticias";

//Recibo por props, de modo desestructurado "noticias"
const ListaNoticias = ({ noticias }) => {
  return (
    //proporciono un key para no clonar los elementos del map.
    <Container className="row justify-content-center">
      {noticias.map((noticia, indiceNoticia) => (
        <Noticias
          noticia={noticia}
          key={indiceNoticia}
          className="col-12 col-md-4"
        />
      ))}
    </Container>
  );
};

export default ListaNoticias;