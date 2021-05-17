import React from 'react';
import '../normalize.css';
import '../index.css';
import Header from './header';
import Footer from './footer';
import FormularioContacto from './formularioContacto';

function Contacto() {
  return (
    <div>
      <Header></Header>
      <main>
        <section>
            <h1 className="titulo">Contacto</h1>
        </section>
        <FormularioContacto></FormularioContacto>
      </main>
      <Footer></Footer>
    </div>
  );
}
export default Contacto;