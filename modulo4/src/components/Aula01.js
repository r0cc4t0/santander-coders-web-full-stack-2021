// Aula 01 - Introdução aos Componentes Funcionais

import React from 'react';

// function Aula01({ text, children }) {
//   return (
//     <>
//       <h1>{text}</h1>
//       {children}
//     </>
//   );
// }

const Aula01 = props => {
  return (
    <>
      <p>Parágrafo de exemplo.</p>
      <h1>{props.text}</h1>
      {props.children}
    </>
  );
}

export default Aula01;
