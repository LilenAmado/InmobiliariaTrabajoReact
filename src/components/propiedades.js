import React from 'react';
import '../normalize.css';
import '../index.css';
//import { Link } from 'react-router';
import Header from './header';
import Footer from './footer';
import FormPropiedades from './formPropiedades';
import SeccPropiedades from './seccPropiedades';

function Propiedades() {
  return (
    <div>
      <Header></Header>
      <main className="container">
        <section>
          <h1 className="titulo tituloProp">Propiedades</h1>
        </section>
        <FormPropiedades></FormPropiedades>
        <br/><br/><br/>
        <SeccPropiedades></SeccPropiedades>
      </main>
      <Footer></Footer>
    </div>
  );
}
export default Propiedades;