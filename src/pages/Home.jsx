import React from 'react';
import ferreteria from '../assets/images/ferreteria.jpg'; // Ruta corregida
import '../Styles/components/home.css';



function Home() {
  return (
    <div className="home-container">
      <h1 className="home-title">Bienvenido a Ferretería Arg</h1>
      <img 
        src={ferreteria} 
        alt="Ferretería" 
        className="home-image" 
      />
      <p className="home-description">
        Encuentra todo lo que necesitas para tus proyectos de construcción y remodelación. 
        ¡Ofrecemos productos de calidad y el mejor servicio!
      </p>
    </div>
  );
}

export default Home;
