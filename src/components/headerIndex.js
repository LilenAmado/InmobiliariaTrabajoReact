import React from 'react';
import '../normalize.css';
import '../index.css';
import logo from './img/logo.png';
import FormPropiedades from './formPropiedades';
import { Link } from 'react-router';

function HeaderIndex() {
  return (
    <div>
      <header className="header">
        <nav className="nav">
            <div className="flex">
                <div className="position">
                    <img src={logo} alt="" className="logo"/>
                </div>
            </div>

            <label htmlFor="toggle">&#9776;</label>    
            <input type="checkbox" id="toggle"/>
            
            <div className="menu">
                <Link to="/"> Home</Link>
                <Link to="/nosotros"> Nosotros </Link>
                <Link to="/propiedades" > Propiedades </Link>
                <a href="#secc-cards">Servicios</a>
                <Link to="/contacto"> Contacto </Link>
            </div>
        </nav>

        <section className="container">
            <h1 className="tituloHeader">BUSCÁ TU PROPIEDAD</h1>
            <FormPropiedades></FormPropiedades>
        </section>
    </header>
    </div>
  );
}
export default HeaderIndex;