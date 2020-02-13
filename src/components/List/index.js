import React, { Component } from 'react'
import './List.css'

let timer = null

class List extends Component {
  constructor(props) {
    super(props);
    this.state = {
      top: 0,
      list: [
        { title: '淘宝-社群产品高级产品专家（小程序、开放）', city: '杭州', time: '1分钟前' },
        { title: '淘宝-生态合作伙伴', city: '杭州', time: '1分钟前' },
        { title: '淘宝-解决方案产品经理', city: '杭州', time: '2分钟前' },
        { title: '本地生活-测试专家-上海', city: '上海', time: '1分钟前' },
        { title: '蚂蚁金服-解决方案TL（IOT）-支付宝', city: '杭州', time: '15分钟前' },
        { title: '本地生活-DBA技术专家-上海', city: '上海', time: '15分钟前' },
        { title: '本地生活-DBA技术专家-上海本地生活-DBA技术专家-上海', city: '上海', time: '15分钟前' },
        { title: '淘宝-社群产品高级产品专家（小程序、开放）', city: '杭州', time: '1分钟前' },
        { title: '淘宝-生态合作伙伴', city: '杭州', time: '1分钟前' },
        { title: '淘宝-解决方案产品经理', city: '杭州', time: '2分钟前' },
        { title: '本地生活-测试专家-上海', city: '上海', time: '1分钟前' },
        { title: '蚂蚁金服-解决方案TL（IOT）-支付宝', city: '杭州', time: '15分钟前' },
        { title: '本地生活-DBA技术专家-上海', city: '上海', time: '15分钟前' },
        { title: '本地生活-DBA技术专家-上海本地生活-DBA技术专家-上海', city: '上海', time: '15分钟前' },
        { title: '淘宝-社群产品高级产品专家（小程序、开放）', city: '杭州', time: '1分钟前' },
        { title: '淘宝-生态合作伙伴', city: '杭州', time: '1分钟前' },
        { title: '淘宝-解决方案产品经理', city: '杭州', time: '2分钟前' },
        { title: '本地生活-测试专家-上海', city: '上海', time: '1分钟前' },
        { title: '蚂蚁金服-解决方案TL（IOT）-支付宝', city: '杭州', time: '15分钟前' },
        { title: '本地生活-DBA技术专家-上海', city: '上海', time: '15分钟前' },
        { title: '本地生活-DBA技术专家-上海本地生活-DBA技术专家-上海', city: '上海', time: '15分钟前' },
        { title: '淘宝-社群产品高级产品专家（小程序、开放）', city: '杭州', time: '1分钟前' },
        { title: '淘宝-生态合作伙伴', city: '杭州', time: '1分钟前' },
        { title: '淘宝-解决方案产品经理', city: '杭州', time: '2分钟前' },
        { title: '本地生活-测试专家-上海', city: '上海', time: '1分钟前' },
        { title: '蚂蚁金服-解决方案TL（IOT）-支付宝', city: '杭州', time: '15分钟前' },
        { title: '本地生活-DBA技术专家-上海', city: '上海', time: '15分钟前' },
        { title: '本地生活-DBA技术专家-上海本地生活-DBA技术专家-上海', city: '上海', time: '15分钟前' },
        { title: '淘宝-社群产品高级产品专家（小程序、开放）', city: '杭州', time: '1分钟前' },
        { title: '淘宝-生态合作伙伴', city: '杭州', time: '1分钟前' },
        { title: '淘宝-解决方案产品经理', city: '杭州', time: '2分钟前' },
        { title: '本地生活-测试专家-上海', city: '上海', time: '1分钟前' },
        { title: '蚂蚁金服-解决方案TL（IOT）-支付宝', city: '杭州', time: '15分钟前' },
        { title: '本地生活-DBA技术专家-上海', city: '上海', time: '15分钟前' },
        { title: '本地生活-DBA技术专家-上海本地生活-DBA技术专家-上海', city: '上海', time: '15分钟前' },
        { title: '淘宝-社群产品高级产品专家（小程序、开放）', city: '杭州', time: '1分钟前' },
        { title: '淘宝-生态合作伙伴', city: '杭州', time: '1分钟前' },
        { title: '淘宝-解决方案产品经理', city: '杭州', time: '2分钟前' },
        { title: '本地生活-测试专家-上海', city: '上海', time: '1分钟前' },
        { title: '蚂蚁金服-解决方案TL（IOT）-支付宝', city: '杭州', time: '15分钟前' },
        { title: '本地生活-DBA技术专家-上海', city: '上海', time: '15分钟前' },
        { title: '本地生活-DBA技术专家-上海本地生活-DBA技术专家-上海', city: '上海', time: '15分钟前' },
        { title: '淘宝-社群产品高级产品专家（小程序、开放）', city: '杭州', time: '1分钟前' },
        { title: '淘宝-生态合作伙伴', city: '杭州', time: '1分钟前' },
        { title: '淘宝-解决方案产品经理', city: '杭州', time: '2分钟前' },
        { title: '本地生活-测试专家-上海', city: '上海', time: '1分钟前' },
        { title: '蚂蚁金服-解决方案TL（IOT）-支付宝', city: '杭州', time: '15分钟前' },
        { title: '本地生活-DBA技术专家-上海', city: '上海', time: '15分钟前' },
        { title: '本地生活-DBA技术专家-上海本地生活-DBA技术专家-上海', city: '上海', time: '15分钟前' },
        { title: '淘宝-社群产品高级产品专家（小程序、开放）', city: '杭州', time: '1分钟前' },
        { title: '淘宝-生态合作伙伴', city: '杭州', time: '1分钟前' },
        { title: '淘宝-解决方案产品经理', city: '杭州', time: '2分钟前' },
        { title: '本地生活-测试专家-上海', city: '上海', time: '1分钟前' },
        { title: '蚂蚁金服-解决方案TL（IOT）-支付宝', city: '杭州', time: '15分钟前' },
        { title: '本地生活-DBA技术专家-上海', city: '上海', time: '15分钟前' },
        { title: '本地生活-DBA技术专家-上海本地生活-DBA技术专家-上海', city: '上海', time: '15分钟前' },
        { title: '淘宝-社群产品高级产品专家（小程序、开放）', city: '杭州', time: '1分钟前' },
        { title: '淘宝-生态合作伙伴', city: '杭州', time: '1分钟前' },
        { title: '淘宝-解决方案产品经理', city: '杭州', time: '2分钟前' },
        { title: '本地生活-测试专家-上海', city: '上海', time: '1分钟前' },
        { title: '蚂蚁金服-解决方案TL（IOT）-支付宝', city: '杭州', time: '15分钟前' },
        { title: '本地生活-DBA技术专家-上海', city: '上海', time: '15分钟前' },
        { title: '本地生活-DBA技术专家-上海本地生活-DBA技术专家-上海', city: '上海', time: '15分钟前' },
        { title: '淘宝-社群产品高级产品专家（小程序、开放）', city: '杭州', time: '1分钟前' },
        { title: '淘宝-生态合作伙伴', city: '杭州', time: '1分钟前' },
        { title: '淘宝-解决方案产品经理', city: '杭州', time: '2分钟前' },
        { title: '本地生活-测试专家-上海', city: '上海', time: '1分钟前' },
        { title: '蚂蚁金服-解决方案TL（IOT）-支付宝', city: '杭州', time: '15分钟前' },
        { title: '本地生活-DBA技术专家-上海', city: '上海', time: '15分钟前' },
        { title: '本地生活-DBA技术专家-上海本地生活-DBA技术专家-上海', city: '上海', time: '15分钟前' },
        { title: '淘宝-社群产品高级产品专家（小程序、开放）', city: '杭州', time: '1分钟前' },
        { title: '淘宝-生态合作伙伴', city: '杭州', time: '1分钟前' },
        { title: '淘宝-解决方案产品经理', city: '杭州', time: '2分钟前' },
        { title: '本地生活-测试专家-上海', city: '上海', time: '1分钟前' },
        { title: '蚂蚁金服-解决方案TL（IOT）-支付宝', city: '杭州', time: '15分钟前' },
        { title: '本地生活-DBA技术专家-上海', city: '上海', time: '15分钟前' },
        { title: '本地生活-DBA技术专家-上海本地生活-DBA技术专家-上海', city: '上海', time: '15分钟前' },
        { title: '淘宝-社群产品高级产品专家（小程序、开放）', city: '杭州', time: '1分钟前' },
        { title: '淘宝-生态合作伙伴', city: '杭州', time: '1分钟前' },
        { title: '淘宝-解决方案产品经理', city: '杭州', time: '2分钟前' },
        { title: '本地生活-测试专家-上海', city: '上海', time: '1分钟前' },
        { title: '蚂蚁金服-解决方案TL（IOT）-支付宝', city: '杭州', time: '15分钟前' },
        { title: '本地生活-DBA技术专家-上海', city: '上海', time: '15分钟前' },
        { title: '本地生活-DBA技术专家-上海本地生活-DBA技术专家-上海', city: '上海', time: '15分钟前' },
      ]
    }
  }
  componentDidMount() {
    console.log(this.ul.offsetHeight)
    this.interFun()
  }

  interFun = () => {
    timer = setInterval(() => {
      const { top } = this.state
      this.setState({
        top: this.ul.offsetHeight+top > 0 ? top-1 : 0
      })
    }, 50)
  }

  componentWillUnmount() {
    clearInterval(timer)
  }

  // 鼠标移入
  mouseOver() {
    clearInterval(timer)
  }

  // 鼠标移出
  mouseOut() {
    this.interFun()
  }

  handleClick(item) {
    alert(`${item.title}`)
  }

  render() { 
    const { list, top } = this.state
    return ( 
      <ul
        ref={ul => this.ul = ul}
        className="position-list" 
        style={{top: top+'px'}} 
        onMouseOver={this.mouseOver.bind(this)} 
        onMouseOut={this.mouseOut.bind(this)}
      >
        {
          list.map((item, index) => (
            <li className="position-item" key={index} onClick={this.handleClick.bind(this, item)}>
              <span className="position-item-title">{item.title}</span>
              <span className="position-item-city">{item.city}</span>
              <span className="position-item-time">{item.time}</span>
            </li>
          ))
        }
      </ul>
    )
  }
}

export default List;