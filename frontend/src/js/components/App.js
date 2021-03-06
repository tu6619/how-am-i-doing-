import React from 'react'
import Header from './../containers/Header/header_index.js'
import Footer from './Footer/footer_index.js'

import '../../scss/style.scss'

const options = {
  logoUrl: 'img/silouhette.jpg'
}

export default class App extends React.Component {
  render () {
    return (
      <div>
        <Header
          logoUrl={options.logoUrl}
          fluid
        />
        <div className='header-spacing'></div>
          {this.props.children}
        <Footer />
      </div>
    )
  }
}

App.propTypes = {
  children: React.PropTypes.element
}
