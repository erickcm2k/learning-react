// useReducer: simple Counter
// http://localhost:3000/isolated/exercise/01.js

import * as React from 'react'

// State is the previous state and action the new state object
const countReducer = (state, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return {
        ...state,
        count: state.count + action.step,
      }
    default:
      throw new Error('Invalid actiion.')
  }

  // return {
  //   ...state,
  //   ...(typeof action === 'function' ? action(state) : action),
  // }
}

function Counter({initialCount = 0, step = 5}) {
  const initialState = {
    count: initialCount,
  }
  const [state, dispatch] = React.useReducer(countReducer, initialState)

  const {count} = state
  const increment = () => dispatch({type: 'INCREMENT', step})

  return (
    <>
      <p>{count}</p>
      <button onClick={increment}>+</button>
    </>
  )
}

function App() {
  return <Counter />
}

export default App
