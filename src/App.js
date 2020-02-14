import React, { Component }from 'react';
import Home from './view/Home'
// import Position from './components/Position/Position'
import './App.css'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  render() { 
    return (
      <div className="App">
        <Home />
      </div>
    )
  }
}

export default App