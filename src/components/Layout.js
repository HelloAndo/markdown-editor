import React, { Component } from 'react'

import Header from './Header'
import Editor from './Editor'
import Previewer from './Previewer'

export default class Layout extends Component {

  render () {

    return (
      <React.Fragment>
        <Header />
        <div className="main-box">
          <Editor test="test" />
          <Previewer />
        </div>
      </React.Fragment>
    )
  }
}