import { createStore } from 'redux'

import reducer from './reducer'

let state = {
  editorValue: '',
  operation: ''
}

export default createStore(
  reducer,
  state,
)