import React, { Component } from 'react'
import Position from '../../../components/Position'
import ad1 from '../../../assets/img/ad1.png'
import ad2 from '../../../assets/img/ad2.svg'
import './HomeMain.css'

class HomeMain extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  render() { 
    return (
      <div className="main">
        <Position />
        <div className="main-other">
          <a href="www" className="main-img-box">
            <img className="main-img" src={ad1} alt=""/>
          </a>
          <a href="www" className="main-img-box">
            <img className="main-img2" src={ad2} alt=""/>
          </a>
        </div>
      </div>
    );
  }
}

export default HomeMain