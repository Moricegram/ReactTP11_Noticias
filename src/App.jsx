import { useEffect, useState } from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import Formulario from "./components/Formulario";
import Titulo from "./components/Titulo";

import './App.css'

function App() {

  
  return (
    <>
    <Titulo></Titulo>
    <Formulario></Formulario>
    <footer className="text-center bg-dark text-light py-2 mt-auto">
        <p>&copy; <i>Comision 43i - RollingCode - TP N°11 React - Empleo de APIs </i></p>
    </footer>
    </>
  )
}

export default App
