// Aula 06 - Estado

import React from 'react';

class Aula06 extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      firstName: '',
      lastName: '',
      age: 26
    };

    this.changeFirstName = this.changeFirstName.bind(this);
  }

  changeFirstName = function (event) {
    this.setState({ firstName: event.target.value });
  };

  changeLastName = event => {
    this.setState({ lastName: event.target.value });
  };

  render() {
    return (
      <>
        <label>
          Nome: <input type="text" id="first_name" value={this.state.firstName} onChange={this.changeFirstName} />
        </label>

        <label>
          Sobrenome: <input type="text" id="last_name" value={this.state.lastName} onChange={this.changeLastName} />
        </label>

        <p>Olá, {this.state.firstName} {this.state.lastName}!</p>
        <p>Idade: {this.state.age}</p>
      </>
    );
  }
}

export default Aula06;
