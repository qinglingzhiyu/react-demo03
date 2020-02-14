import React, { Component } from 'react'
import './Footer.css'

class Footer extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  render() { 
    return (
      <footer className="footer">
        <span>阿里巴巴集团 Copyright ©1999-2020 版权所有</span>
      </footer>
    );
  }
}

export default Footer;