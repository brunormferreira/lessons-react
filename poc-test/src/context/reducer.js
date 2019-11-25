const reducer = (state, action) => {
  const { type, payload } = action

  switch (type) {
    case 'INCREMENT':
      return {
        ...state,
        count: state.count + payload
      }

    case 'DECREMENT':
      return {
        ...state,
        count: state.count - payload
      }
      
    case 'INCREMENT_ONE':
      return {
        ...state,
        count: state.count + 1
      }

    case 'DECREMENT_ONE':
      return {
        ...state,
        count: state.count - 1
      }


    default:
      return state
  }
}

export default reducer
