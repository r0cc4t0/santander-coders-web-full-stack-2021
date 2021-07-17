// Aula 09 - Renderização de Listas

import React from 'react';

class Aula09 extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      items: ['Item 1', 'Item 2', 'Item 3', 'Item 4'],
      items2: [
        { id: 1, nome: 'Item 1', completo: false },
        { id: 2, nome: 'Item 2', completo: false },
        { id: 3, nome: 'Item 3', completo: true },
        { id: 4, nome: 'Item 4', completo: false }
      ]
    };
  }

  render() {
    return (
      <>
        <ol>
          {this.state.items.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ol>

        <ul>
          {this.state.items2.map(item => (
            <Item key={item.id} completo={item.completo}>{item.nome}</Item>
          ))}
        </ul>
      </>
    );
  }
}

class Item extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const textDecoration = this.props.completo ? 'line-through' : 'none';
    return (
      <>
        <li data-id={this.props.id} style={{ textDecoration }}>{this.props.children}</li>
      </>
    );
  }
}

export default Aula09;
