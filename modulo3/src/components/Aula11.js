// Aula 11 - Formulários

import React from 'react';

class Aula11 extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      language: 'JavaScript',
      type: 'Programador',
      studies: true,
      bio: ''
    };

    this.handleSubmit = event => {
      event.preventDefault();
      console.log(this.state);
    };

    this.changeName = event => {
      this.setState({ name: event.target.value });
    };

    this.changeSelect = event => {
      this.setState({ language: event.target.value });
    };

    this.changeRadio = event => {
      this.setState({ type: event.target.value });
    };

    this.changeCheckbox = event => {
      this.setState({ studies: event.target.checked });
    };

    this.changeBio = event => {
      this.setState({ bio: event.target.value });
    };
  }

  render() {
    return (
      <>
        <form onSubmit={this.handleSubmit}>
          <label>
            Nome: <input type="text" value={this.state.name} onChange={this.changeName} />
          </label>

          <br />

          <label>
            Linguagem Favorita:
            <select value={this.state.language} onChange={this.changeSelect}>
              <option>JavaScript</option>
              <option>Python</option>
              <option>C++</option>
            </select>
          </label>

          <br />

          <label>
            Sou:
            <input type="radio" checked={this.state.type === 'Programador'} onChange={this.changeRadio} value="Programador" />Programador
            <input type="radio" checked={this.state.type === 'Estudante'} onChange={this.changeRadio} value="Estudante" />Estudante
          </label>

          <br />

          <label>
            <input type="checkbox" checked={this.state.studies} onChange={this.changeCheckbox} />Dedico 8 horas por semana aos estudos.
          </label>

          <br />

          <label>
            Bio: <textarea cols="50" value={this.state.bio} style={{ resize: 'none' }} onChange={this.changeBio} />
          </label>

          <br />

          <button type="submit">Salvar</button>
        </form>
      </>
    );
  }
}

export default Aula11;
