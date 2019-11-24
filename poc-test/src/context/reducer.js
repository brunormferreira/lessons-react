const reducer = (state, action) => {
  const { type, payload } = action

  switch (type) {
    case 'INCREMENT':
      return {
        ...state,
        count: payload
      }

    case 'DECREMENT':
      return {
        ...state,
        count: payload
      }

    default:
      return state
  }
}

export default reducer
