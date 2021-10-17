import React, { Component } from 'react';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      contador: 0
    }

    this.incrementa = this.incrementa.bind(this);
    this.decrementa = this.decrementa.bind(this);    
  }

  incrementa() {
    this.setState({
      contador: this.state.contador + 1
    });
  }

  decrementa() {
    this.setState({
      contador: this.state.contador - 1
    });
  }
  
  render() {
    const { contador } = this.state;
    return (
      <div class="text">

        <br /><button class="inc" onClick={this.incrementa}>INCREMENTA</button>
        &nbsp;&nbsp;O valor é: &nbsp;{contador}
        &nbsp;&nbsp;<button class="dec" onClick={this.decrementa}>DECREMENTA</button>

      </div>
    );

  }
}

export default App;