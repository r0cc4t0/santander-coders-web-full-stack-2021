// Aula 05 - Propriedades (Props)

import React from 'react';

class Aula05 extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="box">
        <div id="title">{this.props.title}</div>
        <div id="text">{this.props.children}</div>
      </div>
    );
  }
}

export default Aula05;
