import React, { createContext, useReducer, useContext } from 'react';
import reducer from './reducer';

const MyContext = createContext()

const initialState = {
  count: 0
}

export const MyContextProvider = (props) => {
  const [state, dispatch] = useReducer(reducer, initialState)

  const value = {
    state,
    dispatch,
  }

  return (
    <MyContext.Provider
      value={value}
      {...props}
    />
  )
}

export const useMyContext = () => {
  const context = useContext(MyContext)
  if (context === undefined) {
    throw new Error('useMyContext must be used within a MyContext')
  }
  return context
}
