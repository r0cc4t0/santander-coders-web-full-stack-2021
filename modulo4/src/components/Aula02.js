// Aula 02 - Hook de Estado

import React, { useState } from 'react';

const Aula02 = () => {
  const [person, setPerson] = useState({ name: 'Lucas', age: 26 });

  const onClick = () => {
    setPerson({ name: 'Luís', age: 29 });
    console.log(person);
  };

  const [name, setName] = useState('');

  return (
    <>
      <div onClick={onClick}>
        Nome: {person.name}
        <br />
        Idade: {person.age}
      </div>
      <br />
      <label>
        Nome: <input type="text" value={name} onChange={event => setName(event.target.value)} />
      </label>
      <br />
      <p>Olá, {name}!</p>
    </>
  );
};

export default Aula02;
