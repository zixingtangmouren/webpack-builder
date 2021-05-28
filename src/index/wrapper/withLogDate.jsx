/* eslint-disable react/jsx-props-no-spreading */
/**
 * @Author: tangzhicheng
 * @Date: 2021-05-20 22:42:44
 * @LastEditors: tangzhicheng
 * @LastEditTime: 2021-05-20 22:43:00
 * @Description: file content
 */

import React from 'react'

const withLoaDate = (WrappedComponent) => {
  class WithLoaDate extends React.Component {
    constructor(props) {
      super(props)
      this.state = {
        moutedDate: null,
      }
    }

    componentDidMount() {
      this.setState({
        moutedDate: new Date().toDateString(),
      })
    }

    render() {
      const { value, ...needProps } = this.props

      return (
        <div>
          {this.state.moutedDate}
          <WrappedComponent {...needProps} />
        </div>
      )
    }
  }

  WithLoaDate.displayName = `WithLoaDate(${WrappedComponent.displayName || WrappedComponent.name || 'Component'})`

  return WithLoaDate
}

export default withLoaDate
