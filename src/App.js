import React, { Component }from 'react';
import Header from './components/Header/Header'
import List from './components/List/List'
import './App.css'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  render() { 
    return (
      <div className="App">
        <Header />
        <List />
      </div>
    )
  }
}

export default App