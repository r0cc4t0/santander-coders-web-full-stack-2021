import React from 'react';
import ReactDOM from 'react-dom';
import Aula03 from './components/Aula03';
import Aula04 from './components/Aula04';
import Aula05 from './components/Aula05';
import Aula06 from './components/Aula06';
import Aula07 from './components/Aula07';
import Aula08 from './components/Aula08';
import Aula09 from './components/Aula09';
import { Aula10, Item } from './components/Aula10';
import Aula11 from './components/Aula11';

ReactDOM.render(
  <React.StrictMode>
    <Aula03 />
    <Aula04 />
    <Aula05 title='Título'>Conteúdo</Aula05>
    <Aula06 />
    <Aula07 />
    <Aula08 />
    <Aula09 />
    <Aula10>
      <Item key={5} id={5} completo={false}>Item 5</Item>
      <Item key={6} id={6} completo={true}>Item 6</Item>
      Item 7
    </Aula10>
    <Aula11 />
  </React.StrictMode>,
  document.getElementById('root')
);
