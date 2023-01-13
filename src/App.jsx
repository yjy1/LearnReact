import React, { Component } from 'react'
import Header from './components/Header'
import List from './components/List'
import Item from './components/Item'
import Footer from './components/Footer'
import './App.css'
export default class App extends Component {
  state = {
    todos: [
      { id: '001', name: '吃饭', isComplete: true },
      { id: '002', name: '睡觉', isComplete: true },
      { id: '003', name: '打代码', isComplete: false },
      { id: '004', name: '逛街', isComplete: true },
    ]
  }

  render() {
    const {todos} = this.state
    return (
      <div className='todo-container'>
        <div className='todo-wrap'>
          <Header  />
          <List todos={todos} />
          <Footer />
        </div>
      </div>
    )
  }
}
