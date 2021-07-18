import React from 'react';
import ReactDOM from 'react-dom';
import Aula01 from './components/Aula01';
import Aula02 from './components/Aula02';
import Aula03 from './components/Aula03';

ReactDOM.render(
  <React.StrictMode>
    <Aula01 text='Hello, World!'>
      <h1>Exemplo de Teste.</h1>
    </Aula01>
    <Aula02 />
    <Aula03 />
  </React.StrictMode>,
  document.getElementById('root')
);
