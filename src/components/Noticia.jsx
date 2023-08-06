import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const Noticia = () => {
    return (
        <Card style={{ width: '16rem' }} className='m-2'>
        <Card.Img variant="top" src="holder.js/100px180" />
        <Card.Body>
            <p><i> Diario 1</i></p>
            <Card.Title>Titulo Noticia</Card.Title>
            <Card.Text>
            Resumen de la Noticia
            </Card.Text>
            <div className='text-center'>
            <Button variant="secondary">Ver Noticia Completa</Button>
            </div>
        </Card.Body>
        </Card>
    );
};

export default Noticia;