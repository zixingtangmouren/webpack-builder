import React, { Suspense } from 'react'
import ReactDom from 'react-dom'
import './index.scss'
import banner from './banner.png'
import Game from './Game'
import ErrorBoundary from './ErrorBoundary'
import MyContext from './context/my-context'

const LazyComponent = React.lazy(() => import(/* webpackChunkName: "LazyTest" */'./LazyComponent'))

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      context: {
        id: '12314',
        name: 'tang',
      },
    }

    this.changeName = this.changeName.bind(this)
  }

  changeName() {
    console.log('sdsddsdd')
    this.setState(({ context }) => ({
      context: {
        id: context.id,
        name: 'niubi',
      },
    }))
  }

  render() {
    return (
      <div className="app">
        <img src={banner} alt="" />
        <Game />
        <ErrorBoundary>
          <Suspense fallback={<div>loading....</div>}>
            <MyContext.Provider value={this.state.context}>
              <LazyComponent onClick={this.changeName} value={100} cid="123323" />
            </MyContext.Provider>
          </Suspense>
        </ErrorBoundary>
      </div>
    )
  }
}

ReactDom.render(<App />, document.getElementById('app'))
