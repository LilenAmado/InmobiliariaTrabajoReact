import React from 'react';
import '../normalize.css';
import '../index.css';
import { Link } from 'react-router';
import anuncio1 from './img/anuncio1.jpg';
import anuncio2 from './img/anuncio2.jpg';
import anuncio3 from './img/anuncio3.jpg';
import anuncio4 from './img/anuncio4.jpg';
import anuncio5 from './img/anuncio5.jpg';
import anuncio6 from './img/anuncio6.jpg';

function SeccPropiedades() {
    /*ACA HACER EL FETCH EN VEZ DEL BUCLE*/
    let bucle = [
        {
            img: anuncio1,
            ubicacion: 'Quilmes Oeste',
            operacion: 'Alquiler',
            precio: '$3,000,000'
        },{
            img: anuncio2,
            ubicacion: 'Bernal',
            operacion: 'Venta',
            precio: '$3,000,000'
        },{
            img: anuncio3,
            ubicacion: 'Palermo',
            operacion: 'Venta',
            precio: '$3,000,000'
        },{
            img: anuncio4,
            ubicacion: 'Villa Urquiza',
            operacion: 'Alquiler',
            precio: '$3,000,000'
        },{
            img: anuncio5,
            ubicacion: 'Avellaneda',
            operacion: 'Venta',
            precio: '$3,000,000'
        },{
            img: anuncio6,
            ubicacion: 'Puerto Madero',
            operacion: 'Alquiler',
            precio: '$3,000,000'
        }
    ]
  return (
    <div>
        <section className="grid3">
            {
                bucle.map((bucle, i)=>{
                    return(
                        <article className="cardsProp BGrey">
                            <img src={bucle.img} alt="" className="imgProp"/>
                            <h3 className="h3prod container">{bucle.ubicacion}</h3>
                            <p className="pProp container">{bucle.operacion}</p>
                            <p className="dinero container">{bucle.precio}</p>
                            <div className="container">
                                <Link to="" className="btn botonProp"> Ver Propiedad </Link>
                            </div>
                        </article>
                    )
                }) 
            }
        </section>
    </div>
  );
}
export default SeccPropiedades;