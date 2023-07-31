import React from 'react';
import { Container } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';

const Formulario = () => {
    return (
        <>
        <Container>
            <Form.Group className="mb-1 d-flex" controlId="noticias">
            <Form.Select aria-label="Default select example">
                <option>Seleccione un lugar de la lIsta</option>
                <option value="1">America</option>
                <option value="2">Argentina</option>
                <option value="3">Tucuman</option>
            </Form.Select>
            </Form.Group>
        </Container>
        </>
    );
};

export default Formulario;