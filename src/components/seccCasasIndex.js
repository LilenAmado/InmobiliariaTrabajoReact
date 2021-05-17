import React from 'react';
import '../normalize.css';
import '../index.css';
import anuncio1 from './img/anuncio1.jpg';
import anuncio2 from './img/anuncio2.jpg';
import anuncio3 from './img/anuncio3.jpg';
import { Link } from 'react-router';

function SeccCasasIndex() {

    let bucle = [
        {
            img: anuncio1,
            alt: 'Casa de Lujo en Lago',
            ubicacion: 'Quilmes Oeste',
            operacion: 'Alquiler',
            precio: '$3,000,000'
        },
        {
            img: anuncio2,
            alt: 'Casa Terminados de Lujo',
            ubicacion: 'Bernal',
            operacion: 'Venta',
            precio: '$2,000,000'
        },
        {
            img: anuncio3,
            alt: 'Casa con Piscina',
            ubicacion: 'Palermo',
            operacion: 'Venta',
            precio: '$3,000,000'
        }
    ]
  return (
    <div>
        <main className="container">
            <h2 className="titulo tituloProp">Casas y Departamentos en Venta</h2>

            <section className="grid3">

                {bucle.map((bucle, i) =>{
                    return(
                        <article className="cardsProp">
                            <img src={bucle.img} alt={bucle.alt} className="imgProp"/>
                            <h3 className="h3prod container">{bucle.ubicacion}</h3>
                            <p className="pProp container">{bucle.operacion}</p>
                            <p className="dinero container">{bucle.precio}</p>
                            <div className="container">  
                                <Link to="" className="btn botonProp botonPropIndex"> Ver Propiedad </Link>
                            </div>
                            
                        </article>
                    )
                })}

            </section>
            
            <div className="container btn-div">
                <Link to="/propiedades" className="btn-hiper"> Ver Todas </Link>
            </div>

        </main>
    </div>
  );
}
export default SeccCasasIndex;