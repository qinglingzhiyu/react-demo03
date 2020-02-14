import React, { Component } from 'react'
import bg from '../../../assets/img/bg.png'
import './Banner.css'
class Banner extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: '',
      hotSearchList: [
        'JAVA', 'IOS', '数据', '安全', '搜索', '算法', '视觉', '交互', '前端'
      ]
    }
  }

  handleChange() {
    console.log(this.input.value)
  }

  render() {
    const { inputValue, hotSearchList } = this.state
    return (
      <div className="banner">
        <img className="banner-bg" src={bg} alt=""/>
        <div className="banner-main"></div>
        <div className="banner-content">
          <p className="banner-tip">If not now, when?</p>
          <p className="banner-tip">If not me, who?</p>
          <p className="banner-tip-chinese">此时此刻，非我莫属!</p>
          <div className="banner-search">
            <div className="banner-search-bg"></div>
            <input maxLength="40" ref={input => this.input = input} value={inputValue} className="banner-search-input" placeholder="请输入职位关键字" onChange={this.handleChange.bind(this)}/>
            <span className="banner-search-btn">搜索</span>
          </div>
          <div className="banner-hot">
            <span>热门搜索:</span>
            <ul className="banner-hot-list">
              { hotSearchList.map((item, index) => (
                <li key={index}>{item}</li>
              )) }
            </ul>
          </div>
          
        </div>
      </div>
    );
  }
}

export default Banner;