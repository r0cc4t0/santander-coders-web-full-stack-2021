// Aula 04 - Componente Simples

import React from 'react';

class Aula04 extends React.Component {
  render() {
    return (
      <>
        <p>Meu primeiro parágrafo.</p>
        <p>Meu segundo parágrafo.</p>
        <pre>Texto pré-formatado.</pre>
        <p>{new Date().toLocaleDateString('pt-br')}</p>
      </>
    );
  }
}

export default Aula04;
