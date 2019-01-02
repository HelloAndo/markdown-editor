import React, { Component } from 'react'
import { connect } from 'react-redux'
// import { bindActionCreators } from 'redux'

import { editorChange } from '../store/actionType'

@connect(
  state => ({ operation: state.operation}),
  // null
  // dispatch => bindActionCreators({ editorChange }, dispatch)
  dispatch => ({
    editorChange: (payload) => dispatch({ type: editorChange, payload })
  })
)
class Editor extends Component {

  constructor (props) {
    super(props)

    this.editorRef = null
  }

  state = {
    value: ''
  }

  render () {
    let { value } = this.state
    // console.log('editor_render: ', this.props)

    return (
      <div className="editor">
        <textarea name="editor" id="editor"
          ref={el => this.editorRef=el}
          value={value}
          onChange={this.onChange} ></textarea>
      </div>
    )
  }

  onChange = e => {
    // let s = window.getSelection()
    // console.log('editor: ', s.toString())
    this.setState({
      value: e.target.value
    })
    this.props.editorChange(e.target.value)
  }

  componentDidMount () {
    // this.editorRef.addEventListener('click', () => {
    //   let s = window.getSelection()
    //   console.log('editor: ', s.toString())
    // }, false)
  }

  componentWillReceiveProps (props, old) {
    const { operation } = props
    console.log(operation, this.editorRef)
    let _value = this.editorRef.value,
        _start = this.editorRef.selectionStart,
        _end = this.editorRef.selectionEnd,
        value;

    value = _value.substr(0, _start) + operation.insertString + _value.substr(_start, _end) + operation.insertString + _value.substr(_end, _value.length)

    this.setState({
      value
    })
  }

  componentWillUnmount () {
    this.editorRef.removeEventListener('click')
  }
}

export default Editor