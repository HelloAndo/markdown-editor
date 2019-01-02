import React, { Component } from 'react'

import Toolbar from './Toolbar'

export default class Header extends Component {

  render () {
    return (
      <div className="header">
        <Toolbar />
      </div>
    )
  }
}