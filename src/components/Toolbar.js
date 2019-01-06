import React, { Component } from 'react'

// import icon from '@images/link.svg'
import icon from '../images/link.svg'
import { connect } from 'react-redux';

import { triggerOperation } from '../store/actionType'

// TODO:mark使用正则？
const TOOLBAR = [
  {
    name: 'bold',
    markStart: '**',
    markEnd: '**',
    placeholder: '加粗',
    exec: 'wrap'
  },
  {
    name: 'italic',
    // mark: /^\*(\w)*\*$/,
    markStart: '*',
    markEnd: '*',
    placeholder: '斜体'
  },
  {
    name: 'underline',
    markStart: '<u>',
    markEnd: '</u>'
  },
  {
    name: 'strickout',
    markStart: '~~',
    markEnd: '~~',
  },
  {
    name: 'headline',
    markStart: '# '
  },
  {
    name: 'quote',
    markStart: '> '
  },
  {
    name: 'code',
    markStart: '\n\r```\n\r',
    markEnd: '```'
  },
  {
    name: 'orderedList',
    markStart: '1. '
  },
  {
    name: 'unorderedList',
    markStart: '- '
  },
  {
    name: 'link',
    markStart: '[Link](http://example.com/)'
  },
  {
    name: 'table',
    markStart: `\n\rcolumn1 | column2 | column3 
------- | ------- | ------- 
column1 | column2 | column3 
column1 | column2 | column3 
column1 | column2 | column3`,
    exec: 'wrap'
  },
  {
    name: 'dividing',
    markStart: '\n\r----\n\r'
  },
  {
    name: 'picture',
    markStart: '![Img](http://example.com/)'
  },
]

for (let tool of TOOLBAR) {
  tool.icon = require(`../images/${tool.name}.svg`)
}

@connect(
  null,
  dispatch => ({
    triggerOperation: payload => dispatch({ type: triggerOperation, payload })
  })
)
class Toolbar extends Component {

  render () {
    return (
      <div className="toolbar clearfix">
        {
          TOOLBAR.map(tool => (
            <div className="fl tool"
              key={tool.name}
              onClick={this.onClick.bind(this, tool)}
              >
              <i
                style={{ backgroundImage: `url(${tool.icon})` }} >
              </i>
            </div>
          ))
        }
      </div>
    )
  }

  onClick = (tool, e) => {
    const { name } = tool

    // console.log('clicked: ', name)

    this.props.triggerOperation(tool)
  }
}

export default Toolbar