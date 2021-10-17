import React from 'react';

class Retangulo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

      comprimento: 8, 
      largura: 5

    };
  }

  mudarLargura() {

    this.setState({ largura: 6 })

  }

  render() {
    return (

      <div>

        <h1>A área do retanglo é: {this.state.comprimento * this.state.largura}</h1>

        <button class="Larg" onClick={() => this.mudarLargura('mudarLargura')}>MudarLargura</button>

      </div>

    )
  };
}

export default Retangulo;
