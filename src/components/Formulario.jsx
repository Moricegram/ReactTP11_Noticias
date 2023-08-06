import React from 'react';
import Form from 'react-bootstrap/Form';
import ListaNoticias from './ListaNoticias';


const Formulario = () => {
    return (
        <>
            <Form className="mt-2 bg-dark text-white">
                <Form.Group className="my-2 d-flex px-2" controlId="noticias">
                <Form.Label className="text-light col-5">Buscar por Categoria</Form.Label>
                <Form.Select>
                    <option value="1">Negocio</option>
                    <option value="2">Entretenimiento</option>
                    <option value="3">Ambiente</option>
                    <option value="4">Alimento</option>
                    <option value="5">Salud</option>
                    <option value="6">Política</option>
                    <option value="7">Ciencia</option>
                    <option value="8">Deportes</option>
                    <option value="9">Tecnología</option>
                    <option value="10">Top</option>
                    <option value="11">Turismo</option>
                    <option value="12">Mundo</option>
                </Form.Select>
                </Form.Group>
            </Form>
            <ListaNoticias></ListaNoticias>
        </>
    );
};

export default Formulario;