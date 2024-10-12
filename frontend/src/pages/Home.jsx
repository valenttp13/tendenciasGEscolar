import React from 'react';
import { useNavigate } from 'react-router-dom';  
import './Home.css'; 

const Home = () => {
  const navigate = useNavigate();  

  return (
    <div className="home-container">
      <h1>Panel Principal</h1>
      <button className="module-button" onClick={() => navigate('/profesores')}>Profesores</button>
      <button className="module-button" onClick={() => navigate('/cursos')}>Cursos</button>
      <button className="module-button" onClick={() => navigate('/calificaciones')}>Calificaciones</button>
      <button className="module-button" onClick={() => navigate('/CrearUsuario')}>Usuarios</button>
      <button className="module-button" onClick={() => navigate('/estudiantes')}>Estudiantes</button>
    </div>
  );
}

export default Home;
