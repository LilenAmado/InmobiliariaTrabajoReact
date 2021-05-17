import React from 'react';
import '../normalize.css';
import '../index.css';
import icono1 from './img/icono1.svg';
import icono2 from './img/icono2.svg';
import icono3 from './img/icono3.svg';


function masNosotros() {

    let bucle = [
        
        {
            img: icono1,
            alt: 'seguridad',
            h3: 'Seguridad',
            descripcion: 'Debitis beatae tempore dolorem ratione, id ipsum. Dignissimos voluptates saepe non enim architecto nisi rem impedit laboriosam, sint ab animi, voluptate quam.'
        },
        {
            img: icono2,
            alt: 'precio',
            h3: 'El Mejor Precio',
            descripcion: 'Debitis beatae tempore dolorem ratione, id ipsum. Dignissimos voluptates saepe non enim architecto nisi rem impedit laboriosam, sint ab animi, voluptate quam.'
        },
        {
            img: icono3,
            alt: 'tiempo',
            h3: 'A Tiempo',
            descripcion: 'Debitis beatae tempore dolorem ratione, id ipsum. Dignissimos voluptates saepe non enim architecto nisi rem impedit laboriosam, sint ab animi, voluptate quam.'
        }
    ]
  return (
    <div>
        <div>
            <section className="container" id="secc-cards"> 
                <h2 className="titulo">Más sobre nosotros</h2>
                <article className="grid3">

                {
                    bucle.map((bucle, i) =>{   
                        return(
                            <div className="cardsMasNos">
                                <img src={bucle.img} alt={bucle.alt} className="imgNos"/>
                                <h3 className="h3 espacio">{bucle.h3}</h3>
                                <p className="textNos">{bucle.descripcion}</p>
                            </div>
                        )
                    })
                }
                </article> 
                <br/><br/><br/>
            </section>

            <hr className="container"/>

        </div>
    </div>
  );
}
export default masNosotros;