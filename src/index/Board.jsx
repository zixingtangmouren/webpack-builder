import React from 'react'
import Square from './Square'

export default class Board extends React.Component {
  renderSquare(i) {
    const children = []
    for (let index = i; index <= i + 2; index++) {
      children.push(
        <Square
          value={this.props.squares[index]}
          key={index}
          onClick={() => this.props.onClick(index)}
        />,
      )
    }
    return children
  }

  render() {
    return (
      <>
        <div>{this.renderSquare(0)}</div>
        <div>{this.renderSquare(3)}</div>
        <div>{this.renderSquare(6)}</div>
      </>
    )
  }
}
