// useReducer: simple Counter
// http://localhost:3000/isolated/exercise/01.js

import * as React from 'react'

// State is the previous state and action the new state object
const countReducer = (state, action) => {
  if (typeof action === 'function') {
    console.log(action(state))
  }

  return {
    ...state,
    ...(typeof action === 'function' ? action(state) : action),
  }
}

function Counter({initialCount = 0, step = 1}) {
  const initialState = {
    count: initialCount,
  }
  const [state, setState] = React.useReducer(countReducer, initialState)

  const {count} = state
  const increment = () => {
    setState(currentState => ({count: currentState.count + step}))
  }

  return (
    <>
      <button onClick={increment}>{count}</button>
      <button onClick={() => setState({count: count + step})}>{count}</button>
    </>
  )
}

function App() {
  return <Counter />
}

export default App
