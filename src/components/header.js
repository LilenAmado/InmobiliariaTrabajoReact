import React from 'react';
import '../normalize.css';
import '../index.css';
import logo from '../components/img/logo.png';
import { Link } from 'react-router';

function Header() {
  return (
    <div>
      <header className="header-otras">
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
                <Link to="/">Servicios</Link> 
                {/* COMO HACER PARA QUE SE VAYA A ESA PARTE */}
                <Link to="/contacto"> Contacto </Link>
            </div>
        </nav>
    </header> 
    </div>
  );
}
export default Header;
