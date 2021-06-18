import React from 'react'
import { render } from 'react-dom'

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      count: 0,
    }

    this.onClick = this.onClick.bind(this)
  }

  onClick() {
    this.setState((state) => ({
      count: state.count + 1,
    }))
  }

  render() {
    const { count } = this.state
    return (
      <div>
        <span>{count}</span>
        <button onClick={this.onClick}>click me</button>
      </div>
    )
  }
}

render(
  <App />,
  document.getElementById('app'),
)
