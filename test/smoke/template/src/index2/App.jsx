import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const App = () => {
  const [count, setCount] = useState(0)

  return (
    <>
      asdasd
      <button onClick={() => setCount(100)}>click me</button>
      <div>{count}</div>
    </>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))
