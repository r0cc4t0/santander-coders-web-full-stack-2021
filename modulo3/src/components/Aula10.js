// Aula 10 - Componentes Aninhados

import React from 'react';

class Aula10 extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      items: [
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
        <ul>
          {this.state.items.map(item => (
            <Item key={item.id} completo={item.completo}>{item.nome}</Item>
          ))}

          {/* {this.props.children} */}

          {React.Children.map(this.props.children, child => (
            child.type === Item ? child : null
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

export { Aula10, Item };
