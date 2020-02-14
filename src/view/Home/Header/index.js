import React, { Component } from 'react'
import logo from '../../../assets/img/logo.png'
import './Header.css'

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      menuList: [
        { title: '首   页', active: true },
        { title: '社招招聘', active: false },
        { title: '校园招聘', active: false },
        { title: '了解阿里', active: false },
        { title: '校园招聘', active: false }
      ]
    }
  }
  render() { 
    const { menuList } = this.state
    return (
      <div className="home-header">
        <div className="header-main">
          <a className="header-logo" href="www"><img src={logo} alt="logo" /></a>
          <span className="header-cut">|</span>
          <span className="header-title">社招官网</span>
          <ul className="header-menu">
            {
              menuList.map((item, index) => (
                <li className="header-menu-item" style={{color: item.active? '#F37327': ''}} key={index}>{item.title}</li>
              ))
            }
          </ul>
          <span className="header-txt">欢迎来到阿里巴巴集团招聘！</span>
          <span className="header-txt pointer">登录</span>
          <span className="header-cut">|</span>
          <span className="header-txt pointer">注册</span>
        </div>
      </div>
    )
  }
}

export default Header;