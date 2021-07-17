// Aula 08 - Ciclo de Vida

import React from 'react';

class Aula08 extends React.Component {
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

  componentDidMount() {
    const name = sessionStorage.getItem('name');
    if (name) {
      this.setState({ name });
    }
  }

  persistName = () => {
    this.setState({ name: this.state.textName });
    sessionStorage.setItem('name', this.state.textName);
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

    return !this.state.name ? renderForm() : renderText();
  }
}

export default Aula08;
