import React, { Component } from 'react'
import './Header.css'
class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  render() { 
    return (  
        <div className="header">
          <span className="header-title">最新职位</span>
          <span className="header-more">更多</span>
        </div>
    );
  }
}

export default Header;