import React from 'react'
import ReactDOM from 'react-dom'
import './style.scss'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from 'react-router-dom'

const App = () => (
  <div className="app">
    <ul>
      <li>
        <Link to="/home" />
      </li>
      <li>
        <Link to="/about" />
      </li>
    </ul>
    <Router>
      <Switch>
        <Route path="/home">
          home
        </Route>
        <Route path="/about">
          about
        </Route>
      </Switch>
    </Router>
  </div>
)

ReactDOM.render(<App />, document.getElementById('app'))
