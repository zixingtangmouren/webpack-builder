import React, { useState } from 'react'
import ReactDOM from 'react-dom'
import './style.scss'

const App = () => {
  const [count, setCount] = useState(0)

  return (
    <div className="app">
      asdasd
      <button onClick={() => setCount(100)}>click me</button>
      <div className="niu-plus">{count}</div>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))
