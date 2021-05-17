import React from 'react';
import '../normalize.css';
import '../index.css';
import { Link } from 'react-router';

function Encuentra() {

  return (
    <div>
        <section className="fondoEncuentra">
            <div className="container">
                <div>
                    <h2 className="h2Encuentra">Encuentra la Casa de tus Sueños</h2>

                    <p className="pEncuentra">Llena el formulario de contacto y un asesor se pondrá en contacto contigo a la brevedad </p>
                </div>

                <div className="container1 btn-Encuentra">
                <Link to="/contacto" className="btn-hiper"> Contactanos </Link>
                </div>
            </div>
        </section>
    </div>
  );
}
export default Encuentra;