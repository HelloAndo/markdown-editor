import React, { Component } from 'react'

// import icon from '@images/link.svg'
import icon from '../images/link.svg'
import { connect } from 'react-redux';

import { triggerOperation } from '../store/actionType'

const TOOLBAR = [
  {
    name: 'bold',
    icon: icon,
    insertString: '**'
  },
  {
    name: 'italic',
    icon: icon,
    insertString: '*'
  },
  {
    name: 'underline',
    icon: icon,
    insertString: '---'
  },
  {
    name: 'strickout',
    icon: icon,
    insertString: '<u></u>'
  },
  {
    name: 'headline',
    icon: icon,
    insertString: '# '
  },
  {
    name: 'quote',
    icon: icon,
    insertString: '> '
  },
  {
    name: 'code',
    icon: icon,
    insertString: '``` ```'
  },
  {
    name: 'orderedList',
    icon: icon,
    insertString: '<u></u>'
  },
  {
    name: 'unorderedList',
    icon: icon,
    insertString: '<u></u>'
  },
  {
    name: 'link',
    icon: icon,
    insertString: '[Link](http://example.com/)'
  },
  {
    name: 'table',
    icon: icon,
    insertString: '<u></u>'
  },
  {
    name: 'dividing',
    icon: icon,
    insertString: '<u></u>'
  },
  {
    name: 'picture',
    icon: icon,
    insertString: '<u></u>'
  },
]

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
                style={{ backgroundImage: `url(${tool.icon})` }} >{tool.name}
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