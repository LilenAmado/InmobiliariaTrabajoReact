import React from 'react';
import '../normalize.css';
import '../index.css';
import { Link } from 'react-router';

function Footer() {
    let fecha = new Date();
    let year = fecha.getFullYear();
    return (
        <div>
            <footer className="footer">
                <hr className="container"/>
                <div className="container grid2">
                    <nav className="footer-nav">
                        <Link to="/" className="footer-hiper"> Home</Link>
                        <Link to="/nosotros" className="footer-hiper"> Nosotros </Link>
                        <Link to="/propiedades" className="footer-hiper"> Propiedades </Link>
                        <Link to="/trabaja"className="footer-hiper"> Trabajá con nosotros </Link>
                        <Link to="/contacto" className="footer-hiper"> Contacto </Link>
                    </nav>

                    <p className="footer-nav footer-p">
                        Email: 
                        <a href="mailto:inmoviliariasabrina@gmail.com"> inmoviliariasabrina@gmail.com</a>
                        <br/><br/> 
                        Todos los Derechos Reservados {year} &copy;  Desarrollo: 
                        <a href="https://lilenamado.netlify.app" target="_blank">Lilén Amado</a>
                    </p>

                </div>
            </footer> 
        </div>
    );
}
export default Footer;
