import React from 'react'
import Board from './Board'

export default class Game extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      history: [
        {
          squares: Array(9).fill(null),
        },
      ],
      isX: true,
      setpNum: 1,
    }
  }

  handleClick = (index) => {
    this.setState((state) => {
      const history = state.history.slice(0, state.setpNum)
      const squares = history[history.length - 1].squares.slice()
      squares[index] = state.isX ? 'X' : 'O'
      return {
        history: history.concat({ squares }),
        isX: !state.isX,
        setpNum: state.setpNum + 1,
      }
    })
  }

  computeWinner = (squares) => {
    const pointIndexs = []
    const role = this.state.isX ? 'O' : 'X'
    squares.forEach((s, i) => {
      if (s === role) {
        pointIndexs.push(i)
      }
    })
    const result = pointIndexs.sort().join('').toString()
    if (result.length < 3) return
    const success = ['012', '345', '678', '036', '147', '358', '048', '246']
    if (success.includes(result)) {
      return <div>{`${role} is winner`}</div>
    }
    return null
  }

  preSetp = () => {
    if (this.state.setpNum - 1 < 1) {
      return
    }
    this.setState((state) => ({
      isX: !state.isX,
      setpNum: state.setpNum - 1,
    }))
  }

  nextSetp = () => {
    if (this.state.setpNum + 1 > this.state.history.length) {
      return
    }
    this.setState((state) => ({
      isX: !state.isX,
      setpNum: state.setpNum + 1,
    }))
  }

  render() {
    const current = this.state.history[this.state.setpNum - 1]
    const { squares } = current
    const Winner = this.computeWinner(squares)

    return (
      <div>
        {Winner}
        <Board squares={squares} onClick={this.handleClick} />
        <div>
          <button onClick={this.preSetp} type="button">pre</button>
          <button onClick={this.nextSetp} type="button">next</button>
        </div>
      </div>
    )
  }
}
