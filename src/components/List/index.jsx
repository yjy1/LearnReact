import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Item from '../Item'
import  './index.css'
export default class List extends Component {
  static propTypes ={
    updateTodo:PropTypes.func.isRequired,
    todos:PropTypes.array.isRequired
  }
  render() {
    const {todos,updateTodo} = this.props
    return (
      <ul className='todo-main'>
        {
          todos.map((obj)=>{
            // {...obj} 结构并传递给子组件
            return  <Item updateTodo={updateTodo} {...obj} key={obj.id}/>
          })
        }
      </ul>
    )
  }
}
