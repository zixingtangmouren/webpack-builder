import React from 'react'

export default class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      error: false,
    }
  }

  static getDerivedStateFromError() {
    return { error: true }
  }

  componentDidCatch(error, errorInfo) {
    console.log(error, errorInfo)
  }

  render() {
    return this.state.error ? <div>components error</div> : this.props.children
  }
}
