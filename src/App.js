import React, { useReducer } from 'react'
import { initialState, reducer, StateContext } from './store/store'
import Layout from './components/Layout/Layout'

const App = () => {

  const [state, dispatch] = useReducer(reducer, initialState)

  return (
      <StateContext.Provider value={{state, dispatch}}>
        <Layout />
      </StateContext.Provider>
  )
}

export default App