import React from 'react';
import '../normalize.css';
import '../index.css';
import Header from './header';
import Footer from './footer';
import FormularioTrabaja from './formularioTrabaja';

function Trabaja() {
  return (
    <div>
      <Header></Header>
      <main>
        <section>
            <h1 className="titulo">Trabajá con nosotros</h1>
        </section>
        <section className="fondoContacto"></section>
        <FormularioTrabaja></FormularioTrabaja>
      </main>
      <Footer></Footer>
    </div>
  );
}
export default Trabaja;