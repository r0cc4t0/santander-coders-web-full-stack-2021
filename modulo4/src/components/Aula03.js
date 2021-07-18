// Aula 03 - Hook de Efeitos

import React, { useState, useEffect } from 'react';

const Aula03 = () => {
  const [name, setName] = useState(undefined);

  useEffect(() => {
    if (name === undefined) {
      setName(sessionStorage.getItem('name') || '');
    } else {
      sessionStorage.setItem('name', name);
    }
  }, [name]);

  return (
    <>
      <label>
        Nome: <input type="text" value={name} onChange={event => setName(event.target.value)} />
      </label>
      <br />
      <p>Olá, {name}!</p>
    </>
  );
};

export default Aula03;
