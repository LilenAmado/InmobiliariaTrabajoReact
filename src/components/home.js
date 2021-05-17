import React from 'react';
import '../normalize.css';
import '../index.css';
import HeaderIndex from './headerIndex';
import Footer from './footer';
import MasNosotros from './seccMasNosotros';
import Encuentra from './seccEncuentra';
import SeccCasasIndex from './seccCasasIndex';

function Home() {
  return (
    <div>
      <HeaderIndex></HeaderIndex>
      <MasNosotros></MasNosotros>
      <Encuentra></Encuentra>
      <SeccCasasIndex></SeccCasasIndex>
      <Footer></Footer>
    </div>
  );
}
export default Home;