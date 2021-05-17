import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory } from 'react-router';
import Home from './components/home';
import Nosotros from './components/nosotros';
import Propiedades from './components/propiedades';
import Contacto from './components/contacto';
import Trabaja from './components/trabaja';

ReactDOM.render(
  <Router history={browserHistory}>
    <Route path="/" component={Home}></Route>
    <Route path="/nosotros" component={Nosotros}></Route>
    <Route path="/propiedades" component={Propiedades}></Route>
    <Route path="/contacto" component={Contacto}></Route>
    <Route path="/trabaja" component={Trabaja}></Route>
  </Router>,
  document.getElementById('root')
);