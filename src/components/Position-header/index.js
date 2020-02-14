import React, { Component } from 'react'
import './Position-header.css'

class PositionHeader extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }

  handleClick() {
    alert('你点击了"更多"')
  }

  render() { 
    return (  
        <div className="header">
          <span className="header-title">最新职位</span>
          <span className="header-more" onClick={this.handleClick.bind(this)}>更多</span>
        </div>
    );
  }
}

export default PositionHeader;