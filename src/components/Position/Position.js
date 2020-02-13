import React, { Component } from 'react'
import Header from '../Header'
import List from '../List'
import './Position.css'

class Position extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  render() { 
    return ( 
      <div className="position">
        <Header />
        <List />
      </div>
    );
  }
}

export default Position;