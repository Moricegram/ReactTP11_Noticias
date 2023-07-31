import React from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

const Titulo = () => {
    return (
        <>
        <Container>
            <Navbar expand="lg" className="bg-body-tertiary">
                <Container>
                    <Navbar.Brand href="#">Noticias</Navbar.Brand>
                </Container>
            </Navbar>
        </Container>
        </>
    );
};

export default Titulo;