import React from 'react'
import MyContext from './context/my-context'
import whitLogDate from './wrapper/withLogDate'

class LazyComponent extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      list: [1, 2, 34, 4, 5, 66],
    }
  }

  componentDidMount() {
    console.log(this.context)
  }

  renderList() {
    return this.state.list.map((data) => <li key={data}>{data}</li>)
  }

  render() {
    return (
      <div>
        <div>{this.context.id}</div>
        <div>{this.context.name}</div>
        { this.renderList() }
        <div><button onClick={this.props.onClick}>change</button></div>
      </div>
    )
  }
}

LazyComponent.contextType = MyContext

export default whitLogDate(LazyComponent)
