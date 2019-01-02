import * as ACTION_TYPES from './actionType'

export default (state, action) => {

  const { type, payload } = action
  
  switch (type) {
    case ACTION_TYPES.editorChange: 
      console.log('reducer: ', payload)
      return { ...state, editorValue: payload }
    
    case ACTION_TYPES.triggerOperation:
      console.log(payload)
      return { ...state, operation: payload }

    default:
      return state
  }
}