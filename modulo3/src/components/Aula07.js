// Aula 07 - Renderização Condicional

import React from 'react';

class Aula07 extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: undefined,
      textName: ''
    };
  }

  changeTextName = event => {
    this.setState({ textName: event.target.value });
  };

  persistName = () => {
    this.setState({ name: this.state.textName });
  };

  render() {
    const renderForm = () => {
      return (
        <>
          <label>
            Nome: <input type="text" value={this.state.name} onChange={this.changeTextName} />
          </label>
          <button onClick={this.persistName}>Salvar</button>
        </>
      );
    };

    const renderText = () => {
      return (
        <>
          <p>Olá, {this.state.name}!</p>
        </>
      );
    };

    // if (!this.state.name) {
    //   return (
    //     <>
    //       <label>
    //         Nome: <input type="text" value={this.state.name} onChange={this.changeTextName} />
    //       </label>
    //       <button onClick={this.persistName}>Salvar</button>
    //     </>
    //   );
    // } else {
    //   return (
    //     <>
    //       <p>Olá, {this.state.name}!</p>
    //     </>
    //   );
    // }

    return !this.state.name ? renderForm() : renderText();
  }
}

export default Aula07;
