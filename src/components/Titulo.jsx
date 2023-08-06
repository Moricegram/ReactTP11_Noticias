import React from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

const Titulo = () => {
    return (
        <>
        <div className="px-0">
            <Navbar expand="lg" className="mt-2 bg-dark text-white">
                <Container className="justify-content-center">
                    <h1 className="display-5">Noticias</h1>
                </Container>
            </Navbar>
        </div>
        </>
    );
};

export default Titulo;