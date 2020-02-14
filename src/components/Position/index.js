import React, { Component } from 'react'
import PositionHeader from '../Position-header'
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
        <PositionHeader />
        <List />
      </div>
    );
  }
}

export default Position;