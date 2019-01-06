import React, { Component } from 'react'
import { connect } from 'react-redux'
// import { bindActionCreators } from 'redux'

import { editorChange } from '../store/actionType'

import EditBox from '../utils/editBox'

let editBox = null

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
    editBox = new EditBox(this.editorRef)

    // document.onselectionchange = (e) => {
    //   // console.log('onselectionchange')
    //   this.editBox.update()
    // }
    // // debugger
    // this.editorRef.addEventListener('selectionchange', (e) => {
    //   // e.stopPropagation()
    //   // debugger
    //   this.updateEditorState()
    // }, false)
  }

  componentWillReceiveProps (props, old) {

    const { operation, operation: { exec } } = props
    
    console.log(operation, this.editorRef)

    let { value, range: [start, end] } = editBox[exec || 'wrap'](operation)

    // document.createRange()
    
    this.setState({
      value
    }, () => {
      
      this.editorRef.focus()
      // debugger
      this.editorRef.setSelectionRange(start, end)

    })
  }

  componentWillUnmount () {
    // this.editorRef.removeEventListener('click')
  }
}

export default Editor