import React, { Component } from 'react'
import Demo from './components/1_setState写法'
export default class App extends Component {
  render() {
    return (
      <div>
        <Demo sendCount={3}/>
      </div>
    )
  }
}
