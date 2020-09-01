import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Faq from './paginas/Faq.js';
import Missao from './paginas/Missao.js';
import * as serviceWorker from './serviceWorker';
import Home from './paginas/Home';
import PaginaTestes from './paginas/PaginaTestes';
import './estilos/HomeStilo.css';
import './estilos/StiloPadrao.css';
import Login from './paginas/Login'
import Testes from './paginas/Testes'
import BarraDeBusca from './paginas/BarraDeBusca'

ReactDOM.render(
  <React.StrictMode>
    <BarraDeBusca />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
