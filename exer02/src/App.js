import React from 'react';

class relogio extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      date: new Date()

    }
  }
  
  render() {
    const { date } = this.state;

    var time = date.getHours("00") + ':' + date.getMinutes("00") + ':' + date.getSeconds("00");

    return (

      <div>

        <h1>Olá, React!</h1>
        <h3>Agora é {time}</h3>

      </div>
      
    );
  }
}

export default relogio;