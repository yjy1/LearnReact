import React, { Component,Fragment } from 'react'
import Demo from './components/4_fragment'
export default class App extends Component {
  render() {
    return (
      <Fragment a="app">
        <Demo />
      </Fragment>
    )
  }
}
 