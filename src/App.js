import React, { Component }from 'react';
import Position from './components/Position/Position'
import './App.css'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  render() { 
    return (
      <div className="App">
        <Position />
      </div>
    )
  }
}

export default App