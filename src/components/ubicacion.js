import React from 'react';
import '../normalize.css';
import '../index.css';

function Ubicacion() {
  return (
    <div>
      <section className="container">
        <h2 className="titulo">Ubicación</h2><br/>

        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3275.2365097196894!2d-58.39355868504465!3d-34.82514557675421!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcd4a17e9884bf%3A0x576ec433169a1441!2sBurzaco!5e0!3m2!1ses-419!2sar!4v1619891551110!5m2!1ses-419!2sar" allowfullscreen="" loading="lazy" className="mapa"></iframe>

      </section>  
    </div>
  );
}
export default Ubicacion;