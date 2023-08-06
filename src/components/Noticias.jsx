import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const Noticias = ( {noticia}) => {
    {console.log(noticia)};

    return (
        <Card style={{ width: '18rem' }} className='m-2'>
        <Card.Img variant="top" src={noticia.image_url || "https://gathanasiadisr.com/wp-content/uploads/2016/06/Imagen_no_disponible.gif"} />
        <Card.Body>
            <p><i>{noticia.creator || "..."}</i></p>
            <Card.Title>{noticia.title || "..."}</Card.Title>
            <Card.Text className="text-truncate">
            {noticia.description || "..."}
            </Card.Text>
            <div className='text-center'>
            <Button variant="secondary"><a
              href={noticia.link}
              className="nav-link"
            >
              Ver noticia completa
            </a></Button>
            </div>
        </Card.Body>
        </Card>
    );
};

export default Noticias;