import React, { Component, Fragment } from 'react'
import Header from './Header'
import Banner from './Banner'
import HomeMain from './HomeMain'
import Footer from './Footer'

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }
  render() { 
    return (
      <Fragment>
        <Header />
        <Banner />
        <HomeMain />
        <Footer />
      </Fragment>
    );
  }
}

export default Home;