import React, { Component } from 'react'
import { connect } from 'react-redux'

import marked from 'marked'
import hljs from 'highlight.js'
import 'highlight.js/styles/tomorrow-night-eighties.css'

marked.setOptions({
  highlight: function(code, lang, callback) {

    let hl = hljs.highlightAuto(code)
    return hl.value;
  }
})

@connect(
  state => {
    return { value: state.editorValue }
  }
)
class Previewer extends Component {

  constructor (props) {
    super(props)

    this.previewer = null
  }

  state = {
    value: '',
    hl: ''
  }

  render () {
    // console.log('previewer: ', this.props.value)
    return (
      <React.Fragment>

        <div className="previewer"
          ref={el => this.previewer=el}
          dangerouslySetInnerHTML={{ __html: this.state.value}}>
        </div>

      </React.Fragment>
    )
  }

  componentWillReceiveProps (props, old) {

    let md = marked(props.value)
    this.setState({
      value: md
    })
  }

  componentDidMount () {
    window.hl = hljs
  }
}

export default Previewer