import React from 'react';
import '../normalize.css';
import '../index.css';
//import imgNos from './img/nosotros.jpg'
//import { Link } from 'react-router';
import Header from './header';
import Footer from './footer';
import Conocenos from './conocenos';
import Ubicacion from './ubicacion';

function Nosotros() {
  return (
    <div>
      <Header></Header>
      <Conocenos></Conocenos>
      <Ubicacion></Ubicacion>
      <Footer></Footer>
    </div>
  );
}
export default Nosotros;